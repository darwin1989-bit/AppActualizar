import { registerLocaleData } from "@angular/common";
import { Component, LOCALE_ID, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { InvoicesComponentService } from "src/app/client/service/invoices-component.service";
import { OfficesHttpService } from "src/app/shared/services/offices-http.service";
import localeEsEC from "@angular/common/locales/es-EC";
import localeEsCrc from "@angular/common/locales/es-CR";

registerLocaleData(localeEsEC);
registerLocaleData(localeEsCrc);

@Component({
  selector: "app-credit-note",
  templateUrl: "./credit-note.component.html",
  styleUrls: ["./credit-note.component.scss"],
  providers: [
    { provide: LOCALE_ID, useValue: "es-EC" },
    { provide: LOCALE_ID, useValue: "es-CR" },
  ],
})
export class CreditNoteComponent implements OnInit, OnDestroy {
  public moneyLocale!: { money: string; locale: string };
  private subcription!: Subscription;

  constructor(public invoicesService: InvoicesComponentService, private officeService: OfficesHttpService) {}

  ngOnDestroy(): void {
    if (this.subcription) {
      this.subcription.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.subcription = this.officeService.moneyLocale$.subscribe((res) => (this.moneyLocale = res));
  }
}
