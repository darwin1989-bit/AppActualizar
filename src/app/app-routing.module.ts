import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PageLoginComponent } from "./auth/pages/page-login/page-login.component";
import { AuthGuard } from "./auth/guards/auth.guard";

const routes: Routes = [
  {
    path: "login",
    component: PageLoginComponent,
  },
  {
    canActivate: [AuthGuard],
    path: "actualizar",
    loadChildren: () => import("./shared/shared.module").then((m) => m.SharedModule),
  },
  {
    path: "",
    redirectTo: "/login",
    pathMatch: "prefix",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
