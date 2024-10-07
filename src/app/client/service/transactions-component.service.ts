import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject, catchError, tap } from "rxjs";
import { OfflinePaymentDto, TransactionsDto } from "src/app/api/api_actualizar/models";
import { TransactionsService } from "src/app/api/api_actualizar/services";
import { CalledHttpService } from "src/app/shared/services/called-http.service";

@Injectable({
  providedIn: "root",
})
export class TransactionsComponentService {
  private transactions = new BehaviorSubject<TransactionsDto[]>([]);
  public transactions$ = this.transactions.asObservable();

  public dialogOffline = new Subject<boolean>();
  public dialogOffline$ = this.dialogOffline.asObservable();

  private transaction = new BehaviorSubject<TransactionsDto>({});
  public transaction$ = this.transaction.asObservable();

  private offlineMain = new BehaviorSubject<OfflinePaymentDto>({});
  public offlineMain$ = this.offlineMain.asObservable();

  private clearForm = new Subject<void>();
  public clearForm$ = this.clearForm.asObservable();

  constructor(private transactionsService: TransactionsService, private calledHttpService: CalledHttpService) {}

  public getTransactionsNumberId(ip: string, numberId: string): void {
    this.transactionsService
      .apiTransactionsGet$Json({ ip, numberId })
      .pipe(
        tap((res) => this.transactions.next(res.data!)),
        catchError((error) => {
          return this.calledHttpService.errorHandler(error);
        })
      )
      .subscribe();
  }
  public getOfflinePayment(ip: string, numberId: string, numberDoc: string): void {
    this.transactionsService
      .apiTransactionsOfflinePaymentsGet$Json({ ip, numberId, numberDoc })
      .pipe(
        tap((res) => {
          this.dialogOffline.next(true);
          this.offlineMain.next(res.data!);
        }),
        catchError((error) => {
          return this.calledHttpService.errorHandler(error);
        })
      )
      .subscribe();
  }
  public getOfflinePurchase(ip: string, numberId: string, numberDoc: string): void {
    this.transactionsService
      .apiTransactionsOfflinePurchaseGet$Json({ ip, numberId, numberDoc })
      .pipe(
        tap((res) => {
          this.dialogOffline.next(true);
          this.offlineMain.next(res.data!);
        }),
        catchError((error) => {
          return this.calledHttpService.errorHandler(error);
        })
      )
      .subscribe();
  }

  public openOffline(transaction: TransactionsDto): void {
    this.transaction.next(transaction);
  }

  public clearTransactions(): void {
    this.transactions.next([]);
  }

  public clearFromTransaction(): void {
    this.clearForm.next();
  }
}
