import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject, catchError, finalize, tap } from "rxjs";
import { InvoiceDetailsDto, InvoiceDto, ResponseInvoiceDto } from "src/app/api/api_actualizar/models";
import { InvoicesService } from "src/app/api/api_actualizar/services";
import { CalledHttpService } from "src/app/shared/services/called-http.service";
import { InvoiceDetailsObj } from "../models/invoices-objects";

@Injectable({
  providedIn: "root",
})
export class InvoicesComponentService {
  private invoicesStore = new Subject<InvoiceDto[]>();
  public invoicesStore$ = this.invoicesStore.asObservable();

  private invoicesMain = new Subject<InvoiceDto[]>();
  public invoicesMain$ = this.invoicesMain.asObservable();

  private dialogCreditNote = new BehaviorSubject<boolean>(false);
  public dialogCreditNote$ = this.dialogCreditNote.asObservable();

  private invoiceCreditNote = new BehaviorSubject<InvoiceDto>({});
  public invoiceCreditNote$ = this.invoiceCreditNote.asObservable();

  private visibleDetails = new Subject<boolean>();
  public visibleDetails$ = this.visibleDetails.asObservable();

  private visibleDetailsMain = new Subject<boolean>();
  public visibleDetailsMain$ = this.visibleDetailsMain.asObservable();

  private invoiceDetails = new BehaviorSubject<InvoiceDetailsDto>(InvoiceDetailsObj);
  public invoiceDetails$ = this.invoiceDetails.asObservable();

  constructor(private invoiceService: InvoicesService, private calledHttpService: CalledHttpService) {}

  public getInvoiceNumber(ip: string, numberInvoice: string): void {
    this.invoiceNumber(ip, numberInvoice).subscribe((res) => this.invoicesStore.next(res.data!));
    this.invoiceNumberMain(ip, numberInvoice).subscribe((res) => this.invoicesMain.next(res.data!));
  }

  public getInvoiceIdentification(ip: string, numberInvoice: string): void {
    this.invoiceIdentification(ip, numberInvoice).subscribe((res) => this.invoicesStore.next(res.data!));
    this.invoiceIdentificationMain(ip, numberInvoice).subscribe((res) => this.invoicesMain.next(res.data!));
  }

  public getAllInvoices(ip: string, numberInvoice: string): void {
    this.allInvoices(ip).subscribe((res) => this.invoicesStore.next(res.data!));
    this.allInvoicesMain(ip, numberInvoice).subscribe((res) => this.invoicesMain.next(res.data!));
  }

  private invoiceNumber(ip: string, numberInvoice: string): Observable<ResponseInvoiceDto> {
    return this.invoiceService.apiInvoicesNumberGet$Json({ ip, numberInvoice }).pipe(catchError((error) => this.calledHttpService.errorHandler(error)));
  }

  private invoiceNumberMain(ip: string, numberInvoice: string): Observable<ResponseInvoiceDto> {
    return this.invoiceService.apiInvoicesNumberMainGet$Json({ ip, numberInvoice }).pipe(catchError((error) => this.calledHttpService.errorHandlerMain(error)));
  }

  private invoiceIdentification(ip: string, identification: string): Observable<ResponseInvoiceDto> {
    return this.invoiceService.apiInvoicesIdentificationGet$Json({ ip, identification }).pipe(catchError((error) => this.calledHttpService.errorHandler(error)));
  }

  private invoiceIdentificationMain(ip: string, identification: string): Observable<ResponseInvoiceDto> {
    return this.invoiceService.apiInvoicesIdentificationMainGet$Json({ ip, identification }).pipe(catchError((error) => this.calledHttpService.errorHandlerMain(error)));
  }

  private allInvoices(ip: string): Observable<ResponseInvoiceDto> {
    return this.invoiceService.apiInvoicesAllInvoicesGet$Json({ ip }).pipe(catchError((error) => this.calledHttpService.errorHandler(error)));
  }

  private allInvoicesMain(ip: string, office: string): Observable<ResponseInvoiceDto> {
    return this.invoiceService.apiInvoicesAllInvoicesMainGet$Json({ ip, office }).pipe(catchError((error) => this.calledHttpService.errorHandlerMain(error)));
  }

  public getInvoiceDetails(ip: string, numberInvoice: string): void {
    this.invoiceService
      .apiInvoicesDetailsGet$Json({ ip, numberInvoice })
      .pipe(
        tap((res) => {
          this.invoiceDetails.next(res);
          this.visibleDetails.next(true);
        }),
        catchError((error) => this.calledHttpService.errorHandler(error))
      )
      .subscribe();
  }
  public getInvoiceDetailsMain(ip: string, numberInvoice: string, money: string): void {
    this.invoiceService
      .apiInvoicesMainDetailsGet$Json({ ip, numberInvoice })
      .pipe(
        tap((res) => {
          this.visibleDetailsMain.next(true);
          this.invoiceDetails.next(res);
        }),
        catchError((error) => {
          return this.calledHttpService.errorHandlerMain(error);
        })
      )
      .subscribe();
  }

  public invoiceCreditNoteSelect(selectInvoice: InvoiceDto): void {
    this.dialogCreditNote.next(true);
    this.invoiceCreditNote.next(selectInvoice);
  }

  public clearInvoices(): void {
    this.invoicesStore.next([]);
    this.invoicesMain.next([]);
  }
  public clearDetails(): void {
    this.invoiceDetails.next(InvoiceDetailsObj);
  }
}
