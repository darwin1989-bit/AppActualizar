import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, catchError, tap } from "rxjs";
import { ClientDto } from "src/app/api/api_actualizar/models";
import { ClientsService } from "src/app/api/api_actualizar/services";
import { CalledHttpService } from "src/app/shared/services/called-http.service";
import { ClientObj } from "../models/clients-object";

@Injectable()
export class ClientComponentService {
  private clientFound = new BehaviorSubject<ClientDto>(ClientObj);
  public clientFound$ = this.clientFound.asObservable();

  constructor(private clienteService: ClientsService, private calledHttpService: CalledHttpService) {}

  public getClient(ip: string, numberId: string): Observable<ClientDto> {
    return this.clienteService.apiClientsClientGet$Json({ ip: ip, numberId: numberId }).pipe(
      catchError((error) => {
        return this.calledHttpService.errorHandler(error);
      })
    );
  }

  public setClientFound(client: ClientDto): void {
    this.clientFound.next(client);
  }
  public clearClientFound(): void {
    this.clientFound.next(ClientObj);
  }
}
