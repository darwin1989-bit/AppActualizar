import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { ConfirmationService } from "primeng/api";
import { LayoutService } from "./service/app.layout.service";
import { OfficesHttpService } from "../shared/services/offices-http.service";
import { MenuService } from "./app.menu.service";
import { Router } from "@angular/router";
import { itemsObj } from "./models/menuObject";

@Component({
  selector: "app-topbar",
  templateUrl: "./app.topbar.component.html",
  styles: [
    `
      .label-badge-success {
        background: #c8e6c9;
        color: #256029;
        padding: 6px;
        border-radius: 4px;
      }
      .connected {
        visibility: hidden;
      }
    `,
  ],
  providers: [ConfirmationService],
})
export class AppTopBarComponent implements OnInit {
  @ViewChild("menubutton") menuButton!: ElementRef;

  @ViewChild("topbarmenubutton") topbarMenuButton!: ElementRef;

  @ViewChild("topbarmenu") menu!: ElementRef;

  public position!: string;

  public breadCrumb!: string[];

  model: any[] = [];

  constructor(public layoutService: LayoutService, public officesHttpService: OfficesHttpService, public menuService: MenuService, private route: Router) {}

  ngOnInit(): void {
    this.breadCrumb = this.route.url.split("/");

    this.model = itemsObj;
  }

  onConfigButtonClick() {
    this.layoutService.showConfigSidebar();
  }
}
