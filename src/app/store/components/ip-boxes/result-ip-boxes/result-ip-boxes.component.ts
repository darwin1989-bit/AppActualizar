import { Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { Table } from "primeng/table";
import { Subscription } from "rxjs";
import { IpBoxesService } from "src/app/store/services/ip-boxes.service";

@Component({
  selector: "app-result-ip-boxes",
  templateUrl: "./result-ip-boxes.component.html",
  styles: [],
})
export class ResultIpBoxesComponent implements OnInit, OnDestroy {
  @ViewChild("dt") tableComponent!: Table;

  private subscription!: Subscription;

  constructor(public ipBoxesService: IpBoxesService) {}

  ngOnInit(): void {
    this.ipBoxesService.openDialogNewIp(false);
    this.subscription = this.ipBoxesService.resetTable$.subscribe((res) => {
      if (res) this.reset();
    });
  }
  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
    this.ipBoxesService.clearIpBoxes();
  }
  private reset(): void {
    if (this.tableComponent) {
      this.tableComponent.reset();
      this.tableComponent.rows = 5;
    }
  }
  public newIp(): void {
    this.ipBoxesService.openDialogNewIp(true);
  }
}
