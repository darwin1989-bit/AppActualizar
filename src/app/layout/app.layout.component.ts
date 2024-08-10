import { Component, OnDestroy, Renderer2, ViewChild } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { filter, Subscription } from "rxjs";
import { LayoutService } from "./service/app.layout.service";
import { AppSidebarComponent } from "./app.sidebar.component";
import { AppTopBarComponent } from "./app.topbar.component";
import { ThemeService } from "../shared/services/theme.service";
import { MessageService } from "primeng/api";
import { SharedService } from "../shared/services/shared.service";

@Component({
  selector: "app-layout",
  templateUrl: "./app.layout.component.html",
  styles: [
    `
      :host ::ng-deep .p-toast .p-toast-message.p-toast-message-error {
        border: solid 1px #dc2626;
      }
      :host ::ng-deep .p-toast .p-toast-message.p-toast-message-success {
        border: solid 1px #16a34a;
      }
      :host ::ng-deep .p-toast .p-toast-message.p-toast-message-warn {
        border: solid 1px #ca8a04;
      }
      :host ::ng-deep .p-toast .p-toast-message.p-toast-message-info {
        border: solid 1px #2563eb;
      }
      :host ::ng-deep .p-toast .p-toast-message.p-toast-message-secondary {
        border: solid 1px #bfc2c5;
      }
      :host ::ng-deep .p-toast .p-toast-message {
        backdrop-filter: blur(20px);
      }
      :host ::ng-deep .p-toast {
        position: fixed;
        width: auto;
        opacity: 1;
        top: 0px;
        margin-top: 5px;
      }
      :host ::ng-deep .p-toast .p-toast-message .p-toast-message-content {
        align-items: center;
        font-size: 1rem;
        justify-content: center;
      }

      :host ::ng-deep .layout-menu ul a.active-route {
        font-weight: 600;
        color: var(--primary-color);
        border-left: 1px solid var(--primary-color);
      }

      :host ::ng-deep .layout-menu ul a:hover {
        border-left: 1px solid var(--primary-color);
      }

      :host ::ng-deep .p-toast .p-toast-message .p-toast-message-content .p-toast-detail {
        font-size: 1rem;
        font-weight: 700;
      }

      :host ::ng-deep .p-toast .p-toast-message .p-toast-message-content .p-toast-message-icon {
        margin-right: 0.8rem;
        font-size: 1.5rem;
      }

      :host ::ng-deep .p-toast-icon-close {
        margin-left: 1rem;
      }

      /*para poner bordes en los iconos del slidebar*/
      // :host ::ng-deep .layout-menu ul a {
      //   padding: 0.3rem 0.75rem;
      // }

      // :host ::ng-deep .layout-menu ul a .layout-menuitem-icon {
      //   padding: 5px 5px 5px 5px;
      //   border-radius: 4px;
      //   background-color: var(--surface-ground);
      //   border-color: var(--surface-border);
      //   border-width: 1px;
      //   border-style: solid;
      //   border-radius: var(--border-radius);
      // }

      // :host ::ng-deep .pi-fw {
      //   width: auto;
      // }
    `,
  ],
})
export class AppLayoutComponent implements OnDestroy {
  overlayMenuOpenSubscription: Subscription;

  menuOutsideClickListener: any;

  profileMenuOutsideClickListener: any;

  @ViewChild(AppSidebarComponent) appSidebar!: AppSidebarComponent;

  @ViewChild(AppTopBarComponent) appTopbar!: AppTopBarComponent;

  constructor(
    public layoutService: LayoutService,
    public renderer: Renderer2,
    public router: Router,
    private themeService: ThemeService,
    private messageService: MessageService,
    private sharedService: SharedService
  ) {
    let themeSesionStorage: string | null = sessionStorage.getItem("theme");

    if (themeSesionStorage) this.themeService.switchTheme(themeSesionStorage);

    document.documentElement.style.fontSize = 12 + "px";

    this.overlayMenuOpenSubscription = this.layoutService.overlayOpen$.subscribe(() => {
      if (!this.menuOutsideClickListener) {
        this.menuOutsideClickListener = this.renderer.listen("document", "click", (event) => {
          const isOutsideClicked = !(
            this.appSidebar.el.nativeElement.isSameNode(event.target) ||
            this.appSidebar.el.nativeElement.contains(event.target) ||
            this.appTopbar.menuButton.nativeElement.isSameNode(event.target) ||
            this.appTopbar.menuButton.nativeElement.contains(event.target)
          );

          if (isOutsideClicked) {
            this.hideMenu();
          }
        });
      }

      if (!this.profileMenuOutsideClickListener) {
        this.profileMenuOutsideClickListener = this.renderer.listen("document", "click", (event) => {
          if (this.appTopbar.topbarMenuButton != undefined) {
            const isOutsideClicked = !(
              this.appTopbar.menu.nativeElement.isSameNode(event.target) ||
              this.appTopbar.menu.nativeElement.contains(event.target) ||
              this.appTopbar.topbarMenuButton.nativeElement.isSameNode(event.target) ||
              this.appTopbar.topbarMenuButton.nativeElement.contains(event.target)
            );

            if (isOutsideClicked) {
              this.hideProfileMenu();
            }
          }
        });
      }

      if (this.layoutService.state.staticMenuMobileActive) {
        this.blockBodyScroll();
      }
    });

    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      this.hideMenu();
      this.hideProfileMenu();
    });
  }

  hideMenu() {
    this.layoutService.state.overlayMenuActive = false;
    this.layoutService.state.staticMenuMobileActive = false;
    this.layoutService.state.menuHoverActive = false;
    if (this.menuOutsideClickListener) {
      this.menuOutsideClickListener();
      this.menuOutsideClickListener = null;
    }
    this.unblockBodyScroll();
  }

  hideProfileMenu() {
    this.layoutService.state.profileSidebarVisible = false;
    if (this.profileMenuOutsideClickListener) {
      this.profileMenuOutsideClickListener();
      this.profileMenuOutsideClickListener = null;
    }
  }

  blockBodyScroll(): void {
    if (document.body.classList) {
      document.body.classList.add("blocked-scroll");
    } else {
      document.body.className += " blocked-scroll";
    }
  }

  unblockBodyScroll(): void {
    if (document.body.classList) {
      document.body.classList.remove("blocked-scroll");
    } else {
      document.body.className = document.body.className.replace(new RegExp("(^|\\b)" + "blocked-scroll".split(" ").join("|") + "(\\b|$)", "gi"), " ");
    }
  }

  get containerClass() {
    return {
      "layout-theme-light": this.layoutService.config.colorScheme === "light",
      "layout-theme-dark": this.layoutService.config.colorScheme === "dark",
      "layout-overlay": this.layoutService.config.menuMode === "overlay",
      "layout-static": this.layoutService.config.menuMode === "static",
      "layout-static-inactive": this.layoutService.state.staticMenuDesktopInactive && this.layoutService.config.menuMode === "static",
      "layout-overlay-active": this.layoutService.state.overlayMenuActive,
      "layout-mobile-active": this.layoutService.state.staticMenuMobileActive,
      "p-input-filled": this.layoutService.config.inputStyle === "filled",
      "p-ripple-disabled": !this.layoutService.config.ripple,
    };
  }

  ngOnDestroy() {
    if (this.overlayMenuOpenSubscription) {
      this.overlayMenuOpenSubscription.unsubscribe();
    }

    if (this.menuOutsideClickListener) {
      this.menuOutsideClickListener();
    }
  }
  onConfirm() {
    this.onReject();
    this.sharedService.showDialog();
  }

  onReject() {
    this.messageService.clear("cf");
  }
}
