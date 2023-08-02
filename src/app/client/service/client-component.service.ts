import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject, catchError, tap } from "rxjs";
import { CalledHttpService } from "src/app/shared/services/called-http.service";
import { ClientObj } from "../models/clients-object";
import { ToastMessagesService } from "src/app/shared/services/toast-messages.service";
import { ClientCreateParams, ClientParamsUpdate, GetCitiesDto, GetClientDto, GetProvincesDto } from "src/app/api/api_actualizar/models";
import { ClientService } from "src/app/api/api_actualizar/services";
import { SharedService } from "src/app/shared/services/shared.service";

@Injectable()
export class ClientComponentService {
  private clientFound = new BehaviorSubject<GetClientDto[]>([ClientObj]);
  public clientFound$ = this.clientFound.asObservable();

  constructor(private toastMesagge: ToastMessagesService, private clientService: ClientService, private calledHttpService: CalledHttpService, private sharedService: SharedService) {}

  public getClient(ip: string, numberId: string, typeIdClient: string): Observable<GetClientDto[]> {
    return this.clientService.apiClientGet$Json({ ip: ip, numberId: numberId, typeIdClient: typeIdClient }).pipe(
      tap((res: GetClientDto[]) => {
        if (res.length > 0) this.toastMesagge.showToast("tc", "success", "Consulta realizada", `Información del cliente ${res[0].nombre_Razon?.toUpperCase()}.`, 4000);
      }),
      catchError((error) => {
        return this.calledHttpService.errorHandler(error);
      })
    );
  }
  public updateClient(company: string, ip: string, numberId: string, typeIdClient: string, clientParamsUpdate: ClientParamsUpdate): Observable<GetClientDto[]> {
    return this.clientService.apiClientPut$Json({ company: company, ip: ip, numberId: numberId, typeIdClient: typeIdClient, body: clientParamsUpdate }).pipe(
      tap((res) => {
        this.clientFound.next(res);
        this.toastMesagge.showToast("tc", "success", "Actualización realizada", "Se ha actualizado el cliente corretamente.", 4000);
      }),
      catchError((error) => {
        return this.calledHttpService.errorHandler(error);
      })
    );
  }
  public createClient(ip: string, numberId: string, typeIdClient: string, clientParams: ClientCreateParams): Observable<void> {
    return this.clientService.apiClientPost({ ip, numberId, typeIdClient, body: clientParams }).pipe(
      tap(() => {
        this.toastMesagge.showToast("tc", "success", "Creación realizada", "Se ha creado el cliente correctamente.", 4000);
        this.sharedService.hideDialog();
      }),
      catchError((error) => {
        return this.calledHttpService.errorHandler(error);
      })
    );
  }
  public getProvinces(ip: string): Observable<GetProvincesDto[]> {
    return this.clientService.apiClientProvincesGet$Json({ ip: ip }).pipe(
      catchError((error) => {
        return this.calledHttpService.errorHandler(error);
      })
    );
  }

  public getCities(ip: string, province: string): Observable<GetCitiesDto[]> {
    return this.clientService.apiClientCitiesGet$Json({ ip: ip, province: province }).pipe(
      catchError((error) => {
        return this.calledHttpService.errorHandler(error);
      })
    );
  }

  public CreateClient(): void {}

  public setClientFound(client: GetClientDto[]): void {
    this.clientFound.next(client);
  }
  public clearClientFound(): void {
    this.clientFound.next([ClientObj]);
  }
}
