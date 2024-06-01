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
      @media (max-width: 992px) {
        .connect {
          visibility: hidden;
        }
      }

      .label-badge-success {
        background: #c8e6c9;
        color: #256029;
        padding: 6px;
        border-radius: 8px;
      }
      .connected {
        visibility: hidden;
      }
      .w3-badge {
        background-color: #000;
        color: #fff;
        display: inline-block;
        padding-left: 4px;
        padding-right: 4px;
        text-align: center;
      }
      .w3-badge {
        border-radius: 100%;
      }
      .w3-red,
      .w3-hover-red:hover {
        color: #f44336 !important;
        background-color: #f44336 !important;
      }
      .w3-tiny {
        font-size: 6px !important;
      }
      .w3-small {
        font-size: 12px !important;
      }
      .w3-medium {
        font-size: 15px !important;
      }
      .w3-large {
        font-size: 18px !important;
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
