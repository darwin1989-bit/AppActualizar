import { Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { SellersAssignedService } from "../../services/sellers-assigned.service";
import { Table } from "primeng/table";
import { Subscription } from "rxjs";

@Component({
  selector: "app-result-sellers-asssigned",
  templateUrl: "./result-sellers-asssigned.component.html",
  styles: [],
})
export class ResultSellersAsssignedComponent implements OnInit, OnDestroy {
  @ViewChild("dt") tableComponent!: Table;

  private subscription!: Subscription;

  constructor(public sellersAssignedService: SellersAssignedService) {}

  ngOnInit(): void {
    this.subscription = this.sellersAssignedService.resetTable$.subscribe((res) => {
      if (res) this.reset();
    });
    this.sellersAssignedService.clearTableSellers();
  }
  ngOnDestroy(): void {
    this.subscription = this.sellersAssignedService.resetTable$.subscribe((res) => {
      if (res) this.reset();
    });
  }

  public getSeverity(value: string): string {
    if (value != "ACTIVO") return "danger";
    return "success";
  }
  private reset(): void {
    if (this.tableComponent) {
      this.tableComponent.reset();
      this.tableComponent.rows = 5;
    }
  }
}
