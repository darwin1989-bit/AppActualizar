import { Component, OnDestroy, OnInit } from "@angular/core";
import { Message } from "primeng/api";
import { Subscription, tap } from "rxjs";
import { OfficesDto, VoucherDto } from "src/app/api/api_actualizar/models";
import { OfficesHttpService } from "src/app/shared/services/offices-http.service";
import { PlotsVoucherService } from "src/app/store/services/plots-voucher.service";
import { Clipboard } from "@angular/cdk/clipboard";

@Component({
  selector: "app-result-invoices-voucher",
  templateUrl: "./result-invoices-voucher.component.html",
  styles: [],
})
export class ResultInvoicesVoucherComponent implements OnInit, OnDestroy {
  private subscription!: Subscription;
  private office!: OfficesDto;
  public icon: string = "pi pi-copy";
  public disabled: boolean = false;
  private voucher!: VoucherDto[];
  public classCopy: string = "p-2 surface-200 text-800 border-round-md";
  private amount!: number;
  public text!: string;
  public auth!: string;

  constructor(public plotsVoucherService: PlotsVoucherService, private clipboard: Clipboard, private officeService: OfficesHttpService) {}

  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = this.officeService.offices$.subscribe((res) => (this.office = res!));
    this.subscription = this.plotsVoucherService.resultVoucher$.subscribe((res) => (this.voucher = res!));
    this.subscription = this.plotsVoucherService.amountVoucher$.subscribe((res) => (this.amount = res!));
  }

  public generatePrintingChain(cardAuthorization: string) {
    this.icon = "pi pi-spin pi-spinner";
    this.auth = cardAuthorization;
    let voucher = this.voucher.find((f) => f.monto == this.amount && f.autorizacion == cardAuthorization);

    this.plotsVoucherService
      .getPrintVoucher(this.office.ip_Red!, this.office.oficina!, voucher!)
      .pipe(
        tap((res) => {
          this.text = res.data!;
        })
      )
      .subscribe({
        complete: () => {
          setTimeout(() => {
            this.icon = "pi pi-copy";
            this.disabled = false;
          }, 3000);
          this.plotsVoucherService.copyClipboard(this.text);
          this.icon = "pi pi-check";
          this.disabled = true;
          this.classCopy = "p-2 surface-200 text-800 border-round-md fadeout animation-duration-3000";
        },
      });
  }
}
