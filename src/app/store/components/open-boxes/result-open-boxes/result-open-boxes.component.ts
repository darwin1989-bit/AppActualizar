import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { Table } from "primeng/table";
import { Subscription } from "rxjs";
import { OpenBoxesService } from "src/app/store/services/open-boxes.service";

@Component({
  selector: "app-result-open-boxes",
  templateUrl: "./result-open-boxes.component.html",
  styles: [
    `
      .identification-null {
        color: #ff6464;
        font-style: italic;
        font-weight: bold;
      }
    `,
  ],
})
export class ResultOpenBoxesComponent implements OnInit, OnDestroy {
  @ViewChild("dt") tableComponent!: Table;

  @ViewChild("inp") Input!: ElementRef;

  private subscription!: Subscription;

  constructor(public openBoxesService: OpenBoxesService) {}

  ngOnInit(): void {
    this.subscription = this.openBoxesService.resetTable$.subscribe((res) => {
      if (res) this.reset();
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
    this.openBoxesService.clearOpenBoxes();
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
