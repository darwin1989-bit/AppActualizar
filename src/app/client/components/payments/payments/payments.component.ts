import { registerLocaleData } from "@angular/common";
import { Component, LOCALE_ID, OnDestroy, OnInit } from "@angular/core";
import { PaymentsComponentService } from "src/app/client/service/payments-component.service";
import { OfficesHttpService } from "src/app/shared/services/offices-http.service";
import localeEsEC from "@angular/common/locales/es-EC";
import localeEsCrc from "@angular/common/locales/es-CR";
import { Subscription } from "rxjs";

registerLocaleData(localeEsEC);
registerLocaleData(localeEsCrc);

@Component({
  selector: "app-payments",
  templateUrl: "./payments.component.html",
  styleUrls: ["./payments.component.scss"],
  providers: [
    { provide: LOCALE_ID, useValue: "es-EC" },
    { provide: LOCALE_ID, useValue: "es-CR" },
  ],
})
export class PaymentsComponent implements OnInit, OnDestroy {
  private subcription!: Subscription;
  public moneyLocale!: { money: string; locale: string };

  constructor(public paymentsService: PaymentsComponentService, public officeService: OfficesHttpService) {}

  ngOnDestroy(): void {
    this.subcription.unsubscribe();
  }

  ngOnInit(): void {
    this.subcription = this.officeService.moneyLocale$.subscribe((res) => (this.moneyLocale = res));
  }
}
