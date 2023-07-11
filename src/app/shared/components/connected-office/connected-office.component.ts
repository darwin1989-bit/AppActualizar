import { Component } from "@angular/core";
import { OfficesHttpService } from "../../services/offices-http.service";

@Component({
  selector: "app-connected-office",
  templateUrl: "./connected-office.component.html",
  styleUrls: ["./connected-office.component.scss"],
})
export class ConnectedOfficeComponent {
  constructor(public officesHttpService: OfficesHttpService) {}
}
