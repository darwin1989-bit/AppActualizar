import { Component } from "@angular/core";
import { GiftCardService } from "src/app/store/services/gift-card.service";

@Component({
  selector: "app-edit-gift-card",
  templateUrl: "./edit-gift-card.component.html",
  styles: [],
})
export class EditGiftCardComponent {
  constructor(public giftCardService: GiftCardService) {}
}
