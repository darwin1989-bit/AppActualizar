import { Component, OnDestroy, OnInit } from "@angular/core";
import { Validators, FormControl, FormBuilder } from "@angular/forms";
import { Subscription } from "rxjs";
import { OfficesDto } from "src/app/api/api_actualizar/models";
import { ClientCreditComponentService } from "src/app/client/service/client-credit-component.service";
import { OfficesHttpService } from "src/app/shared/services/offices-http.service";

@Component({
  selector: "app-find-client-credit",
  templateUrl: "./find-client-credit.component.html",
  styleUrls: ["./find-client-credit.component.scss"],
})
export class FindClientCreditComponent implements OnInit, OnDestroy {
  private subscription!: Subscription;

  private office!: OfficesDto;

  public moneyLocale!: { money: string; locale: string };

  public clientCreditForm = this.fb.group({
    numberId: ["", [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
  });

  get numberIdControl(): FormControl {
    return this.clientCreditForm.get("numberId") as FormControl;
  }

  constructor(private fb: FormBuilder, private officeService: OfficesHttpService, private clientCreditService: ClientCreditComponentService) {}

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.subscription = this.clientCreditService.clearForm$.subscribe(() => this.clientCreditForm.reset());
    this.subscription = this.officeService.offices$.subscribe((res) => (this.office = res!));
    this.subscription = this.officeService.moneyLocale$.subscribe((res) => {
      this.moneyLocale = res;
      this.numberIdControl.markAsUntouched();
    });
  }

  public find(): void {
    this.clientCreditForm.markAllAsTouched();
    this.numberIdControl.markAsDirty();
    this.officeService.setValidFindOffice();
    if (Boolean(this.office) && this.clientCreditForm.valid) {
      this.clientCreditService.getClientCredit(this.office.ip_Red!, this.numberIdControl.value, this.office.ofi_Codigo_Interno_Empresa!);
    }
  }

  public clearInvoiceInput(event: KeyboardEvent): void {
    if (event.key == "Enter" || event.key == "Backspace" || event.key == "Delete" || event.key == "shift") this.clientCreditService.clearCreditClient();
  }
}
