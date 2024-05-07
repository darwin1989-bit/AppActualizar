import { Component, OnInit } from "@angular/core";
import { OfficesHttpService } from "src/app/shared/services/offices-http.service";
import { MaterialInformationService } from "../../service/material-information.service";
import { ITypeMaterials } from "../../models/material-interface";
import { OfficesDto } from "src/app/api/api_actualizar/models";
import { Subscription } from "rxjs";
import { DetailPromotionService } from "../../service/detail-promotion.service";

@Component({
  selector: "app-page-material-promotion",
  templateUrl: "./page-material-promotion.component.html",
  styleUrls: ["./page-material-promotion.component.scss"],
})
export class PageMaterialPromotionComponent implements OnInit {
  private office!: OfficesDto;

  public selectedDropdown!: ITypeMaterials;

  private subscription!: Subscription;

  constructor(private materialService: MaterialInformationService, private officeService: OfficesHttpService, private detailPromotionService: DetailPromotionService) {}

  ngOnInit(): void {
    this.subscription = this.officeService.offices$.subscribe((res) => (this.office = res!));
    this.subscription = this.materialService.loadMaterial$.subscribe((res) => {
      if (res) this.findMaterial();
    });
  }

  public findMaterial(): void {
    this.materialService.clearMaterials();
    this.officeService.setValidFindOffice();
    if (Boolean(this.office)) this.detailPromotionService.getPromotionStore(this.office.ip_Red!);
  }
}
