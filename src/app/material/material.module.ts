import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MaterialRoutingModule } from "./material-routing.module";
import { PageMaterialInformationComponent } from "./pages/page-material-information/page-material-information.component";
import { FindMaterialComponent } from "./components/material-information/find-material/find-material.component";
import { MaterialPromotionComponent } from "./components/material-promotion/material-promotion.component";
import { MaterialComponent } from "./components/material-information/material/material.component";
import { SharedModule } from "../shared/shared.module";
import { MaterialMainComponent } from './components/material-information/material-main/material-main.component';
import { InformationComponent } from './components/material-information/information/information.component';
import { PromotionComponent } from './components/material-information/promotion/promotion.component';
import { DetailPromotionComponent } from './components/material-information/detail-promotion/detail-promotion.component';
import { MaterialEditComponent } from './components/material-information/material-edit/material-edit/material-edit.component';

@NgModule({
  declarations: [PageMaterialInformationComponent, FindMaterialComponent, MaterialPromotionComponent, MaterialComponent, MaterialMainComponent, InformationComponent, PromotionComponent, DetailPromotionComponent, MaterialEditComponent],
  imports: [CommonModule, MaterialRoutingModule, SharedModule],
})
export class MaterialModule {}
