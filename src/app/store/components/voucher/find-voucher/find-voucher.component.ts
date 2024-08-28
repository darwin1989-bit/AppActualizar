import { Component, LOCALE_ID, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { Subscription } from "rxjs";
import { OfficesDto } from "src/app/api/api_actualizar/models";
import { OfficesHttpService } from "src/app/shared/services/offices-http.service";
import localeEsEC from "@angular/common/locales/es-EC";
import { registerLocaleData } from "@angular/common";
import { PlotsVoucherService } from "src/app/store/services/plots-voucher.service";

registerLocaleData(localeEsEC);

@Component({
  selector: "app-find-voucher",
  templateUrl: "./find-voucher.component.html",
  styles: [],
  providers: [{ provide: LOCALE_ID, useValue: "es-EC" }],
})
export class FindVoucherComponent implements OnInit, OnDestroy {
  private subscription!: Subscription;

  private office!: OfficesDto;

  public minDate!: Date;

  public maxDate!: Date;

  public voucherForm = this.fb.group({
    dateTransaction: [Date, Validators.required],
    amountTransaction: [null, Validators.required],
  });

  get dateTransactionControl(): FormControl<Date> {
    return this.voucherForm.get("dateTransaction") as FormControl;
  }
  get amountTransactionControl(): FormControl<Number> {
    return this.voucherForm.get("amountTransaction") as FormControl;
  }

  constructor(private fb: FormBuilder, private officeService: OfficesHttpService, private plotsVoucherService: PlotsVoucherService) {}

  ngOnInit(): void {
    this.subscription = this.officeService.offices$.subscribe((res) => (this.office = res!));

    this.dateTransactionControl.setValue(new Date());

    let today = new Date();
    let month = today.getUTCMonth();
    let prevMonth = month === 0 ? 11 : month - 2;
    this.minDate = new Date();
    this.minDate.setUTCMonth(prevMonth);
    this.maxDate = new Date();
  }
  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }

  public findVoucher(): void {
    this.voucherForm.markAllAsTouched();
    this.amountTransactionControl.markAsDirty();
    this.officeService.setValidFindOffice();
    if (this.office)
      if (this.office.nombre != "" && this.voucherForm.valid) {
        let dateVoucher: Date = new Date(
          `${this.dateTransactionControl.value.getUTCFullYear()}/${this.dateTransactionControl.value.getUTCMonth() + 1}/${this.dateTransactionControl.value.getUTCDate()}`
        );
        let amount: Number = Number(this.amountTransactionControl.value) * 100;
        let amountTransaccion = amount.toString().padStart(12, "0");
        this.plotsVoucherService.getCardsPlots(amountTransaccion, this.office.ip_Red!, dateVoucher.toJSON());
      }
  }
}
