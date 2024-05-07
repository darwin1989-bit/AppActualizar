import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PageOpenBoxesComponent } from "./pages/page-open-boxes/page-open-boxes.component";
import { PageIpBoxesComponent } from "./pages/page-ip-boxes/page-ip-boxes.component";

const routes: Routes = [
  { path: "open-boxes", component: PageOpenBoxesComponent },
  { path: "ip-boxes", component: PageIpBoxesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoreRoutingModule {}
