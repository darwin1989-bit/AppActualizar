import { Component, OnInit } from "@angular/core";
import { MaterialPromotionDto } from "src/app/api/api_actualizar/models";
import { PromotionsObj } from "src/app/material/models/material-objects";
import { DetailPromotionService } from "src/app/material/service/detail-promotion.service";

@Component({
  selector: "app-promotion-store",
  templateUrl: "./promotion-store.component.html",
  styleUrls: ["./promotion-store.component.scss"],
})
export class PromotionStoreComponent implements OnInit {
  public promotions: MaterialPromotionDto[] = PromotionsObj;

  constructor(public detailPromotionService: DetailPromotionService) {}

  ngOnInit(): void {
    this.detailPromotionService.PromotionStore$.subscribe((res) => (this.promotions = res!));
  }
}
