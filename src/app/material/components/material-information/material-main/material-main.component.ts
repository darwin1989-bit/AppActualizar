import { registerLocaleData } from "@angular/common";
import { Component, LOCALE_ID, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { MaterialsDto, OfficesDto } from "src/app/api/api_actualizar/models";
import localeEsEC from "@angular/common/locales/es-EC";
import localeEsCrc from "@angular/common/locales/es-CR";
import { MaterialInformationService } from "src/app/material/service/material-information.service";
import { OfficesHttpService } from "src/app/shared/services/offices-http.service";

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
export class MaterialMainComponent implements OnInit, OnDestroy {
  private subcription!: Subscription;

  private office!: OfficesDto;

  public moneyLocale!: { money: string; locale: string };

  constructor(public materialService: MaterialInformationService, private officeService: OfficesHttpService) {}

  ngOnDestroy(): void {
    this.subcription.unsubscribe();
  }

  ngOnInit(): void {
    this.subcription = this.officeService.offices$.subscribe((res) => (this.office = res!));
    this.subcription = this.officeService.moneyLocale$.subscribe((res) => (this.moneyLocale = res));
  }

  public procedure(materials: MaterialsDto): void {
    this.materialService.getMaterialInformation(this.office.ip_Red!, materials.codigo!);
    this.materialService.setDialog();
  }
}
