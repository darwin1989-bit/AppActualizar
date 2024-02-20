import { Component, OnDestroy, OnInit } from "@angular/core";
import { RegisteredUsersService } from "../../service/registered-users.service";

@Component({
  selector: "app-page-registered-users",
  templateUrl: "./page-registered-users.component.html",
  styleUrls: ["./page-registered-users.component.scss"],
})
export class PageRegisteredUsersComponent implements OnInit, OnDestroy {
  constructor(public registeredUsersService: RegisteredUsersService) {}

  ngOnDestroy(): void {
    this.registeredUsersService.pushOfficesMatriz(false);
  }

  ngOnInit(): void {
    this.registeredUsersService.pushOfficesMatriz(true);
  }
}
