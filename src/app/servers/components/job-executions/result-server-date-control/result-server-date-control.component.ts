import { Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { Table } from "primeng/table";
import { Subscription } from "rxjs";
import { ServerDateControlDto } from "src/app/api/api_actualizar/models";
import { ExecutionJobService } from "src/app/servers/services/execution-job.service";

@Component({
  selector: "app-result-server-date-control",
  templateUrl: "./result-server-date-control.component.html",
  styles: [],
})
export class ResultServerDateControlComponent implements OnInit, OnDestroy {
  public visible: boolean = false;

  @ViewChild("dt") tableComponent!: Table;

  private subscription!: Subscription;

  constructor(public executionJobService: ExecutionJobService) {}

  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = this.executionJobService.visibleResultServerDateControl$.subscribe((res) => (this.visible = res));
  }

  public getSeverity(value: string): string {
    if (value != "OK") return "danger";
    return "success";
  }
  public executePa(office: ServerDateControlDto): void {
    this.executionJobService.executeStoreProcedure(office.ipTienda!);
  }
}
