import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedRoutingModule } from "./shared-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PrimeModule } from "../prime.module";
import { HomeModule } from "../home/home.module";
import { LoadPanelComponent } from "./components/load-panel/load-panel.component";
import { FindOfficesComponent } from "./components/find-offices/find-offices.component";
import { ConnectedOfficeComponent } from "./components/connected-office/connected-office.component";
import { FindCompanyComponent } from "./components/find-company/find-company.component";

@NgModule({
  declarations: [LoadPanelComponent, FindOfficesComponent, ConnectedOfficeComponent, FindCompanyComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, PrimeModule, SharedRoutingModule, HomeModule],
  exports: [LoadPanelComponent, PrimeModule, FindOfficesComponent, FindCompanyComponent],
})
export class SharedModule {}
