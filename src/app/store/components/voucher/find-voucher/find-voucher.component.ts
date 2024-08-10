import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { Subscription } from "rxjs";
import { Datetime, OfficesDto } from "src/app/api/api_actualizar/models";
import { OfficesHttpService } from "src/app/shared/services/offices-http.service";

@Component({
  selector: "app-find-voucher",
  templateUrl: "./find-voucher.component.html",
  styles: [],
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

  constructor(private fb: FormBuilder, private officeService: OfficesHttpService) {}

  ngOnInit(): void {
    this.subscription = this.officeService.offices$.subscribe((res) => (this.office = res!));

    this.dateTransactionControl.setValue(new Date());

    let today = new Date();
    let month = today.getMonth();
    let prevMonth = month === 0 ? 11 : month - 3;
    this.minDate = new Date();
    this.minDate.setMonth(prevMonth);
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
        let dateVoucher: Date = this.dateTransactionControl.value;
        let amount: Number = Number(this.amountTransactionControl.value) * 100;
        console.log(dateVoucher.toJSON());
        console.log(amount.toString().padStart(13, "0"));
      }
  }
}
