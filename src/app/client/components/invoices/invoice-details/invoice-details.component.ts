import { Component, LOCALE_ID, OnDestroy, OnInit } from "@angular/core";
import { InvoicesComponentService } from "src/app/client/service/invoices-component.service";
import localeEsCrc from "@angular/common/locales/es-CR";
import localeEsEC from "@angular/common/locales/es-EC";
import { registerLocaleData } from "@angular/common";
import { Subscription } from "rxjs";
import { OfficesHttpService } from "src/app/shared/services/offices-http.service";

registerLocaleData(localeEsEC);
registerLocaleData(localeEsCrc);

@Component({
  selector: "app-invoice-details",
  templateUrl: "./invoice-details.component.html",
  styleUrls: ["./invoice-details.component.scss"],
  providers: [
    { provide: LOCALE_ID, useValue: "es-EC" },
    { provide: LOCALE_ID, useValue: "es-CR" },
  ],
})
export class InvoiceDetailsComponent implements OnInit, OnDestroy {
  public moneyLocale!: { money: string; locale: string };

  private subscription!: Subscription;

  constructor(public invoiceService: InvoicesComponentService, public officeService: OfficesHttpService) {}
  ngOnInit(): void {
    this.subscription = this.officeService.moneyLocale$.subscribe((res) => (this.moneyLocale = res));
  }
  ngOnDestroy(): void {
    this.invoiceService.clearDetails();
    this.subscription.unsubscribe();
  }
}
