import { Component, OnDestroy, OnInit } from "@angular/core";
import { Validators, FormControl, FormBuilder } from "@angular/forms";
import { Subscription } from "rxjs";
import { OfficesDto } from "src/app/api/api_actualizar/models";
import { TransactionsComponentService } from "src/app/client/service/transactions-component.service";
import { OfficesHttpService } from "src/app/shared/services/offices-http.service";

@Component({
  selector: "app-find-transactions",
  templateUrl: "./find-transactions.component.html",
  styleUrls: ["./find-transactions.component.scss"],
})
export default class FindTransactionsComponent implements OnInit, OnDestroy {
  private subscription!: Subscription;

  private office!: OfficesDto;

  public transactionsForm = this.fb.group({
    numberId: ["", [Validators.required, Validators.minLength(8), Validators.maxLength(13)]],
  });

  get numberIdControl(): FormControl {
    return this.transactionsForm.get("numberId") as FormControl;
  }

  constructor(private fb: FormBuilder, private officeService: OfficesHttpService, private transactionsService: TransactionsComponentService) {}

  ngOnInit(): void {
    this.subscription = this.officeService.offices$.subscribe((res) => (this.office = res!));
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  public find(): void {
    this.officeService.setValidFindOffice();
    this.numberIdControl.markAsDirty();
    this.transactionsService.clearTransactions();
    if (Boolean(this.office) && this.transactionsForm.valid) {
      this.transactionsService.getTransactionsNumberId(this.office.ip_Red!, this.numberIdControl.value);
    }
  }

  public clearInvoiceInput(event: KeyboardEvent): void {
    if (event.key == "Enter" || event.key == "Backspace" || event.key == "Delete" || event.key == "shift") this.transactionsService.clearTransactions();
  }
}
