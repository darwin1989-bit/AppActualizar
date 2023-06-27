import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SharedRoutingModule } from "./shared-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PrimeModule } from "../prime.module";
import { HomeModule } from "../home/home.module";
import { LoadPanelComponent } from "./components/load-panel/load-panel.component";
import { FindOfficesComponent } from "./components/find-offices/find-offices.component";

@NgModule({
  declarations: [LoadPanelComponent, FindOfficesComponent],
  imports: [CommonModule, SharedRoutingModule, FormsModule, ReactiveFormsModule, PrimeModule, SharedRoutingModule, HomeModule],
  exports: [LoadPanelComponent, PrimeModule],
})
export class SharedModule {}
