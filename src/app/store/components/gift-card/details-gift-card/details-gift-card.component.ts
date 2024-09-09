import { Component } from "@angular/core";
import { GiftCardService } from "src/app/store/services/gift-card.service";

@Component({
  selector: "app-details-gift-card",
  templateUrl: "./details-gift-card.component.html",
  styles: [],
})
export class DetailsGiftCardComponent {
  constructor(public giftCardService: GiftCardService) {}
}
