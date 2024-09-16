import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { Table } from "primeng/table";
import { Subscription } from "rxjs";
import { DatabaseSizeService } from "src/app/servers/services/database-size.service";

@Component({
  selector: "app-result-database-size",
  templateUrl: "./result-database-size.component.html",
  styles: [],
})
export class ResultDatabaseSizeComponent implements OnInit, OnDestroy {
  @ViewChild("dt") tableComponent!: Table;

  @ViewChild("inp") Input!: ElementRef;

  private subscription!: Subscription;

  constructor(public databaseSizeService: DatabaseSizeService) {}

  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
    this.databaseSizeService.clearDatabaseSize();
  }
  ngOnInit(): void {
    this.subscription = this.databaseSizeService.resetTable$.subscribe((res) => {
      if (res) this.reset();
    });
  }

  public onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, "contains");
  }

  private reset(): void {
    if (this.Input) this.Input.nativeElement.value = "";
    if (this.Input) this.tableComponent.filterGlobal("", "");
    if (this.tableComponent) {
      this.tableComponent.reset();
      this.tableComponent.rows = 5;
    }
  }

  public getSeverity(value: string): string {
    if (Number(value) > 7 && Number(value) < 9) return "warning";
    else if (Number(value) > 9) return "danger";
    return "success";
  }
}
