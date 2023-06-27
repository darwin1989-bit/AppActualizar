import { Component, Input, OnInit } from "@angular/core";
import { LayoutService } from "../service/app.layout.service";
import { MenuService, userData } from "../app.menu.service";
import { ConfirmationService } from "primeng/api";
import { AuthService } from "src/app/auth/services/auth.service";
import { JwtHelperService } from "@auth0/angular-jwt";

@Component({
  selector: "app-config",
  templateUrl: "./app.config.component.html",
})
export class AppConfigComponent implements OnInit {
  @Input() minimal: boolean = false;

  scales: number[] = [12, 13, 14, 15, 16];

  private helper = new JwtHelperService();
  private _userApp: userData = {
    Name: "",
    UserName: "",
    UserRol: "",
  };
  public get userApp(): userData {
    return this._userApp;
  }
  public set userApp(value: userData) {
    this._userApp = value;
  }

  constructor(public layoutService: LayoutService, public menuService: MenuService, private confirmationService: ConfirmationService, public authService: AuthService) {
    const token = this.menuService.checkToken();
    if (token) this.confirmLogOff();
    if (sessionStorage.getItem("theme")) {
      const theme = sessionStorage?.getItem("theme");
      const colorScheme = sessionStorage.getItem("colorScheme");
      this.layoutService.changeTheme(theme!, colorScheme!);
    }
  }
  ngOnInit(): void {
    const token: any = sessionStorage.getItem("token");
    const tokenDataDecode: any = this.helper.decodeToken(token);
    this.userApp = tokenDataDecode;
    this.menuService.userData.next(this.userApp);
  }

  get visible(): boolean {
    return this.layoutService.state.configSidebarVisible;
  }

  set visible(_val: boolean) {
    this.layoutService.state.configSidebarVisible = _val;
  }

  get scale(): number {
    return this.layoutService.config.scale;
  }

  set scale(_val: number) {
    this.layoutService.config.scale = _val;
  }

  get menuMode(): string {
    return this.layoutService.config.menuMode;
  }

  set menuMode(_val: string) {
    this.layoutService.config.menuMode = _val;
  }

  get inputStyle(): string {
    return this.layoutService.config.inputStyle;
  }

  set inputStyle(_val: string) {
    this.layoutService.config.inputStyle = _val;
  }

  get ripple(): boolean {
    return this.layoutService.config.ripple;
  }

  set ripple(_val: boolean) {
    this.layoutService.config.ripple = _val;
  }

  onConfigButtonClick() {
    this.layoutService.showConfigSidebar();
  }

  decrementScale() {
    this.scale--;
    this.applyScale();
  }

  incrementScale() {
    this.scale++;
    this.applyScale();
  }

  applyScale() {
    document.documentElement.style.fontSize = this.scale + "px";
  }

  private confirmLogOff() {
    this.confirmationService.confirm({
      message: "La sesión ha caducado",
      header: "Alerta",
      icon: "pi pi-info-circle",
      accept: () => {
        this.authService.logOut();
      },
      key: "positionDialog",
    });
  }
}
