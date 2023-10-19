import { registerLocaleData } from "@angular/common";
import { Component, LOCALE_ID, OnDestroy, OnInit } from "@angular/core";
import { TransactionsComponentService } from "src/app/client/service/transactions-component.service";
import localeEsEC from "@angular/common/locales/es-EC";
import localeEsCrc from "@angular/common/locales/es-CR";
import { Subscription } from "rxjs";
import { OfficesHttpService } from "src/app/shared/services/offices-http.service";
import { OfficesDto, TransactionsDto } from "src/app/api/api_actualizar/models";

registerLocaleData(localeEsEC);
registerLocaleData(localeEsCrc);

@Component({
  selector: "app-transactions",
  templateUrl: "./transactions.component.html",
  styleUrls: ["./transactions.component.scss"],
  providers: [
    { provide: LOCALE_ID, useValue: "es-EC" },
    { provide: LOCALE_ID, useValue: "es-CR" },
  ],
})
export class TransactionsComponent implements OnInit, OnDestroy {
  private subcription!: Subscription;
  public moneyLocale!: { money: string; locale: string };
  private office!: OfficesDto;

  constructor(public transactionsService: TransactionsComponentService, public officeService: OfficesHttpService) {}

  ngOnDestroy(): void {
    this.subcription.unsubscribe();
  }

  ngOnInit(): void {
    this.subcription = this.officeService.offices$.subscribe((res) => (this.office = res!));
    this.subcription = this.officeService.moneyLocale$.subscribe((res) => (this.moneyLocale = res));
  }
  public transactionOffline(transaction: TransactionsDto): void {
    this.transactionsService.openOffline(transaction);
    if (transaction.tipoTransaccion == "P") this.transactionsService.getOfflinePayment(this.office.ip_Red!, transaction.cliente!, transaction.numeroDocumento!);
    if (transaction.tipoTransaccion == "F") this.transactionsService.getOfflinePurchase(this.office.ip_Red!, transaction.cliente!, transaction.numeroDocumento!);
  }
}
