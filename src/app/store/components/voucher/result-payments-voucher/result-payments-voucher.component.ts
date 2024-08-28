import { Component } from "@angular/core";
import { PlotsVoucherService } from "src/app/store/services/plots-voucher.service";

@Component({
  selector: "app-result-payments-voucher",
  templateUrl: "./result-payments-voucher.component.html",
  styles: [],
})
export class ResultPaymentsVoucherComponent {
  constructor(public plotsVoucherService: PlotsVoucherService) {}
}
