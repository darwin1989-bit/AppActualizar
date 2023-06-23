import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { LoginService } from "src/app/api/api_login/services";

export interface AppConfig {
  inputStyle: string;
  colorScheme: string;
  theme: string;
  ripple: boolean;
  menuMode: string;
  scale: number;
}

interface LayoutState {
  staticMenuDesktopInactive: boolean;
  overlayMenuActive: boolean;
  profileSidebarVisible: boolean;
  configSidebarVisible: boolean;
  staticMenuMobileActive: boolean;
  menuHoverActive: boolean;
}

@Injectable({
  providedIn: "root",
})
export class LayoutService {
  config: AppConfig = {
    ripple: true,
    inputStyle: "outlined",
    menuMode: "static",
    colorScheme: "light",
    theme: "bootstrap4-light-blue",
    scale: 14,
  };

  state: LayoutState = {
    staticMenuDesktopInactive: false,
    overlayMenuActive: false,
    profileSidebarVisible: false,
    configSidebarVisible: false,
    staticMenuMobileActive: false,
    menuHoverActive: false,
  };

  private configUpdate = new Subject<AppConfig>();

  private overlayOpen = new Subject<any>();

  configUpdate$ = this.configUpdate.asObservable();

  overlayOpen$ = this.overlayOpen.asObservable();

  constructor(private loginService: LoginService) {}

  onMenuToggle() {
    if (this.isOverlay()) {
      this.state.overlayMenuActive = !this.state.overlayMenuActive;
      if (this.state.overlayMenuActive) {
        this.overlayOpen.next(null);
      }
    }

    if (this.isDesktop()) {
      this.state.staticMenuDesktopInactive = !this.state.staticMenuDesktopInactive;
    } else {
      this.state.staticMenuMobileActive = !this.state.staticMenuMobileActive;

      if (this.state.staticMenuMobileActive) {
        this.overlayOpen.next(null);
      }
    }
  }

  showProfileSidebar() {
    this.state.profileSidebarVisible = !this.state.profileSidebarVisible;
    if (this.state.profileSidebarVisible) {
      this.overlayOpen.next(null);
    }
  }

  showConfigSidebar() {
    this.state.configSidebarVisible = true;
  }

  isOverlay() {
    return this.config.menuMode === "overlay";
  }

  isDesktop() {
    return window.innerWidth > 991;
  }

  isMobile() {
    return !this.isDesktop();
  }

  onConfigUpdate() {
    this.configUpdate.next(this.config);
  }
  changeTheme(theme: string, colorScheme: string) {
    this.loginService.apiLoginUpdateThemeIdPut({ id: 3, theme: theme, colorScheme: colorScheme }).subscribe();
    sessionStorage.setItem("theme", theme);
    sessionStorage.setItem("colorScheme", colorScheme);
    const themeLink = <HTMLLinkElement>document.getElementById("theme-css");
    const newHref = themeLink.getAttribute("href")!.replace(this.config.theme, theme);
    this.config.colorScheme;
    this.replaceThemeLink(newHref, () => {
      this.config.theme = theme;
      this.config.colorScheme = colorScheme;
      this.onConfigUpdate();
    });
  }
  replaceThemeLink(href: string, onComplete: Function) {
    const id = "theme-css";
    const themeLink = <HTMLLinkElement>document.getElementById("theme-css");
    const cloneLinkElement = <HTMLLinkElement>themeLink.cloneNode(true);

    cloneLinkElement.setAttribute("href", href);
    cloneLinkElement.setAttribute("id", id + "-clone");

    themeLink.parentNode!.insertBefore(cloneLinkElement, themeLink.nextSibling);

    cloneLinkElement.addEventListener("load", () => {
      themeLink.remove();
      cloneLinkElement.setAttribute("id", id);
      onComplete();
    });
  }
}
