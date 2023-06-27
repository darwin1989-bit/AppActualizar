import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { SidebarModule } from "primeng/sidebar";
import { RadioButtonModule } from "primeng/radiobutton";
import { ButtonModule } from "primeng/button";
import { InputSwitchModule } from "primeng/inputswitch";
import { AppConfigComponent } from "./app.config.component";
import { PrimeModule } from "src/app/prime.module";
import { ConfirmationService } from "primeng/api";

@NgModule({
  imports: [CommonModule, FormsModule, SidebarModule, RadioButtonModule, ButtonModule, InputSwitchModule, PrimeModule],
  declarations: [AppConfigComponent],
  exports: [AppConfigComponent],
  providers: [ConfirmationService],
})
export class AppConfigModule {}
