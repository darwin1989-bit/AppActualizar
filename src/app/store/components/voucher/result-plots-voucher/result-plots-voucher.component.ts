import { Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { Table } from "primeng/table";
import { Subscription } from "rxjs";
import { VoucherDto } from "src/app/api/api_actualizar/models";
import { PlotsVoucherService } from "src/app/store/services/plots-voucher.service";

@Component({
  selector: "app-result-plots-voucher",
  templateUrl: "./result-plots-voucher.component.html",
  styles: [
    `
      :host ::ng-deep .p-tag.p-tag-info {
        color: var(--surface-700);
        background: var(--surface-200);
      }
    `,
  ],
})
export class ResultPlotsVoucherComponent implements OnInit, OnDestroy {
  @ViewChild("dt") tableComponent!: Table;

  public visible: boolean = false;
  public showDialogPay: boolean = false;
  public showDialogInv: boolean = false;
  private subscription!: Subscription;

  constructor(public plotsVoucherService: PlotsVoucherService) {}

  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
    this.plotsVoucherService.clearPlotsVoucher();
  }

  ngOnInit(): void {
    this.subscription = this.plotsVoucherService.resetTable$.subscribe((res) => {
      if (res) this.reset();
    });
  }

  public getReference(voucher: VoucherDto): string {
    if (voucher.dataInvoice?.length! > 0) return "Factura";
    if (voucher.dataPayments?.length! > 0) return "Pago";
    if (voucher.autorizacion == "EEE") return "";
    if (voucher.autorizacion == "") return "";
    return "Sin referencia";
  }
  public getSeverity(voucher: VoucherDto): string {
    if (voucher.dataInvoice?.length! > 0) return "success";
    if (voucher.dataPayments?.length! > 0) return "success";
    if (voucher.autorizacion == "EEE") return "danger";
    if (voucher.autorizacion == "") return "danger";
    return "warning";
  }
  public getIcon(voucher: VoucherDto): string {
    if (voucher.autorizacion == "EEE") return "pi pi-times";
    if (voucher.autorizacion == "") return "pi pi-times";
    if (voucher.dataInvoice?.length! > 0) return "pi pi-check";
    if (voucher.dataPayments?.length! > 0) return "pi pi-check";
    return "pi pi-question";
  }
  public moreInfoVoucher(voucher: VoucherDto): void {
    this.plotsVoucherService.setInfoVoucher(voucher);
    this.visible = true;
  }
  public printDocument(voucher: VoucherDto): void {
    if (voucher.dataInvoice!.length > 0) this.showDialogInv = true;
    if (voucher.dataPayments!.length > 0) this.showDialogPay = true;

    this.plotsVoucherService.setInfoVoucher(voucher);
  }
  private reset(): void {
    if (this.tableComponent) {
      this.tableComponent.reset();
      this.tableComponent.rows = 5;
    }
  }
}
