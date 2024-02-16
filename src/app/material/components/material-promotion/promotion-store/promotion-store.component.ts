import { Component, OnInit } from "@angular/core";
import { ResponsePromotionStore } from "src/app/api/api_actualizar/models";
import { DetailPromotionService } from "src/app/material/service/detail-promotion.service";

@Component({
  selector: "app-promotion-store",
  templateUrl: "./promotion-store.component.html",
  styleUrls: ["./promotion-store.component.scss"],
})
export class PromotionStoreComponent implements OnInit {
  public promotions!: ResponsePromotionStore[];

  constructor(public detailPromotionService: DetailPromotionService) {}

  ngOnInit(): void {
    this.detailPromotionService.PromotionStore$.subscribe((res) => (this.promotions = res!));
  }
}
