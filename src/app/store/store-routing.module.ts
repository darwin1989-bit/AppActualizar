import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PageOpenBoxesComponent } from "./pages/page-open-boxes/page-open-boxes.component";
import { PageIpBoxesComponent } from "./pages/page-ip-boxes/page-ip-boxes.component";
import { PageOfficesComponent } from "./pages/page-offices/page-offices.component";

const routes: Routes = [
  { path: "open-boxes", component: PageOpenBoxesComponent },
  { path: "ip-boxes", component: PageIpBoxesComponent },
  { path: "offices", component: PageOfficesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoreRoutingModule {}
