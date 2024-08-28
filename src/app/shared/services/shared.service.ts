import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { IClientNotFound } from "src/app/client/models/clients-interface";

@Injectable({
  providedIn: "root",
})
export class SharedService {
  private dialogCreateClient = new Subject<boolean>();
  public dialogCreateClient$ = this.dialogCreateClient.asObservable();

  private clientNotFound = new Subject<IClientNotFound>();
  public clientNotFound$ = this.clientNotFound.asObservable();

  private clearInvoiceForm = new Subject<void>();
  public clearInvoiceForm$ = this.clearInvoiceForm.asObservable();

  constructor() {}

  public setClientNotFound(client: IClientNotFound): void {
    this.clientNotFound.next(client);
  }

  public showDialog(): void {
    this.dialogCreateClient.next(true);
  }
  public hideDialog(): void {
    this.dialogCreateClient.next(false);
  }

  public setClearInvoiceFrom(): void {
    this.clearInvoiceForm.next();
  }
}
