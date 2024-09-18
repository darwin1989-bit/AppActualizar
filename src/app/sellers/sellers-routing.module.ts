import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PagesSellersComponent } from "./pages/pages-sellers/pages-sellers.component";

const routes: Routes = [{ path: "sellers", component: PagesSellersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SellersRoutingModule {}
