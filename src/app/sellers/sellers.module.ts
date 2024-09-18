import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SellersRoutingModule } from "./sellers-routing.module";
import { PagesSellersComponent } from "./pages/pages-sellers/pages-sellers.component";
import { FindSellersComponent } from "./components/find-sellers/find-sellers.component";
import { ResultSellersComponent } from "./components/result-sellers/result-sellers.component";
import { ResultSellersAsssignedComponent } from "./components/result-sellers-asssigned/result-sellers-asssigned.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [PagesSellersComponent, FindSellersComponent, ResultSellersComponent, ResultSellersAsssignedComponent],
  imports: [CommonModule, SellersRoutingModule, SharedModule],
})
export class SellersModule {}
