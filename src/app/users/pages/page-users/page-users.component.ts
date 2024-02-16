import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-page-users",
  templateUrl: "./page-users.component.html",
  styleUrls: ["./page-users.component.scss"],
})
export class PageUsersComponent implements OnInit {
  public visibleMain!: boolean;

  constructor() {}

  ngOnInit(): void {}

  public getVisible(visible: boolean): void {
    this.visibleMain = visible;
  }
}
