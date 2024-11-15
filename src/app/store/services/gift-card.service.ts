import { Injectable } from "@angular/core";
import { BehaviorSubject, catchError, tap } from "rxjs";
import { GiftCardDto, InformationGiftCard } from "src/app/api/api_actualizar/models";
import { StoreService } from "src/app/api/api_actualizar/services";
import { CalledHttpService } from "src/app/shared/services/called-http.service";

@Injectable({
  providedIn: "root",
})
export class GiftCardService {
  private giftCard = new BehaviorSubject<GiftCardDto[]>([]);
  public giftCard$ = this.giftCard.asObservable();

  private detailsGiftCard = new BehaviorSubject<InformationGiftCard[]>([]);
  public detailsGiftCard$ = this.detailsGiftCard.asObservable();

  private resetTable = new BehaviorSubject<boolean>(false);
  public resetTable$ = this.resetTable.asObservable();

  constructor(private storeService: StoreService, private calledHttpService: CalledHttpService) {}

  public getGitCardNumber(company: string, numberGiftCard: string): void {
    this.storeService
      .apiStoreGiftcardsCompanyNumberGiftCardGet$Json({ company, numberGiftCard })
      .pipe(
        tap((res) => {
          this.giftCard.next(res.data!);
        }),
        catchError((error) => this.calledHttpService.errorHandler(error))
      )
      .subscribe();
  }
  public getGitCardIdentification(company: string, identification: string): void {
    this.storeService
      .apiStoreGiftcardsCompanyIdentificationIdentificationGet$Json({ company, identification })
      .pipe(
        tap((res) => {
          this.giftCard.next(res.data!);
        }),
        catchError((error) => this.calledHttpService.errorHandler(error))
      )
      .subscribe();
  }
  public getDetailGitCard(company: string, numberGiftCard: string): void {
    this.storeService
      .apiStoreGiftcardsInformationCompanyNumberGiftCardGet$Json({ company, numberGiftCard })
      .pipe(
        tap((res) => {
          this.detailsGiftCard.next(res.data!);
        }),
        catchError((error) => this.calledHttpService.errorHandler(error))
      )
      .subscribe();
  }
  public editGiftCard(company: string, status: string, numberGiftCard: string): void {
    this.storeService
      .apiStoreGiftcardsEditPut$Json({ company, status, numberGiftCard })
      .pipe(
        tap(() => this.getGitCardNumber(company, numberGiftCard)),
        catchError((error) => this.calledHttpService.errorHandler(error))
      )
      .subscribe();
  }

  public clearGiftCards(): void {
    this.giftCard.next([]);
    this.resetTable.next(true);
  }
}
