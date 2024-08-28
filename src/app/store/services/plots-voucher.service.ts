import { Injectable } from "@angular/core";
import { catchError, tap } from "rxjs";
import { StoreService } from "src/app/api/api_actualizar/services";
import { CalledHttpService } from "src/app/shared/services/called-http.service";
import { ToastMessagesService } from "src/app/shared/services/toast-messages.service";

@Injectable({
  providedIn: "root",
})
export class PlotsVoucherService {
  constructor(private storeService: StoreService, private calledHttpService: CalledHttpService, private toastMesagge: ToastMessagesService) {}

  public getCardsPlots(): void {
    this.storeService
      .apiStoreCardPlotsGet$Json({ amount: "000000003999", ip: "172.16.116.10", transactionDate: "2024-08-23T05:00:00.000Z" })
      .pipe(
        tap((res) => {
          console.log(res);
        }),
        catchError((error) => this.calledHttpService.errorHandler(error))
      )
      .subscribe();
  }
}
