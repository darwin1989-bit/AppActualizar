import { Component } from "@angular/core";
import { ClientCreditComponentService } from "src/app/client/service/client-credit-component.service";

@Component({
  selector: "app-client-credit",
  templateUrl: "./client-credit.component.html",
  styleUrls: ["./client-credit.component.scss"],
})
export class ClientCreditComponent {
  constructor(public clientCreditComponentService: ClientCreditComponentService) {}
}
