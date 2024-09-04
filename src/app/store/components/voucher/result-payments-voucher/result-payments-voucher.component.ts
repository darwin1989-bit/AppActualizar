import { Component, OnDestroy, OnInit } from "@angular/core";
import { PlotsVoucherService } from "src/app/store/services/plots-voucher.service";
import { Clipboard } from "@angular/cdk/clipboard";
import { Message } from "primeng/api";
import { OfficesHttpService } from "src/app/shared/services/offices-http.service";
import { Subscription, tap } from "rxjs";
import { OfficesDto, VoucherDto } from "src/app/api/api_actualizar/models";

@Component({
  selector: "app-result-payments-voucher",
  templateUrl: "./result-payments-voucher.component.html",
  styles: [
    `
      :host ::ng-deep .p-inputtext:disabled {
        color: unset;
      }
    `,
  ],
})
export class ResultPaymentsVoucherComponent implements OnInit, OnDestroy {
  private subscription!: Subscription;
  private office!: OfficesDto;
  public icon: string = "pi pi-copy";
  public messages!: Message[];
  public disabled: boolean = false;
  private voucher!: VoucherDto;

  constructor(public plotsVoucherService: PlotsVoucherService, private clipboard: Clipboard, private officeService: OfficesHttpService) {}

  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = this.officeService.offices$.subscribe((res) => (this.office = res!));
    this.subscription = this.plotsVoucherService.infoVoucher$.subscribe((res) => (this.voucher = res!));
  }

  public ccopyPrintingChain() {
    this.icon = "pi pi-spin pi-spinner";
    this.disabled = true;

    this.plotsVoucherService
      .getPrintVoucher(this.office.ip_Red!, this.office.oficina!, this.voucher)
      .pipe(
        tap((res) => {
          this.clipboard.copy(res.data!);
          this.icon = "pi pi-check";
          this.messages = [{ severity: "success", summary: "", detail: "Cadena de impresión copiado" }];
        })
      )
      .subscribe();

    setTimeout(() => {
      this.icon = "pi pi-copy";
      this.messages = [];
      this.disabled = false;
    }, 3000);
  }
}
