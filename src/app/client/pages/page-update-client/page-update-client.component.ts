import { Component, OnInit } from "@angular/core";
import { Observer } from "rxjs";
import { ClientComponentService } from "../../service/client-component.service";

@Component({
  selector: "app-page-update-client",
  templateUrl: "./page-update-client.component.html",
  styleUrls: ["./page-update-client.component.scss"],
  providers: [ClientComponentService],
})
export class PageUpdateClientComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
}
