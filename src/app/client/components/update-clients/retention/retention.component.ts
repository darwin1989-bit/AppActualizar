import { Component, OnDestroy, OnInit } from "@angular/core";
import { ClientComponentService } from "../../../service/client-component.service";
import { ConfirmationService } from "primeng/api";
import { Subscription } from "rxjs";
import { OfficesHttpService } from "src/app/shared/services/offices-http.service";
import { GetClientDto, OfficesDto, RetentionParams } from "src/app/api/api_actualizar/models";
import { IRbRetention, IRetention } from "../../../models/clients-interface";
import { RetentionObj } from "../../../models/clients-object";

@Component({
  selector: "app-retention",
  templateUrl: "./retention.component.html",
  styles: [],
})
export class RetentionComponent implements OnInit, OnDestroy {
  public dialog: boolean = true;

  public selectedTaxpayer!: IRbRetention;

  public selectedExporter!: IRbRetention;

  public selectedAccounting!: IRbRetention;

  public taxpayer: boolean = false;

  public exporter: boolean = false;

  public accounting: boolean = false;

  public rdRetention: IRbRetention[] = [
    { name: "SI", key: true },
    { name: "NO", key: false },
  ];

  private subcription!: Subscription;

  private office!: OfficesDto;

  private client!: GetClientDto[];

  public retention: IRetention[] = RetentionObj;

  constructor(public clientService: ClientComponentService, private confirmationService: ConfirmationService, private officeService: OfficesHttpService) {}

  ngOnDestroy(): void {
    this.clientService.hideRetention();
    if (this.subcription) this.subcription.unsubscribe();
  }

  ngOnInit(): void {
    this.subcription = this.officeService.offices$.subscribe((res) => (this.office = res!));
    this.subcription = this.clientService.clientFound$.subscribe((res) => (this.client = res));
    this.subcription = this.clientService.getRetention(this.office.ip_Red!, this.client[0].numero_Idcliente!, this.client[0].tipo_Idcliente!).subscribe((res) => {
      this.retention = res.map((ret) => {
        return {
          taxpayer: ret.contribuyente_Especial == "0" ? "NO" : "SI",
          exporter: ret.cda_Exportador == null || ret.cda_Exportador == false ? "NO" : "SI",
          accounting: ret.cda_Contabilida_Si == null || ret.cda_Contabilida_Si == false ? "NO" : "SI",
        };
      });

      this.selectedTaxpayer = this.typeRetention(this.retention[0].taxpayer);
      this.selectedExporter = this.typeRetention(this.retention[0].exporter);
      this.selectedAccounting = this.typeRetention(this.retention[0].accounting);

      if (this.selectedTaxpayer.key) this.changeRdButton();
    });
  }

  public confirm() {
    this.confirmationService.confirm({
      message: "¿Está seguro de guardar los cambios en la retención?",
      icon: "pi pi-question-circle",
      accept: () => {
        this.updateRetention();
      },
    });
  }

  public save(): void {
    this.selectedAccounting;
    this.selectedExporter;
    this.selectedTaxpayer;
    this.confirm();
  }

  private typeRetention(name: string): IRbRetention {
    return this.rdRetention.find((f) => f.name == name)!;
  }

  public changeRdButton(): void {
    if (this.selectedTaxpayer.key) {
      this.exporter = true;
      this.accounting = true;
      this.selectedExporter = this.rdRetention[1];
      this.selectedAccounting = this.rdRetention[1];
    } else {
      this.exporter = false;
      this.accounting = false;
    }
  }
  private updateRetention(): void {
    const bodyRetention: RetentionParams = {
      contribuyente_Especial: this.selectedTaxpayer.key ? "1" : "0",
      cda_Tipo_Idcliente: this.client[0].tipo_Idcliente,
      cda_Numero_Idcliente: this.client[0].numero_Idcliente,
      cda_Contabilida_Si: this.selectedAccounting.key ? true : false,
      cda_Contabilida_No: this.selectedAccounting.key ? false : true,
      cda_Exportador: this.selectedExporter.key,
    };

    this.clientService.setspecialTaxpayer(this.selectedTaxpayer.name);
    this.subcription = this.clientService.updateRetention(this.office.ip_Red!, bodyRetention).subscribe();
  }
}
