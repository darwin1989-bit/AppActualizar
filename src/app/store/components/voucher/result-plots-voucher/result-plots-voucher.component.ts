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
  public showDialogPay: boolean = false;
  public showDialogInv: boolean = false;
  constructor(public plotsVoucherService: PlotsVoucherService) {}

  public getReference(voucher: VoucherDto): string {
    if (voucher.dataInvoice?.length! > 0) return "Factura";
    if (voucher.dataPaymentz?.length! > 0) return "Pago";
    if (voucher.autorizacion == "EEE") return "";
    return "Sin referencia";
  }
  public getSeverity(voucher: VoucherDto): string {
    if (voucher.dataInvoice?.length! > 0) return "success";
    if (voucher.dataPaymentz?.length! > 0) return "success";
    if (voucher.autorizacion == "EEE") return "danger";
    return "warning";
  }
  public getIcon(voucher: VoucherDto): string {
    if (voucher.autorizacion == "EEE") return "pi pi-times";
    return "pi pi-check";
  }
  public moreInfoVoucher(voucher: VoucherDto): void {
    this.plotsVoucherService.setInfoVoucher(voucher);
    this.visible = true;
  }
  public printDocument(voucher: VoucherDto): void {
    if (voucher.dataInvoice!.length > 0) this.showDialogInv = true;
    if (voucher.dataPaymentz!.length > 0) this.showDialogPay = true;

    this.plotsVoucherService.setInfoVoucher(voucher);
  }
}
