import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, catchError, tap } from "rxjs";
import { CalledHttpService } from "src/app/shared/services/called-http.service";
import { ClientObj } from "../models/clients-object";
import { ToastMessagesService } from "src/app/shared/services/toast-messages.service";
import { ClientCreateParams, ClientParamsUpdate, GetCitiesDto, GetClientDto, GetProvincesDto, GetRetentionDto, RetentionParams } from "src/app/api/api_actualizar/models";
import { ClientService } from "src/app/api/api_actualizar/services";
import { SharedService } from "src/app/shared/services/shared.service";

@Injectable({
  providedIn: "root",
})
export class ClientComponentService {
  private clientFound = new BehaviorSubject<GetClientDto[]>([ClientObj]);
  public clientFound$ = this.clientFound.asObservable();

  private retention = new BehaviorSubject<boolean>(false);
  public retention$ = this.retention.asObservable();

  private specialTaxpayer = new BehaviorSubject<string>("");
  public specialTaxpayer$ = this.specialTaxpayer.asObservable();

  constructor(private toastMesagge: ToastMessagesService, private clientService: ClientService, private calledHttpService: CalledHttpService, private sharedService: SharedService) {}

  public getClient(ip: string, numberId: string, typeIdClient: string): Observable<GetClientDto[]> {
    return this.clientService.apiClientGet$Json({ ip: ip, numberId: numberId, typeIdClient: typeIdClient }).pipe(
      tap((res: GetClientDto[]) => {
        this.specialTaxpayer.next(res[0].contribuyente_Especial == "0" ? "NO" : "SI");
        if (res.length > 0) this.toastMesagge.showToast("tc", "success", "Éxito", `Información del cliente ${res[0].nombre_Razon?.toUpperCase()}.`);
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
        this.toastMesagge.showToast("tc", "success", "Éxito", "Se ha actualizado el cliente corretamente.");
      }),
      catchError((error) => {
        return this.calledHttpService.errorHandler(error);
      })
    );
  }
  public createClient(ip: string, numberId: string, typeIdClient: string, clientParams: ClientCreateParams): Observable<GetClientDto[]> {
    return this.clientService.apiClientPost$Json({ ip, numberId, typeIdClient, body: clientParams }).pipe(
      tap((res) => {
        this.clientFound.next(res);
        this.specialTaxpayer.next(res[0].contribuyente_Especial == "0" ? "NO" : "SI");
        this.toastMesagge.showToast("tc", "success", "Éxito", "Se ha creado el cliente correctamente.");
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

  public getRetention(ip: string, numberId: string, typeIdClient: string): Observable<GetRetentionDto[]> {
    return this.clientService.apiClientRetentionGet$Json({ ip, numberId, typeIdClient }).pipe(
      catchError((error) => {
        return this.calledHttpService.errorHandler(error);
      })
    );
  }
  public updateRetention(ip: string, retentionParams: RetentionParams): Observable<void> {
    return this.clientService.apiClientRetentionPut({ ip, body: retentionParams }).pipe(
      tap(() => {
        this.toastMesagge.showToast("tc", "success", "Éxito", "Se ha actualizado los datos de la retención.");
        this.hideRetention();
      }),
      catchError((error) => {
        return this.calledHttpService.errorHandler(error);
      })
    );
  }

  public setClientFound(client: GetClientDto[]): void {
    this.clientFound.next(client);
  }
  public clearClientFound(): void {
    this.clientFound.next([ClientObj]);
    this.specialTaxpayer.next("");
  }

  public showRetention(): void {
    this.retention.next(true);
  }
  public hideRetention(): void {
    this.retention.next(false);
  }
  public setspecialTaxpayer(specialTaxpayer: string): void {
    this.specialTaxpayer.next(specialTaxpayer);
  }
}
