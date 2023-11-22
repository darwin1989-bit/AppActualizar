import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { DetailPromotionService } from "src/app/material/service/detail-promotion.service";
import { OfficesHttpService } from "src/app/shared/services/offices-http.service";

@Component({
  selector: "app-detail-promotion",
  templateUrl: "./detail-promotion.component.html",
  styleUrls: ["./detail-promotion.component.scss"],
})
export class DetailPromotionComponent implements OnInit, OnDestroy {
  public visible!: boolean;
  private subscription!: Subscription;
  public moneyLocale!: { money: string; locale: string };

  constructor(public detailPromotionService: DetailPromotionService, private officeService: OfficesHttpService) {}

  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.detailPromotionService.dialogPromotion$.subscribe((res) => (this.visible = res));
    this.subscription = this.officeService.moneyLocale$.subscribe((res) => (this.moneyLocale = res));
  }
}
