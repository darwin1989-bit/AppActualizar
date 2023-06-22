import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./components/login/login.component";
import { PageLoginComponent } from "./pages/page-login/page-login.component";
import { PrimeModule } from "src/app/prime.module";

@NgModule({
  declarations: [LoginComponent, PageLoginComponent],
  imports: [CommonModule, PrimeModule],
  exports: [LoginComponent, PageLoginComponent],
})
export class AuthModule {}
