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
  private invoicesStore = new BehaviorSubject<InvoiceDto[]>([]);
  public invoicesStore$ = this.invoicesStore.asObservable();

  private invoicesMain = new BehaviorSubject<InvoiceDto[]>([]);
  public invoicesMain$ = this.invoicesMain.asObservable();

  private dialogCreditNote = new BehaviorSubject<boolean>(false);
  public dialogCreditNote$ = this.dialogCreditNote.asObservable();

  private hideButtonCreditN = new BehaviorSubject<boolean>(false);
  public hideButtonCreditN$ = this.hideButtonCreditN.asObservable();

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
    this.hideButtonCreditN.next(false);
  }

  public getInvoiceIdentification(ip: string, numberInvoice: string): void {
    this.invoiceIdentification(ip, numberInvoice).subscribe((res) => this.invoicesStore.next(res.data!));
    this.invoiceIdentificationMain(ip, numberInvoice).subscribe((res) => this.invoicesMain.next(res.data!));
    this.hideButtonCreditN.next(false);
  }

  public getAllInvoices(ip: string, numberInvoice: string): void {
    this.allInvoices(ip).subscribe((res) => this.invoicesStore.next(res.data!));
    this.allInvoicesMain(ip, numberInvoice).subscribe((res) => this.invoicesMain.next(res.data!));
    this.hideButtonCreditN.next(true);
  }

  public getCreditNote(ip: string, numberInvoice: string): void {
    this.creditNote(ip, numberInvoice).subscribe((res) => this.invoicesStore.next(res.data!));
    this.creditNoteMain(ip, numberInvoice).subscribe((res) => this.invoicesMain.next(res.data!));
    this.hideButtonCreditN.next(false);
  }

  private invoiceNumber(ip: string, numberInvoice: string): Observable<ResponseInvoiceDto> {
    return this.invoiceService.apiInvoicesNumberGet$Json({ ip, numberInvoice }).pipe(catchError((error) => this.calledHttpService.errorHandler(error)));
  }

  private invoiceNumberMain(ip: string, numberInvoice: string): Observable<ResponseInvoiceDto> {
    return this.invoiceService.apiInvoicesMainNumberGet$Json({ ip, numberInvoice }).pipe(catchError((error) => this.calledHttpService.errorHandlerMain(error)));
  }

  private invoiceIdentification(ip: string, identification: string): Observable<ResponseInvoiceDto> {
    return this.invoiceService.apiInvoicesIdentificationGet$Json({ ip, identification }).pipe(catchError((error) => this.calledHttpService.errorHandler(error)));
  }

  private invoiceIdentificationMain(ip: string, identification: string): Observable<ResponseInvoiceDto> {
    return this.invoiceService.apiInvoicesMainIdentificationGet$Json({ ip, identification }).pipe(catchError((error) => this.calledHttpService.errorHandlerMain(error)));
  }

  private allInvoices(ip: string): Observable<ResponseInvoiceDto> {
    return this.invoiceService.apiInvoicesAllInvoicesGet$Json({ ip }).pipe(catchError((error) => this.calledHttpService.errorHandler(error)));
  }

  private allInvoicesMain(ip: string, office: string): Observable<ResponseInvoiceDto> {
    return this.invoiceService.apiInvoicesMainAllInvoicesGet$Json({ ip, office }).pipe(catchError((error) => this.calledHttpService.errorHandlerMain(error)));
  }

  private creditNote(ip: string, creditNoteNumber: string) {
    return this.invoiceService.apiInvoicesCreditNotesGet$Json({ ip, creditNoteNumber }).pipe(catchError((error) => this.calledHttpService.errorHandler(error)));
  }

  private creditNoteMain(ip: string, creditNoteNumber: string) {
    return this.invoiceService.apiInvoicesMainCreditNotesGet$Json({ ip, creditNoteNumber }).pipe(catchError((error) => this.calledHttpService.errorHandler(error)));
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
  public clossinvoiceCreditNoteSelect(): void {
    this.dialogCreditNote.next(false);
  }

  public clearInvoices(): void {
    this.invoicesStore.next([]);
    this.invoicesMain.next([]);
  }
  public clearDetails(): void {
    this.invoiceDetails.next(InvoiceDetailsObj);
  }
}
