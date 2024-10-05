import { Component, HostListener, OnDestroy, OnInit, Renderer2, ViewChild } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { concatMap, filter, interval, Subscription, take, tap, timer } from "rxjs";
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
        backdrop-filter: blur(15px);
      }
      // :host ::ng-deep .p-toast {
      //   position: fixed;
      //   width: auto;
      //   opacity: 1;
      //   top: 0px;
      //   margin-top: 5px;
      // }
      // :host ::ng-deep .p-toast .p-toast-message .p-toast-message-content {
      //   align-items: center;
      //   font-size: 0.875rem;
      //   justify-content: center;
      // }

      :host ::ng-deep .layout-menu ul a.active-route {
        font-weight: 600;
        color: var(--primary-color);
        border-left: 1px solid var(--primary-color);
      }

      :host ::ng-deep .p-toast .p-toast-message .p-toast-message-content .p-toast-detail {
        font-size: 0.875rem;
        font-weight: 700;
      }

      :host ::ng-deep .p-toast .p-toast-message .p-toast-message-content .p-toast-message-icon {
        margin-right: 0.8rem;
        font-size: 1.5rem;
      }

      :host ::ng-deep .p-toast-icon-close {
        margin-left: 1rem;
      }
      @media (max-width: 600px) {
        :host ::ng-deep .p-toast {
          width: 90%;
        }
      }

      .loader {
        width: 20px;
        aspect-ratio: 1;
        display: flex;
        color: var(--surface-900);
        border: 2px solid;
        box-sizing: border-box;
        border-radius: 50%;
        background: radial-gradient(circle 2px, currentColor 95%, #0000), linear-gradient(currentColor 50%, #0000 0) 50%/2px 60% no-repeat;
        animation: l1 5s infinite linear;
      }
      .loader:before {
        content: "";
        flex: 1;
        background: linear-gradient(currentColor 50%, #0000 0) 50%/2px 80% no-repeat;
        animation: inherit;
      }
      @keyframes l1 {
        100% {
          transform: rotate(1turn);
        }
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
export class AppLayoutComponent implements OnInit, OnDestroy {
  overlayMenuOpenSubscription: Subscription;

  subscription!: Subscription;

  menuOutsideClickListener: any;

  profileMenuOutsideClickListener: any;

  @ViewChild(AppSidebarComponent) appSidebar!: AppSidebarComponent;

  @ViewChild(AppTopBarComponent) appTopbar!: AppTopBarComponent;

  sesionCaducada: boolean = false;
  sesionCaduco: boolean = false;
  sesionBlock: boolean = false;
  block: boolean = false;
  tiempoCaducidad: number = 3;
  seconds!: boolean;
  minutos!: boolean;

  private contadorSub?: Subscription;
  private addMinutosSub?: Subscription;
  private segundosSub?: Subscription;

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
  ngOnInit(): void {
    this.expiredTime();
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

  @HostListener("document:click", ["$event"])
  onClick(event: MouseEvent) {
    if (!this.sesionBlock) {
      this.continueWorking();
      this.expiredTime();
    }
  }

  expiredTime(): void {
    this.minutos = true;
    let timeLeft = 180;
    const contador = timer(1020000);
    const ts = interval(1000).pipe(take(timeLeft));

    this.subscription = contador
      .pipe(
        tap(() => {
          this.sesionCaducada = true;
          this.sesionBlock = true;
        }),
        concatMap((_) =>
          ts.pipe(
            tap((_) => {
              timeLeft--;
              if (timeLeft > 120 && timeLeft < 180) this.tiempoCaducidad = 3;
              if (timeLeft > 60 && timeLeft < 120) this.tiempoCaducidad = 2;
              if (timeLeft < 60) {
                this.tiempoCaducidad = timeLeft;
                this.seconds = true;
              }

              if (timeLeft == 0) {
                this.seconds = false;
                this.sesionCaducada = false;
                this.sesionCaduco = true;
                sessionStorage.clear();
                this.subscription!.unsubscribe();
              }
            })
          )
        )
      )
      .subscribe();
  }
  login(): void {
    this.subscription.unsubscribe();
    window.location.reload();
  }
  continueWorking(): void {
    this.subscription.unsubscribe();
    this.sesionCaducada = false;
    this.sesionBlock = false;
    this.seconds = false;
  }
}
