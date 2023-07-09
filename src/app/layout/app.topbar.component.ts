import { Component, ElementRef, ViewChild } from "@angular/core";
import { ConfirmationService, MenuItem } from "primeng/api";
import { LayoutService } from "./service/app.layout.service";
import { AuthService } from "../auth/services/auth.service";
import { OfficesHttpService } from "../shared/services/offices-http.service";

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
      .conecct {
        visibility: hidden;
      }
    `,
  ],
  providers: [ConfirmationService],
})
export class AppTopBarComponent {
  items!: MenuItem[];

  @ViewChild("menubutton") menuButton!: ElementRef;

  @ViewChild("topbarmenubutton") topbarMenuButton!: ElementRef;

  @ViewChild("topbarmenu") menu!: ElementRef;

  public position!: string;

  constructor(public layoutService: LayoutService, private confirmationService: ConfirmationService, private authService: AuthService, public officesHttpService: OfficesHttpService) {}

  onConfigButtonClick() {
    this.layoutService.showConfigSidebar();
  }
  public confirmLogOff(position: string) {
    this.position = position;

    this.confirmationService.confirm({
      message: `Esta seguro de salir del sistema?`,
      header: "Confirmación",
      icon: "pi pi-info-circle",
      accept: () => {
        this.authService.logOut();
      },
      key: "positionDialog",
    });
  }
}
