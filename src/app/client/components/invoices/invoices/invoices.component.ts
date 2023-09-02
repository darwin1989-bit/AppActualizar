import { Component, LOCALE_ID, OnDestroy, OnInit } from "@angular/core";
import { InvoiceDto, OfficesDto } from "src/app/api/api_actualizar/models";

import { registerLocaleData } from "@angular/common";
import localeEsCrc from "@angular/common/locales/es-CR";
import localeEsEC from "@angular/common/locales/es-EC";
import { InvoicesComponentService } from "src/app/client/service/invoices-component.service";
import { Subscription } from "rxjs";
import { OfficesHttpService } from "src/app/shared/services/offices-http.service";

registerLocaleData(localeEsEC);
registerLocaleData(localeEsCrc);
@Component({
  selector: "app-invoices",
  templateUrl: "./invoices.component.html",
  styleUrls: ["./invoices.component.scss"],
  providers: [
    { provide: LOCALE_ID, useValue: "es-EC" },
    { provide: LOCALE_ID, useValue: "es-CR" },
  ],
})
export class InvoicesComponent implements OnInit, OnDestroy {
  public selectedInvoice!: InvoiceDto;

  public visible: boolean = false;

  private office!: OfficesDto;

  private subcription!: Subscription;

  constructor(public invoiceService: InvoicesComponentService, private officeService: OfficesHttpService) {}

  ngOnDestroy(): void {
    if (this.subcription) {
      this.subcription.unsubscribe();
    }
  }
  ngOnInit(): void {
    this.subcription = this.officeService.offices$.subscribe((res) => (this.office = res!));
  }

  public selectInvoice(invoice: InvoiceDto) {
    this.visible = true;
    this.invoiceService.getInvoiceDetailsMain(this.office.ip_Red!, invoice.serie_Factura!, invoice.moneda!);
  }
}
