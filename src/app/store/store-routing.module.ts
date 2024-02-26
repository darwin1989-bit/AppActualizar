import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PageOpenBoxesComponent } from "./pages/page-open-boxes/page-open-boxes.component";

const routes: Routes = [{ path: "open-boxes", component: PageOpenBoxesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoreRoutingModule {}
