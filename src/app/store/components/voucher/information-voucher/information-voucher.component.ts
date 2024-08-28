import { Component } from "@angular/core";
import { PlotsVoucherService } from "src/app/store/services/plots-voucher.service";

@Component({
  selector: "app-information-voucher",
  templateUrl: "./information-voucher.component.html",
  styles: [],
})
export class InformationVoucherComponent {
  constructor(public plotsVoucherService: PlotsVoucherService) {}
}
