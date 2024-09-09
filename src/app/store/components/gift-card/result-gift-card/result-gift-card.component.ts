import { Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { Table } from "primeng/table";
import { Subscription } from "rxjs";
import { ICompany } from "src/app/shared/models/offices.interface";
import { OfficesHttpService } from "src/app/shared/services/offices-http.service";
import { GiftCardService } from "src/app/store/services/gift-card.service";

@Component({
  selector: "app-result-gift-card",
  templateUrl: "./result-gift-card.component.html",
  styles: [],
})
export class ResultGiftCardComponent implements OnInit, OnDestroy {
  @ViewChild("dt") tableComponent!: Table;
  public visible: boolean = false;
  public company!: ICompany;
  private subscription!: Subscription;

  constructor(public giftCardService: GiftCardService, private officeService: OfficesHttpService) {}

  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = this.officeService.company$.subscribe((res) => (this.company = res!));
    this.subscription = this.giftCardService.resetTable$.subscribe((res) => {
      if (res) this.reset();
    });
  }

  public getSeverity(value: string): string {
    if (value == "ACTIVO") return "success";
    if (value == "CONSUMIDO") return "warning";
    return "danger";
  }
  public detailsGiftCard(value: string): void {
    this.reset();
    this.visible = true;
    this.giftCardService.getDetailGitCard(this.company.code!, value);
  }

  private reset(): void {
    if (this.tableComponent) {
      this.tableComponent.reset();
      this.tableComponent.rows = 5;
    }
  }
}
