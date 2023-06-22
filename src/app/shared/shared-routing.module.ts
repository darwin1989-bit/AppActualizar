import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppLayoutComponent } from "../layout/app.layout.component";
import { PageHomeComponent } from "../home/pages/page-home/page-home.component";

const routes: Routes = [
  {
    path: "",
    component: AppLayoutComponent,
    children: [
      {
        path: "home",
        component: PageHomeComponent,
      },
      {
        path: "",
        redirectTo: "home",
        pathMatch: "prefix",
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SharedRoutingModule {}
