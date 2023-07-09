import { Component, OnInit } from "@angular/core";
import { authGuard } from "src/app/auth/guards/auth.guard";

@Component({
  selector: "app-page-home",
  templateUrl: "./page-home.component.html",
  styleUrls: ["./page-home.component.scss"],
})
export class PageHomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
