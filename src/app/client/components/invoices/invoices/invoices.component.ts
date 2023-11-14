import { Component, LOCALE_ID, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { InvoiceDto, OfficesDto } from "src/app/api/api_actualizar/models";

import { registerLocaleData } from "@angular/common";
import localeEsCrc from "@angular/common/locales/es-CR";
import localeEsEC from "@angular/common/locales/es-EC";
import { InvoicesComponentService } from "src/app/client/service/invoices-component.service";
import { Subscription } from "rxjs";
import { OfficesHttpService } from "src/app/shared/services/offices-http.service";
import { Table } from "primeng/table/table";

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
  @ViewChild("dt") tableComponent!: Table;

  public moneyLocale!: { money: string; locale: string };

  public selectedInvoice!: InvoiceDto;

  public visible: boolean = false;

  private office!: OfficesDto;

  private subscription!: Subscription;

  constructor(public invoiceService: InvoicesComponentService, private officeService: OfficesHttpService) {}

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  ngOnInit(): void {
    this.subscription = this.officeService.offices$.subscribe((res) => (this.office = res!));
    this.subscription = this.invoiceService.visibleDetailsMain$.subscribe((res) => (this.visible = res!));
    this.subscription = this.officeService.moneyLocale$.subscribe((res) => (this.moneyLocale = res));
    this.subscription = this.invoiceService.invoicesMain$.subscribe((res) => {
      this.tableComponent.tableStyle = { "min-width": "10rem" };
      this.tableComponent.paginator = false;
      if (res.length > 0) this.refreshTable();
    });
  }

  public selectInvoice(invoice: InvoiceDto) {
    this.invoiceService.getInvoiceDetailsMain(this.office.ip_Red!, invoice.serie_Factura!, invoice.moneda!);
  }

  private refreshTable() {
    this.tableComponent.reset();
    this.tableComponent.rows = 5;
    this.tableComponent.tableStyle = { "min-width": "120rem" };
    this.tableComponent.paginator = true;
  }
}
