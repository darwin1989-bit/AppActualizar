import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject, catchError, tap } from "rxjs";
import { PaymentsDto } from "src/app/api/api_actualizar/models";
import { PaymentsService } from "src/app/api/api_actualizar/services";
import { CalledHttpService } from "src/app/shared/services/called-http.service";

@Injectable({
  providedIn: "root",
})
export class PaymentsComponentService {
  private payments = new BehaviorSubject<PaymentsDto[]>([]);
  public payments$ = this.payments.asObservable();

  private clearForm = new Subject<void>();
  public clearForm$ = this.clearForm.asObservable();

  constructor(private paymentService: PaymentsService, private calledHttpService: CalledHttpService) {}

  public getPaymentsAll(ip: string): void {
    this.paymentService
      .apiPaymentsAllPaymentsGet$Json({ ip })
      .pipe(
        tap((res) => this.payments.next(res.data!)),
        catchError((error) => {
          return this.calledHttpService.errorHandler(error);
        })
      )
      .subscribe();
  }
  public getPayments(ip: string, numberId: string): void {
    this.paymentService
      .apiPaymentsGet$Json({ ip, numberId })
      .pipe(
        tap((res) => this.payments.next(res.data!)),
        catchError((error) => {
          return this.calledHttpService.errorHandler(error);
        })
      )
      .subscribe();
  }
  public clearPayments(): void {
    this.payments.next([]);
  }
  public clearFormPayments(): void {
    this.clearForm.next();
  }
}
