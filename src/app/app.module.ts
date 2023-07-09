import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { PrimeModule } from "./prime.module";
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AuthModule } from "./auth/auth.module";
import { AppLayoutModule } from "./layout/app.layout.module";
import { ApiModule } from "./api/api_login/api.module";
import { ApiModule as ApiModuleActualizar } from "./api/api_actualizar/api.module";
import { PathRest } from "src/assets/static/path-rest";
import { MessageService } from "primeng/api";
import { RequestInterceptor } from "./shared/interceptor/request.interceptor";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "../assets/i18n/", ".json");
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppLayoutModule,
    AppRoutingModule,
    PrimeModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    AuthModule,
    ApiModule.forRoot({ rootUrl: PathRest.API_Login }),
    ApiModuleActualizar.forRoot({ rootUrl: PathRest.API_Actualizar }),
    TranslateModule.forRoot({ loader: { provide: TranslateLoader, useFactory: HttpLoaderFactory, deps: [HttpClient] } }),
  ],
  providers: [MessageService, { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true }],
  bootstrap: [AppComponent],
})
export class AppModule {}
