import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject, catchError, finalize, tap } from "rxjs";
import { InvoiceDetailsDto, InvoiceDto } from "src/app/api/api_actualizar/models";
import { InvoicesService } from "src/app/api/api_actualizar/services";
import { CalledHttpService } from "src/app/shared/services/called-http.service";
import { InvoiceDetailsObj } from "../models/invoices-objects";

@Injectable()
export class InvoicesComponentService {
  private invoicesStore = new Subject<InvoiceDto[]>();
  public invoicesStore$ = this.invoicesStore.asObservable();

  private invoicesMain = new Subject<InvoiceDto[]>();
  public invoicesMain$ = this.invoicesMain.asObservable();

  private invoiceDetails = new BehaviorSubject<InvoiceDetailsDto>(InvoiceDetailsObj);
  public invoiceDetails$ = this.invoiceDetails.asObservable();

  private moneyLocale = new BehaviorSubject<{ moneda: string; locale: string }>({ moneda: "", locale: "" });
  public moneyLocale$ = this.moneyLocale.asObservable();

  constructor(private invoiceService: InvoicesService, private calledHttpService: CalledHttpService) {}

  public getInvoiceNumber(ip: string, numberInvoice: string): void {
    let moneda!: string;
    this.invoiceService
      .apiInvoicesNumberGet$Json({ ip, numberInvoice })
      .pipe(
        tap((invoices) => {
          moneda = invoices[0].moneda!;
          const invoiceMap = invoices.map((res) => {
            return {
              ...res,
              locale: res.moneda == "CRC" ? "es-CR" : "es-EC",
            };
          });
          this.invoicesStore.next(invoiceMap);
        }),
        catchError((error) => {
          return this.calledHttpService.errorHandler(error);
        }),
        finalize(() => {
          this.invoiceService
            .apiInvoicesNumberMainGet$Json({ ip, numberInvoice })
            .pipe(
              tap((invoices) => {
                const invoiceMap = invoices.map((res) => {
                  return {
                    ...res,
                    locale: moneda == "CRC" ? "es-CR" : "es-EC",
                    moneda: moneda,
                  };
                });
                this.invoicesMain.next(invoiceMap);
              }),
              catchError((error) => {
                return this.calledHttpService.errorHandler(error);
              })
            )
            .subscribe();
        })
      )
      .subscribe();
  }
  public getInvoiceIdentification(ip: string, identification: string): void {
    let moneda!: string;
    this.invoiceService
      .apiInvoicesIdentificationGet$Json({ ip, identification })
      .pipe(
        tap((invoices) => {
          moneda = invoices[0].moneda!;
          const invoiceMap = invoices.map((res) => {
            return {
              ...res,
              locale: res.moneda == "CRC" ? "es-CR" : "es-EC",
            };
          });
          this.invoicesStore.next(invoiceMap);
        }),
        catchError((error) => {
          return this.calledHttpService.errorHandler(error);
        }),
        finalize(() => {
          this.invoiceService
            .apiInvoicesIdentificationMainGet$Json({ ip, identification })
            .pipe(
              tap((invoices) => {
                const invoiceMap = invoices.map((res) => {
                  return {
                    ...res,
                    locale: moneda == "CRC" ? "es-CR" : "es-EC",
                    moneda: moneda,
                  };
                });
                this.invoicesMain.next(invoiceMap);
              }),
              catchError((error) => {
                return this.calledHttpService.errorHandler(error);
              })
            )
            .subscribe();
        })
      )
      .subscribe();
  }
  public getAllInvoices(ip: string): void {
    let moneda!: string;
    this.invoiceService
      .apiInvoicesAllInvoicesGet$Json({ ip })
      .pipe(
        tap((invoices) => {
          moneda = invoices[0].moneda!;
          const invoiceMap = invoices.map((res) => {
            return {
              ...res,
              locale: res.moneda == "CRC" ? "es-CR" : "es-EC",
            };
          });
          this.invoicesStore.next(invoiceMap);
        }),
        catchError((error) => {
          return this.calledHttpService.errorHandler(error);
        }),
        finalize(() => {
          this.invoiceService
            .apiInvoicesAllInvoicesMainGet$Json({ ip })
            .pipe(
              tap((invoices) => {
                const invoiceMap = invoices.map((res) => {
                  return {
                    ...res,
                    locale: moneda == "CRC" ? "es-CR" : "es-EC",
                    moneda: moneda,
                  };
                });
                this.invoicesMain.next(invoiceMap);
              }),
              catchError((error) => {
                return this.calledHttpService.errorHandler(error);
              })
            )
            .subscribe();
        })
      )
      .subscribe();
  }
  public getInvoiceDetails(ip: string, numberInvoice: string, money: string): void {
    this.moneyLocale.next({ moneda: money, locale: money == "CRC" ? "es-CR" : "es-EC" });
    this.invoiceService
      .apiInvoicesDetailsGet$Json({ ip, numberInvoice })
      .pipe(
        tap((res) => this.invoiceDetails.next(res)),
        catchError((error) => {
          return this.calledHttpService.errorHandler(error);
        })
      )
      .subscribe();
  }
  public getInvoiceDetailsMain(ip: string, numberInvoice: string, money: string): void {
    this.moneyLocale.next({ moneda: money, locale: money == "CRC" ? "es-CR" : "es-EC" });

    this.invoiceService
      .apiInvoicesMainDetailsGet$Json({ ip, numberInvoice })
      .pipe(
        tap((res) => this.invoiceDetails.next(res)),
        catchError((error) => {
          return this.calledHttpService.errorHandler(error);
        })
      )
      .subscribe();
  }

  public clearInvoices(): void {
    this.invoicesStore.next([]);
    this.invoicesMain.next([]);
  }
  public clearDetails(): void {
    this.invoiceDetails.next(InvoiceDetailsObj);
  }
}
