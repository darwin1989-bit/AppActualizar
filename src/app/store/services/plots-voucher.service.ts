import { Injectable } from "@angular/core";
import { BehaviorSubject, catchError, tap } from "rxjs";
import { VoucherDto } from "src/app/api/api_actualizar/models";
import { StoreService } from "src/app/api/api_actualizar/services";
import { CalledHttpService } from "src/app/shared/services/called-http.service";
import { ToastMessagesService } from "src/app/shared/services/toast-messages.service";

@Injectable({
  providedIn: "root",
})
export class PlotsVoucherService {
  private resultVoucher = new BehaviorSubject<VoucherDto[]>([]);
  public resultVoucher$ = this.resultVoucher.asObservable();

  private infoVoucher = new BehaviorSubject<VoucherDto>({});
  public infoVoucher$ = this.infoVoucher.asObservable();

  constructor(private storeService: StoreService, private calledHttpService: CalledHttpService, private toastMesagge: ToastMessagesService) {}

  public getCardsPlots(amount: string, ip: string, transactionDate: string): void {
    this.storeService
      .apiStoreCardPlotsGet$Json({ amount, ip, transactionDate })
      .pipe(
        tap((res) => {
          let data = res.data?.map((r) => {
            return {
              ...r,
              fechaHora: `${r.fecha_Tx?.substring(0, 4)}/${r.fecha_Tx?.substring(4, 6)}/${r.fecha_Tx?.substring(6, 8)} ${r.hora_Tx?.substring(0, 2)}:${r.hora_Tx?.substring(2, 4)}`,
            };
          });
          this.resultVoucher.next(data!);
        }),
        catchError((error) => this.calledHttpService.errorHandler(error))
      )
      .subscribe();
  }
  public setInfoVoucher(voucher: VoucherDto): void {
    this.infoVoucher.next(voucher);
  }
}
