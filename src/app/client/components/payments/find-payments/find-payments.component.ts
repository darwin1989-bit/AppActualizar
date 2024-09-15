import { Component, OnDestroy, OnInit } from "@angular/core";
import { Validators, FormBuilder, FormControl } from "@angular/forms";
import { Subscription } from "rxjs";
import { OfficesDto } from "src/app/api/api_actualizar/models";
import { ITypeInvoice } from "src/app/client/models/invoices-interface";
import { TypePaymentObj } from "src/app/client/models/payment-objects";
import { ITypePayment } from "src/app/client/models/payments-interface";
import { PaymentsComponentService } from "src/app/client/service/payments-component.service";
import { OfficesHttpService } from "src/app/shared/services/offices-http.service";

@Component({
  selector: "app-find-payments",
  templateUrl: "./find-payments.component.html",
  styleUrls: ["./find-payments.component.scss"],
})
export class FindPaymentsComponent implements OnInit, OnDestroy {
  public selectedType!: ITypePayment;

  public labelName: string = "";

  public dropdownPaymentType = TypePaymentObj;

  private subcription!: Subscription;

  private office!: OfficesDto;

  public regDocumentNumber: RegExp = /^[0-9]+$/;

  public paymentForm = this.fb.group({
    paymentsType: [this.selectedType, Validators.required],
    numberId: ["", Validators.required],
  });

  get paymentTypeControl(): FormControl<ITypeInvoice> {
    return this.paymentForm.get("paymentsType") as FormControl;
  }
  get numberIdControl(): FormControl {
    return this.paymentForm.get("numberId") as FormControl;
  }

  constructor(private fb: FormBuilder, private officeService: OfficesHttpService, private paymentService: PaymentsComponentService) {}

  ngOnDestroy(): void {
    if (this.subcription) {
      this.subcription.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.subcription = this.officeService.offices$.subscribe((res) => (this.office = res!));
    this.numberIdControl.disable();
  }

  public changeDropDown(): void {
    this.paymentService.clearPayments();
    let typeForm = this.paymentTypeControl.value.type;
    if (typeForm.includes("NI")) {
      this.numberIdControl.enable();
      this.labelName = "Número de indentificación";
      this.numberIdControl.markAsDirty();
    } else {
      this.labelName = "";
      this.numberIdControl.disable();
      this.numberIdControl.setValue("");
    }
  }

  public find(): void {
    this.officeService.setValidFindOffice();
    this.paymentService.clearPayments();
    this.paymentForm.markAllAsTouched();
    if (Boolean(this.office) && this.paymentForm.valid) {
      let typeForm = this.paymentTypeControl.value.type;

      if (typeForm.includes("TP")) this.paymentService.getPaymentsAll(this.office.ip_Red!);
      if (typeForm.includes("NI")) this.paymentService.getPayments(this.office.ip_Red!, this.numberIdControl.value);
    }
  }

  public clearInvoiceForm(): void {
    this.paymentForm.reset();

    this.paymentService.clearPayments();
  }

  public clearInvoiceInput(event: KeyboardEvent): void {
    if (event.key == "Enter" || event.key == "Backspace" || event.key == "Delete" || event.key == "Control" || event.key == "shift") this.paymentService.clearPayments();
  }
}
