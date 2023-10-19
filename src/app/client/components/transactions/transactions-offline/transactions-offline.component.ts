import { registerLocaleData } from "@angular/common";
import { Component, LOCALE_ID, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { TransactionsComponentService } from "src/app/client/service/transactions-component.service";
import localeEsEC from "@angular/common/locales/es-EC";
import localeEsCrc from "@angular/common/locales/es-CR";
import { OfficesHttpService } from "src/app/shared/services/offices-http.service";

registerLocaleData(localeEsEC);
registerLocaleData(localeEsCrc);

@Component({
  selector: "app-transactions-offline",
  templateUrl: "./transactions-offline.component.html",
  styleUrls: ["./transactions-offline.component.scss"],
  providers: [
    { provide: LOCALE_ID, useValue: "es-EC" },
    { provide: LOCALE_ID, useValue: "es-CR" },
  ],
})
export class TransactionsOfflineComponent implements OnInit, OnDestroy {
  public dialogOffline!: boolean;
  public moneyLocale!: { money: string; locale: string };
  public subcription!: Subscription;

  constructor(public transactionsService: TransactionsComponentService, public officeService: OfficesHttpService) {}

  ngOnDestroy(): void {
    if (this.subcription) this.subcription.unsubscribe;
  }

  ngOnInit(): void {
    this.subcription = this.transactionsService.dialogOffline$.subscribe((res) => (this.dialogOffline = res));
    this.subcription = this.officeService.moneyLocale$.subscribe((res) => (this.moneyLocale = res));
  }
}
