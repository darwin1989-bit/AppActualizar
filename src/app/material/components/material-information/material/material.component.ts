import { registerLocaleData } from "@angular/common";
import { Component, LOCALE_ID, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { Subscription } from "rxjs";
import { MaterialsDto, OfficesDto } from "src/app/api/api_actualizar/models";
import { MaterialInformationService } from "src/app/material/service/material-information.service";
import { OfficesHttpService } from "src/app/shared/services/offices-http.service";
import localeEsEC from "@angular/common/locales/es-EC";
import localeEsCrc from "@angular/common/locales/es-CR";
import { Table } from "primeng/table/table";
import { DetailPromotionService } from "src/app/material/service/detail-promotion.service";

registerLocaleData(localeEsEC);
registerLocaleData(localeEsCrc);
@Component({
  selector: "app-material",
  templateUrl: "./material.component.html",
  styleUrls: ["./material.component.scss"],
  providers: [
    { provide: LOCALE_ID, useValue: "es-EC" },
    { provide: LOCALE_ID, useValue: "es-CR" },
  ],
})
export class MaterialComponent implements OnInit, OnDestroy {
  @ViewChild("dt") tableComponent!: Table;

  private subscription!: Subscription;

  private office!: OfficesDto;

  public moneyLocale!: { money: string; locale: string };

  constructor(public materialService: MaterialInformationService, public detailPromotionService: DetailPromotionService, private officeService: OfficesHttpService) {}

  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
    this.materialService.clearMaterials();
  }

  ngOnInit(): void {
    this.subscription = this.officeService.offices$.subscribe((res) => (this.office = res!));
    this.subscription = this.officeService.moneyLocale$.subscribe((res) => (this.moneyLocale = res));
    this.subscription = this.materialService.materials$.subscribe((res) => {
      if (res.length > 0) this.refreshTable();
    });
  }

  public information(materials: MaterialsDto): void {
    this.materialService.getMaterialInformation(this.office.ip_Red!, materials.codigo!, false);
  }
  public promotion(materials: MaterialsDto): void {
    this.detailPromotionService.getMaterialPromotion(this.office.ip_Red!, materials.codigo!);
  }
  private refreshTable() {
    if (this.tableComponent) {
      this.tableComponent.reset();
      this.tableComponent.rows = 5;
    }
  }
}
