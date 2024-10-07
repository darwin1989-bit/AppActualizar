import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription, tap } from "rxjs";
import { MaterialInfoDto, OfficesDto } from "src/app/api/api_actualizar/models";
import { MaterialInformationService } from "src/app/material/service/material-information.service";
import { OfficesHttpService } from "src/app/shared/services/offices-http.service";

@Component({
  selector: "app-information",
  templateUrl: "./information.component.html",
  styleUrls: ["./information.component.scss"],
})
export class InformationComponent implements OnInit, OnDestroy {
  public visible!: boolean;
  public btnElectronic!: boolean;
  private subscription!: Subscription;
  private office!: OfficesDto;
  private material!: MaterialInfoDto[];

  constructor(public materialService: MaterialInformationService, private officeService: OfficesHttpService) {}

  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = this.officeService.offices$.subscribe((res) => (this.office = res!));
    this.materialService.dialogInformation$.subscribe((res) => {
      this.visible = res.show;
      this.btnElectronic = res.isElectronic;
    });
    this.subscription = this.materialService.materialsInformation$.pipe(tap((res) => (this.material = res))).subscribe();
  }
  public electronic(deleteElectonic: boolean): void {
    if (deleteElectonic) {
      this.materialService.deleteMaterialElectronic(this.office.ip_Red!, this.material[0].nivelSegmento!);
    } else {
      this.materialService.InsertMaterialElectronic(this.office.ip_Red!, this.material[0].nivelSegmento!);
    }
  }
}
