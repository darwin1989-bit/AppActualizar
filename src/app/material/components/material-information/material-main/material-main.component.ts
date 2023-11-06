import { registerLocaleData } from "@angular/common";
import { Component, LOCALE_ID } from "@angular/core";
import { Subscription } from "rxjs";
import { OfficesDto } from "src/app/api/api_actualizar/models";
import localeEsEC from "@angular/common/locales/es-EC";
import localeEsCrc from "@angular/common/locales/es-CR";

registerLocaleData(localeEsEC);
registerLocaleData(localeEsCrc);

@Component({
  selector: "app-material-main",
  templateUrl: "./material-main.component.html",
  styleUrls: ["./material-main.component.scss"],
  providers: [
    { provide: LOCALE_ID, useValue: "es-EC" },
    { provide: LOCALE_ID, useValue: "es-CR" },
  ],
})
export class MaterialMainComponent {
  private subcription!: Subscription;

  private office!: OfficesDto;

  public moneyLocale!: { money: string; locale: string };
}
