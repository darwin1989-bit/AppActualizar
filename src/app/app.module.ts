import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { PrimeModule } from "./prime.module";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AuthModule } from "./auth/auth.module";
import { AppLayoutModule } from "./layout/app.layout.module";
import { ApiModule } from "./api/api_login/api.module";
import { PathRest } from "src/assets/static/path-rest";
import { MessageService } from "primeng/api";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppLayoutModule, AppRoutingModule, PrimeModule, HttpClientModule, FormsModule, BrowserAnimationsModule, AuthModule, ApiModule.forRoot({ rootUrl: PathRest.POST_LOGIN })],
  providers: [MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
