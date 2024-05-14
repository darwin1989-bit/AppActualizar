import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { Table } from "primeng/table";
import { Subscription } from "rxjs";
import { StoreOfficesService } from "src/app/store/services/store-offices.service";

@Component({
  selector: "app-result-store-offices",
  templateUrl: "./result-store-offices.component.html",
  styles: [],
})
export class ResultStoreOfficesComponent implements OnInit, OnDestroy {
  @ViewChild("dt") tableComponent!: Table;

  @ViewChild("inp") Input!: ElementRef;

  private subscription!: Subscription;

  constructor(public storeOfficesService: StoreOfficesService) {}

  ngOnInit(): void {
    this.subscription = this.storeOfficesService.resetTable$.subscribe((res) => {
      if (res) this.reset();
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
    this.storeOfficesService.clearStoreOffices();
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
}
