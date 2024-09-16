import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { Table } from "primeng/table";
import { Subscription } from "rxjs";
import { ExecutionJobService } from "src/app/servers/services/execution-job.service";

@Component({
  selector: "app-result-job-executions",
  templateUrl: "./result-job-executions.component.html",
  styles: [],
})
export class ResultJobExecutionsComponent implements OnInit, OnDestroy {
  @ViewChild("dt") tableComponent!: Table;

  @ViewChild("inp") Input!: ElementRef;

  private subscription!: Subscription;

  constructor(public executionJobService: ExecutionJobService) {}

  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
    this.executionJobService.clearTable();
  }

  ngOnInit(): void {
    this.subscription = this.executionJobService.resetTable$.subscribe((res) => {
      if (res) this.reset();
    });
  }

  public onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, "contains");
  }

  public getSeverity(value: string): string {
    if (value != "CORRECTO") return "danger";
    return "success";
  }

  private reset(): void {
    if (this.Input) this.Input.nativeElement.value = "";
    if (this.Input) this.tableComponent.filterGlobal("", "");
    if (this.tableComponent) {
      this.tableComponent.reset();
      this.tableComponent.rows = 5;
    }
  }
}
