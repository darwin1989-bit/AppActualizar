import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { StoreRoutingModule } from "./store-routing.module";
import { FindOpenBoxesComponent } from "./components/open-boxes/find-open-boxes/find-open-boxes.component";
import { ResultOpenBoxesComponent } from "./components/open-boxes/result-open-boxes/result-open-boxes.component";
import { PageOpenBoxesComponent } from "./pages/page-open-boxes/page-open-boxes.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [FindOpenBoxesComponent, ResultOpenBoxesComponent, PageOpenBoxesComponent],
  imports: [CommonModule, StoreRoutingModule, SharedModule],
})
export class StoreModule {}
