import { Injectable } from "@angular/core";
import { BehaviorSubject, catchError, tap } from "rxjs";
import { IpClientDto } from "src/app/api/api_actualizar/models";
import { StoreService } from "src/app/api/api_actualizar/services";
import { CalledHttpService } from "src/app/shared/services/called-http.service";
import { ToastMessagesService } from "src/app/shared/services/toast-messages.service";

@Injectable({
  providedIn: "root",
})
export class IpBoxesService {
  private ipClient = new BehaviorSubject<IpClientDto[]>([]);
  public ipClient$ = this.ipClient.asObservable();

  private resetTable = new BehaviorSubject<boolean>(false);
  public resetTable$ = this.resetTable.asObservable();

  private dialogNewIp = new BehaviorSubject<boolean>(false);
  public dialogNewIp$ = this.dialogNewIp.asObservable();

  private loadNewIp = new BehaviorSubject<boolean>(false);
  public loadNewIp$ = this.loadNewIp.asObservable();

  constructor(private storeService: StoreService, private calledHttpService: CalledHttpService, private toastMesagge: ToastMessagesService) {}

  public getIpClient(ip: string): void {
    this.storeService
      .apiStoreIpClientGet$Json({ ip })
      .pipe(
        tap((res) => this.ipClient.next(res.data!)),
        catchError((error) => this.calledHttpService.errorHandler(error))
      )
      .subscribe();
  }

  public postInsertIpClient(ip: string, ipClient: IpClientDto): void {
    this.storeService
      .apiStoreInsertIpClientPost$Json({ ip, body: ipClient })
      .pipe(
        tap((res) => {
          this.toastMesagge.showToast("tc", "success", "Exito", res.message!);
          this.dialogNewIp.next(false);
          this.loadNewIp.next(true);
        }),
        catchError((error) => this.calledHttpService.errorHandler(error))
      )
      .subscribe();
  }

  public clearIpBoxes(): void {
    this.ipClient.next([]);
    this.resetTable.next(true);
  }

  public openDialogNewIp(value: boolean): void {
    this.dialogNewIp.next(value);
  }
}
