import { Component } from "@angular/core";
import { VoucherDto } from "src/app/api/api_actualizar/models";
import { PlotsVoucherService } from "src/app/store/services/plots-voucher.service";

@Component({
  selector: "app-result-plots-voucher",
  templateUrl: "./result-plots-voucher.component.html",
  styles: [
    `
      :host ::ng-deep .p-tag {
        font-size: 12px;
      }
    `,
  ],
})
export class ResultPlotsVoucherComponent {
  public visible: boolean = false;
  constructor(public plotsVoucherService: PlotsVoucherService) {}

  public getReference(voucher: VoucherDto): string {
    if (voucher.dataInvoice?.length! > 0) return "Factura";
    if (voucher.dataPaymentz?.length! > 0) return "Pago";
    return "Sin referencia";
  }
  public getIcon(voucher: VoucherDto): string {
    if (voucher.autorizacion == "EEE") return "pi pi-times";
    return "pi pi-check";
  }
  public moreInfoVoucher(voucher: VoucherDto): void {
    this.plotsVoucherService.setInfoVoucher(voucher);
    this.visible = true;
  }
}
