import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { MaterialInformationService } from "src/app/material/service/material-information.service";

@Component({
  selector: "app-information",
  templateUrl: "./information.component.html",
  styleUrls: ["./information.component.scss"],
})
export class InformationComponent implements OnInit, OnDestroy {
  public visible!: boolean;
  private subcription!: Subscription;

  constructor(public materialService: MaterialInformationService) {}

  ngOnDestroy(): void {
    if (this.subcription) this.subcription.unsubscribe();
  }

  ngOnInit(): void {
    this.materialService.dialogInformation$.subscribe((res) => (this.visible = res));
  }
}
