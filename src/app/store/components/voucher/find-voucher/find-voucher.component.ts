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

  public voucherForm = this.fb.group({
    dateTransaction: [Date, Validators.required],
    amountTransaction: [null, Validators.required],
  });

  get dateTransactionControl(): FormControl<Datetime> {
    return this.voucherForm.get("dateTransaction") as FormControl;
  }
  get amountTransactionControl(): FormControl {
    return this.voucherForm.get("amountTransaction") as FormControl;
  }

  constructor(private fb: FormBuilder, private officeService: OfficesHttpService) {}

  ngOnInit(): void {
    this.subscription = this.officeService.offices$.subscribe((res) => (this.office = res!));
  }
  ngOnDestroy(): void {}

  public findVoucher(): void {}
}
