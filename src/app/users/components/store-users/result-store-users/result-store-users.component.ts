import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { Table } from "primeng/table";
import { Subscription } from "rxjs";
import { UsersService } from "src/app/users/service/users.service";

@Component({
  selector: "app-result-store-users",
  templateUrl: "./result-store-users.component.html",
  styleUrls: ["./result-store-users.component.scss"],
})
export class ResultStoreUsersComponent implements OnInit, OnDestroy {
  private subscription!: Subscription;

  @ViewChild("dt") tableComponent!: Table;

  @ViewChild("inp") Input!: ElementRef;

  constructor(public usersService: UsersService) {}

  ngOnInit(): void {
    this.usersService.resetTable$.subscribe((res) => {
      if (res) this.reset();
    });
  }
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.usersService.clearUsers();
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
