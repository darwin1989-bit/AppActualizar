import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { ConfirmationService } from "primeng/api";
import { LayoutService } from "./service/app.layout.service";
import { OfficesHttpService } from "../shared/services/offices-http.service";
import { MenuService } from "./app.menu.service";
import { Router } from "@angular/router";
import { itemsObj } from "./models/menuObject";
import { ThemeService } from "../shared/services/theme.service";
import { UserDataObj, userData } from "../shared/models/objects";
import { JwtHelperService } from "@auth0/angular-jwt";
import { AuthService } from "../auth/services/auth.service";
import { LoginService } from "../api/api_actualizar/services";

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
        background: var(--primary-100);
        color: var(--primary-700);
        padding: 6px;
        border-radius: 5px;
        font-size: 10px;
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
  public moon!: boolean;
  public sun!: boolean;

  public breadCrumb!: string[];

  model: any[] = [];

  private helper = new JwtHelperService();

  private _userApp: userData = UserDataObj;

  public get userApp(): userData {
    return this._userApp;
  }
  public set userApp(value: userData) {
    this._userApp = value;
  }

  themeSession!: string;

  public confirm: boolean = true;

  constructor(
    public layoutService: LayoutService,
    public officesHttpService: OfficesHttpService,
    public menuService: MenuService,
    private route: Router,
    private themeService: ThemeService,
    private loginService: LoginService,
    private confirmationService: ConfirmationService,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.breadCrumb = this.route.url.split("/");

    this.model = itemsObj;

    this.themeSession = sessionStorage.getItem("theme")!;

    if (this.themeSession == "saga-blue") {
      this.sun = true;
      this.layoutService.config.colorScheme = "light";
    } else {
      this.moon = true;
      this.layoutService.config.colorScheme = "dark";
    }
  }

  onConfigButtonClick() {
    this.layoutService.showConfigSidebar();
  }

  public changeTheme(): void {
    this.themeSession = sessionStorage.getItem("theme")!;
    const token: any = sessionStorage.getItem("token");
    const tokenDataDecode: any = this.helper.decodeToken(token);
    this.userApp = tokenDataDecode;

    if (this.themeSession == "saga-blue") this.sun = true;
    else this.moon = true;

    let theme: string = "";

    if (this.themeSession == "saga-blue") {
      theme = "vela-blue";
      this.moon = true;
      this.sun = false;
      this.layoutService.config.colorScheme = "dark";
    }
    if (this.themeSession == "vela-blue") {
      theme = "saga-blue";
      this.sun = true;
      this.moon = false;
      this.layoutService.config.colorScheme = "light";
    }

    this.themeService.switchTheme(theme);
    sessionStorage.setItem("theme", theme);

    this.loginService.apiLoginUpdateThemeIdPut({ id: Number(this.userApp.Id), theme: theme, colorScheme: "ligth" }).subscribe();
  }
  public confirmLogOff(position: string, confirm: boolean) {
    this.position = position;
    this.confirm = confirm;
    this.confirmationService.confirm({
      message: `Esta seguro de salir del sistema?`,
      header: "Confirmación",
      icon: "pi pi-info-circle",
      accept: () => {
        this.authService.logOut();
        window.location.reload();
      },
      key: "positionDialog",
    });
  }
}
