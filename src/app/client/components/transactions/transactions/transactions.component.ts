import { registerLocaleData } from "@angular/common";
import { Component, LOCALE_ID, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { TransactionsComponentService } from "src/app/client/service/transactions-component.service";
import { Subscription } from "rxjs";
import { OfficesHttpService } from "src/app/shared/services/offices-http.service";
import { OfficesDto, TransactionsDto } from "src/app/api/api_actualizar/models";
import localeEsEC from "@angular/common/locales/es-EC";
import localeEsCrc from "@angular/common/locales/es-CR";
import { Table } from "primeng/table/table";

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
  @ViewChild("dt") tableComponent!: Table;

  private subscription!: Subscription;

  public moneyLocale!: { money: string; locale: string };

  private office!: OfficesDto;

  constructor(public transactionsService: TransactionsComponentService, public officeService: OfficesHttpService) {}

  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = this.officeService.offices$.subscribe((res) => (this.office = res!));
    this.subscription = this.officeService.moneyLocale$.subscribe((res) => (this.moneyLocale = res));
    this.subscription = this.transactionsService.transactions$.subscribe((res) => {
      if (res.length > 0) this.refreshTable();
    });
  }
  public transactionOffline(transaction: TransactionsDto): void {
    this.transactionsService.openOffline(transaction);
    if (transaction.tipoTransaccion == "P") this.transactionsService.getOfflinePayment(this.office.ip_Red!, transaction.cliente!, transaction.numeroDocumento!);
    if (transaction.tipoTransaccion == "F") this.transactionsService.getOfflinePurchase(this.office.ip_Red!, transaction.cliente!, transaction.numeroDocumento!);
  }
  private refreshTable() {
    this.tableComponent.reset();
    this.tableComponent.rows = 5;
  }
}
