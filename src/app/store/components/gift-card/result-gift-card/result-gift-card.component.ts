import { Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { ConfirmationService } from "primeng/api";
import { Table } from "primeng/table";
import { Subscription } from "rxjs";
import { ICompany } from "src/app/shared/models/offices.interface";
import { OfficesHttpService } from "src/app/shared/services/offices-http.service";
import { GiftCardService } from "src/app/store/services/gift-card.service";

@Component({
  selector: "app-result-gift-card",
  templateUrl: "./result-gift-card.component.html",
  providers: [ConfirmationService],
  styles: [],
})
export class ResultGiftCardComponent implements OnInit, OnDestroy {
  @ViewChild("dt") tableComponent!: Table;
  public visible: boolean = false;
  public company!: ICompany;
  private subscription!: Subscription;

  constructor(public giftCardService: GiftCardService, private officeService: OfficesHttpService, private confirmationService: ConfirmationService) {}

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

  private editGiftCard(numberGiftCard: string): void {
    this.reset();
    this.giftCardService.editGiftCard(this.company.code!, "ACTIVO", numberGiftCard);
  }

  confirm(event: Event, numberGiftCard: string): void {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: "Esta segúro de <strong>ACTIVAR</strong> la tarjeta regalo?",
      header: "Confirmación",
      icon: "pi pi-exclamation-triangle",
      acceptLabel: "Si",
      rejectLabel: "No",
      rejectIcon: "pi pi-times",
      acceptIcon: "pi pi-check",
      rejectButtonStyleClass: "p-button-danger p-button-sm gap-2",
      acceptButtonStyleClass: "ml-2 p-button-sm gap-2",
      accept: () => {
        this.editGiftCard(numberGiftCard);
      },
      reject: () => {},
    });
  }
}
