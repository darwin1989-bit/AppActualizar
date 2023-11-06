import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PageMaterialInformationComponent } from "./pages/page-material-information/page-material-information.component";

const routes: Routes = [
  { path: "material-information", component: PageMaterialInformationComponent },

  {
    path: "",
    redirectTo: "/app/home",
    pathMatch: "prefix",
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaterialRoutingModule {}
