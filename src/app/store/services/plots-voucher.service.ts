import { Injectable } from "@angular/core";
import { BehaviorSubject, catchError, Observable, tap } from "rxjs";
import { InvoiceCardPlotsDto, PaymentsCardPlots, ResponsePrintVoucher, VoucherDto } from "src/app/api/api_actualizar/models";
import { StoreService } from "src/app/api/api_actualizar/services";
import { CalledHttpService } from "src/app/shared/services/called-http.service";

@Injectable({
  providedIn: "root",
})
export class PlotsVoucherService {
  private resultVoucher = new BehaviorSubject<VoucherDto[]>([]);
  public resultVoucher$ = this.resultVoucher.asObservable();

  private resultVoucherPayments = new BehaviorSubject<PaymentsCardPlots[]>([]);
  public resultVoucherPayments$ = this.resultVoucherPayments.asObservable();

  private resultVoucherInvoices = new BehaviorSubject<InvoiceCardPlotsDto[]>([]);
  public resultVoucherInvoices$ = this.resultVoucherInvoices.asObservable();

  private infoVoucher = new BehaviorSubject<VoucherDto>({});
  public infoVoucher$ = this.infoVoucher.asObservable();

  private resetTable = new BehaviorSubject<boolean>(false);
  public resetTable$ = this.resetTable.asObservable();

  constructor(private storeService: StoreService, private calledHttpService: CalledHttpService) {}

  public getCardsPlots(amount: string, ip: string, transactionDate: string): void {
    this.storeService
      .apiStoreCardPlotsGet$Json({ amount, ip, transactionDate })
      .pipe(
        tap((res) => {
          let data = res.data?.map((r) => {
            return {
              ...r,
              fechaHora: `${r.fecha_Tx?.substring(0, 4)}/${r.fecha_Tx?.substring(4, 6)}/${r.fecha_Tx?.substring(6, 8)} ${r.hora_Tx?.substring(0, 2)}:${r.hora_Tx?.substring(2, 4)}`,
              tipo_TxMessage: this.getTipoTx(r.tipo_Tx!),
            };
          });
          this.resultVoucher.next(data!);

          let arrayPayments: PaymentsCardPlots[] = [];
          let arrayInvoices: InvoiceCardPlotsDto[] = [];
          res.data!.forEach((element) => {
            element.dataPayments!.forEach((payment) => {
              arrayPayments.push(payment);
            });
            element.dataInvoice!.forEach((invoice) => {
              arrayInvoices.push(invoice);
            });
          });
          this.resultVoucherPayments.next(arrayPayments);
          this.resultVoucherInvoices.next(arrayInvoices!);
        }),
        catchError((error) => this.calledHttpService.errorHandler(error))
      )
      .subscribe();
  }

  private getTipoTx(tipo: string): string {
    switch (tipo) {
      case "01":
        return `${tipo} - Corriente`;
      case "02":
        return `${tipo} - Diferido`;
      case "03":
        return `${tipo} - Anulación`;
      case "04":
        return `${tipo} - Reverso`;
      case "99":
        return `${tipo} - Trama incompleta`;
      default:
        return `${tipo} - Tipo desconocido`;
    }
  }

  public setInfoVoucher(voucher: VoucherDto): void {
    this.infoVoucher.next(voucher);
  }

  public getPrintVoucher(ip: string, office: string, body: VoucherDto): Observable<ResponsePrintVoucher> {
    return this.storeService.apiStoreVoucherPrintPost$Json({ ip, office, body });
  }

  public clearPlotsVoucher(): void {
    this.resultVoucher.next([]);
    this.resultVoucherInvoices.next([]);
    this.resultVoucherPayments.next([]);
    this.infoVoucher.next({});
    this.resetTable.next(true);
  }
}
