import { Component, OnDestroy, OnInit } from "@angular/core";
import { ClientComponentService } from "../../service/client-component.service";

@Component({
  selector: "app-update-client",
  templateUrl: "./update-client.component.html",
  styleUrls: ["./update-client.component.scss"],
})
export class UpdateClientComponent implements OnInit, OnDestroy {
  public visible: boolean = true;
  constructor(public clientService: ClientComponentService) {}

  ngOnDestroy(): void {}

  ngOnInit(): void {}

  public showDialog() {
    this.visible = true;
  }
}
