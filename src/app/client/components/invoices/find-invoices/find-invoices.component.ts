import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { TypeInvoiceObj } from "../../../models/invoices-objects";
import { ITypeInvoice } from "../../../models/invoices-interface";
import { OfficesHttpService } from "src/app/shared/services/offices-http.service";
import { SharedService } from "src/app/shared/services/shared.service";
import { Subscription } from "rxjs";
import { InvoicesComponentService } from "../../../service/invoices-component.service";
import { OfficesDto } from "src/app/api/api_actualizar/models";

@Component({
  selector: "app-find-invoices",
  templateUrl: "./find-invoices.component.html",
  styleUrls: ["./find-invoices.component.scss"],
})
export class FindInvoicesComponent implements OnInit, OnDestroy {
  public selectedInvoiceType!: ITypeInvoice;

  public dropdownInvoiceType = TypeInvoiceObj;

  public regDocumentNumber: RegExp = /^[0-9]+$/;

  public labelName: string = "Selecciona el tipo";

  private subcription!: Subscription;

  private office!: OfficesDto;

  public invoicesForm = this.fb.group({
    invoiceType: [this.selectedInvoiceType, Validators.required],
    invoiceNumber: ["", Validators.required],
  });

  get invoiceTypeControl(): FormControl<ITypeInvoice> {
    return this.invoicesForm.get("invoiceType") as FormControl;
  }
  get invoiceNumberControl(): FormControl {
    return this.invoicesForm.get("invoiceNumber") as FormControl;
  }

  constructor(private fb: FormBuilder, private officeService: OfficesHttpService, private sharedService: SharedService, private invoiceService: InvoicesComponentService) {}

  ngOnDestroy(): void {
    if (this.subcription) {
      this.subcription.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.invoiceNumberControl.disable();
    this.subcription = this.sharedService.clearInvoiceForm$.subscribe(() => this.clearInvoiceForm());
    this.subcription = this.officeService.offices$.subscribe((res) => (this.office = res!));
  }

  public changeDropDown(): void {
    this.invoiceService.clearInvoices();
    this.invoiceNumberControl.reset();
    switch (this.invoiceTypeControl.value.type) {
      case "NF":
        this.invoiceNumberControl.enable();
        this.invoiceNumberControl.setValidators([Validators.required, Validators.minLength(15), Validators.maxLength(19)]);
        this.labelName = "Número de factura";
        this.regDocumentNumber = /[F0-9]+/;
        break;
      case "NC":
        this.regDocumentNumber = /^[0-9]+$/;
        this.invoiceNumberControl.enable();
        this.invoiceNumberControl.setValidators([Validators.required, Validators.minLength(9), Validators.maxLength(13)]);
        this.labelName = "Número de identificación";
        break;
      case "FT":
        this.invoiceNumberControl.disable();
        this.labelName = "";
        break;
    }
  }
  public find(): void {
    this.invoiceService.clearInvoices();
    this.invoicesForm.markAllAsTouched();
    this.invoiceNumberControl.markAsDirty();
    this.officeService.setValidFindOffice();
    if (this.invoicesForm.valid) {
      if (this.invoiceTypeControl.value.type == "NF") this.invoiceService.getInvoiceNumber(this.office.ip_Red!, this.invoiceNumberControl.value);
      if (this.invoiceTypeControl.value.type == "NC") this.invoiceService.getInvoiceIdentification(this.office.ip_Red!, this.invoiceNumberControl.value);
      if (this.invoiceTypeControl.value.type == "FT") this.invoiceService.getAllInvoices(this.office.ip_Red!, this.office.oficina!);
    }
  }

  public clearInvoiceForm(): void {
    this.invoicesForm.reset();
    this.invoiceService.clearInvoices();
  }

  public clearInvoiceInput(event: KeyboardEvent): void {
    if (event.key == "Enter" || event.key == "Backspace" || event.key == "Delete" || event.key == "Control" || event.key == "shift") this.invoiceService.clearInvoices();
  }
}
