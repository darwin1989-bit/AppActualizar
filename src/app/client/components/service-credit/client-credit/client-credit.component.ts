import { Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { Table } from "primeng/table/table";
import { Subscription } from "rxjs";
import { ClientCreditComponentService } from "src/app/client/service/client-credit-component.service";
import { OfficesHttpService } from "src/app/shared/services/offices-http.service";

@Component({
  selector: "app-client-credit",
  templateUrl: "./client-credit.component.html",
  styleUrls: ["./client-credit.component.scss"],
})
export class ClientCreditComponent implements OnInit, OnDestroy {
  @ViewChild("dt") tableComponent!: Table;

  public moneyLocale!: { money: string; locale: string };

  private subscription!: Subscription;

  constructor(public clientCreditComponentService: ClientCreditComponentService, private officeService: OfficesHttpService) {}
  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = this.officeService.moneyLocale$.subscribe((res) => (this.moneyLocale = res));
    this.subscription = this.clientCreditComponentService.clientCredit$.subscribe((res) => {
      if (res) {
        if (res.length > 0) {
          this.tableComponent.reset();
        }
      }
    });
  }
}
