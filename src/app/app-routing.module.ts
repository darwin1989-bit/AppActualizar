import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PageLoginComponent } from "./auth/pages/page-login/page-login.component";
import { homeGuard } from "./shared/guard/home.guard";

const routes: Routes = [
  {
    canActivate: [homeGuard],
    path: "app/login",
    component: PageLoginComponent,
  },
  {
    path: "app",
    loadChildren: () => import("./shared/shared.module").then((m) => m.SharedModule),
  },
  {
    path: "app",
    redirectTo: "/app/login",
    pathMatch: "full",
  },
  {
    path: "",
    redirectTo: "/app/login",
    pathMatch: "prefix",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: "enabled", anchorScrolling: "enabled" })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
