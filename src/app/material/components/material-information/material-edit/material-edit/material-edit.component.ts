import { Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { Table } from "primeng/table";
import { Subscription } from "rxjs";
import { BarCodeDto, BarCodeUpdate, MaterialsDto, OfficesDto, UpdateMaterial } from "src/app/api/api_actualizar/models";
import { ISelect, SaveMaterialObj, SelectObj, SelectSOrdenObj, SelectStatusObj } from "src/app/material/models/material-objects";
import { MaterialInformationService } from "src/app/material/service/material-information.service";
import { ICompany } from "src/app/shared/models/offices.interface";
import { OfficesHttpService } from "src/app/shared/services/offices-http.service";

@Component({
  selector: "app-material-edit",
  templateUrl: "./material-edit.component.html",
  styleUrls: ["./material-edit.component.scss"],
})
export class MaterialEditComponent implements OnInit, OnDestroy {
  @ViewChild("dt") tableComponent!: Table;

  public visible!: boolean;
  private subscription!: Subscription;
  public moneyLocale!: { money: string; locale: string };
  public material!: MaterialsDto;
  public materialBarCode!: BarCodeDto[];
  public dropDownResDesc: ISelect[] = SelectObj;
  public selectedResDesc!: ISelect | undefined;
  public dropDownStatus: ISelect[] = SelectStatusObj;
  public selectedStatus!: ISelect | undefined;
  public dropDownOrden: ISelect[] = SelectSOrdenObj;
  public selectedOrden!: ISelect | undefined;
  public disabledSave!: boolean;
  public company!: ICompany;
  public saveMaterial: UpdateMaterial = SaveMaterialObj;
  private office!: OfficesDto;

  constructor(public materialService: MaterialInformationService, private officeService: OfficesHttpService) {}

  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = this.officeService.moneyLocale$.subscribe((res) => (this.moneyLocale = res));
    this.subscription = this.materialService.dialogEditMaterial$.subscribe((res) => (this.visible = res));
    this.subscription = this.materialService.editMaterial$.subscribe((res) => {
      this.material = res;
      this.disabledSave = true;
      this.selectedResDesc = this.dropDownResDesc.find((f) => f.type == res.restringidoDesc!);
      this.selectedStatus = this.dropDownStatus.find((f) => f.type == res.estado!);
    });
    this.subscription = this.materialService.editMaterialBarcode$.subscribe((res) => (this.materialBarCode = res));
    this.subscription = this.officeService.company$.subscribe((res) => (this.company = res));
    this.subscription = this.officeService.offices$.subscribe((res) => (this.office = res!));
  }

  public changeDropdown(): void {
    if (this.material.restringidoDesc != this.selectedResDesc?.type) this.disabledSave = false;
    if (this.material.estado != this.selectedStatus?.type) this.disabledSave = false;
    if (this.materialBarCode == this.tableComponent.value) this.disabledSave = false;
  }

  public saveEditMaterial(): void {
    let barcode: BarCodeUpdate[] = [];

    this.saveMaterial.codigo = this.material.codigo;
    this.saveMaterial.restringidoDsctos = this.selectedResDesc?.type;
    this.saveMaterial.status = this.selectedStatus?.type;

    for (let item of this.tableComponent.value) {
      barcode.push({
        codigo: item.codigo,
        codigoBarras: item.codigoBarras,
        estado: item.estado.type ? item.estado.type : item.estado,
        abcOrden: item.orden.type ? item.orden.type : item.orden,
        esPrincipal: item.principal.type ? item.principal.type : item.principal,
      });
    }

    this.saveMaterial.barCode = barcode;

    this.materialService.putMaterial(this.company.code, this.office.ip_Red!, this.saveMaterial);
  }
}
