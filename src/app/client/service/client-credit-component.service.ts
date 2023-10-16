import { Injectable } from "@angular/core";
import { Subject, catchError, tap } from "rxjs";
import { ClientCreditDto } from "src/app/api/api_actualizar/models";
import { ServiceCreditService } from "src/app/api/api_actualizar/services";
import { CalledHttpService } from "src/app/shared/services/called-http.service";

@Injectable({
  providedIn: "root",
})
export class ClientCreditComponentService {
  constructor(private clientCreditService: ServiceCreditService, private calledHttpService: CalledHttpService) {}

  private clientCredit = new Subject<ClientCreditDto[][] | null | undefined>();
  public clientCredit$ = this.clientCredit.asObservable();

  public getClientCredit(ip: string, numberId: string, codSap: string): void {
    this.clientCreditService
      .apiServiceCreditGet$Json({ ip, numberId, codSap })
      .pipe(
        tap((res) => this.clientCredit.next([res.data!])),
        catchError((error) => {
          return this.calledHttpService.errorHandler(error);
        })
      )
      .subscribe();
  }
  public clearCreditClient(): void {
    this.clientCredit.next(undefined);
  }
}
