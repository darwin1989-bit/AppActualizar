import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppLayoutComponent } from "../layout/app.layout.component";
import { PageHomeComponent } from "../home/pages/page-home/page-home.component";
import { authGuard } from "../auth/guards/auth.guard";

const routes: Routes = [
  {
    path: "app",
    component: AppLayoutComponent,
    canActivate: [authGuard],
    children: [
      {
        path: "home",
        component: PageHomeComponent,
      },
      { path: "client", loadChildren: () => import("../client/client.module").then((m) => m.ClientModule) },
      { path: "material", loadChildren: () => import("../material/material.module").then((m) => m.MaterialModule) },
      { path: "users", loadChildren: () => import("../users/users.module").then((m) => m.UsersModule) },
      { path: "store", loadChildren: () => import("../store/store.module").then((m) => m.StoreModule) },
      {
        path: "",
        redirectTo: "/app/home",
        pathMatch: "full",
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SharedRoutingModule {}
