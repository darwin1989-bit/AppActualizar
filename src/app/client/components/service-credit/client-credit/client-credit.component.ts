import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { ClientCreditComponentService } from "src/app/client/service/client-credit-component.service";
import { OfficesHttpService } from "src/app/shared/services/offices-http.service";

@Component({
  selector: "app-client-credit",
  templateUrl: "./client-credit.component.html",
  styleUrls: ["./client-credit.component.scss"],
})
export class ClientCreditComponent implements OnInit, OnDestroy {
  public moneyLocale!: { money: string; locale: string };
  private subcription!: Subscription;

  constructor(public clientCreditComponentService: ClientCreditComponentService, private officeService: OfficesHttpService) {}
  ngOnDestroy(): void {
    if (this.subcription) {
      this.subcription.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.subcription = this.officeService.moneyLocale$.subscribe((res) => (this.moneyLocale = res));
  }
}
