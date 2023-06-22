import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SharedRoutingModule } from "./shared-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PrimeModule } from "../prime.module";
import { HomeModule } from "../home/home.module";

@NgModule({
  declarations: [],
  imports: [CommonModule, SharedRoutingModule, FormsModule, ReactiveFormsModule, PrimeModule, SharedRoutingModule, HomeModule],
})
export class SharedModule {}
