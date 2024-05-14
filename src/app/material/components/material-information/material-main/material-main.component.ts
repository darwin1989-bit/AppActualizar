import { registerLocaleData } from "@angular/common";
import { Component, LOCALE_ID, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { Subscription } from "rxjs";
import { MaterialsDto, OfficesDto } from "src/app/api/api_actualizar/models";
import localeEsEC from "@angular/common/locales/es-EC";
import localeEsCrc from "@angular/common/locales/es-CR";
import { MaterialInformationService } from "src/app/material/service/material-information.service";
import { OfficesHttpService } from "src/app/shared/services/offices-http.service";
import { Table } from "primeng/table/table";

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
  @ViewChild("dt") tableComponent!: Table;

  private subscription!: Subscription;

  private office!: OfficesDto;

  public moneyLocale!: { money: string; locale: string };

  public materials!: MaterialsDto[];

  public clonedProducts: { [s: string]: MaterialsDto } = {};

  constructor(public materialService: MaterialInformationService, private officeService: OfficesHttpService) {}

  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = this.materialService.materialsMain$.subscribe((res) => (this.materials = res));
    this.subscription = this.officeService.offices$.subscribe((res) => (this.office = res!));
    this.subscription = this.officeService.moneyLocale$.subscribe((res) => (this.moneyLocale = res));
    this.subscription = this.materialService.materialsMain$.subscribe((res) => {
      this.tableComponent.tableStyle = { "min-width": "10rem" };
      this.tableComponent.paginator = false;
      if (res.length > 0) this.refreshTable();
    });
  }

  public procedureMaterial(materials: MaterialsDto): void {
    this.materialService.SpComunicateMaterial(this.office.ip_Red!, materials.codigo!);
  }
  public procedurePrice(materials: MaterialsDto): void {
    this.materialService.SpComunicatePrice(this.office.ip_Red!, materials.codigo!);
  }

  private refreshTable() {
    this.tableComponent.reset();
    this.tableComponent.rows = 5;
    this.tableComponent.tableStyle = { "min-width": "90rem" };
    this.tableComponent.paginator = true;
  }

  public editMaterial(material: MaterialsDto) {
    this.clonedProducts[material.codBarra as string] = { ...material };
    this.materialService.setDialogEdit(this.office.ip_Red!, material);
  }
}
