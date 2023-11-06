import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MaterialRoutingModule } from "./material-routing.module";
import { PageMaterialInformationComponent } from "./pages/page-material-information/page-material-information.component";
import { FindMaterialComponent } from "./components/material-information/find-material/find-material.component";
import { MaterialPromotionComponent } from "./components/material-promotion/material-promotion.component";
import { MaterialComponent } from "./components/material-information/material/material.component";
import { SharedModule } from "../shared/shared.module";
import { MaterialMainComponent } from './components/material-information/material-main/material-main.component';

@NgModule({
  declarations: [PageMaterialInformationComponent, FindMaterialComponent, MaterialPromotionComponent, MaterialComponent, MaterialMainComponent],
  imports: [CommonModule, MaterialRoutingModule, SharedModule],
})
export class MaterialModule {}
