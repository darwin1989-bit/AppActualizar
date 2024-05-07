import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject, catchError, tap } from "rxjs";
import { OpenBoxDto } from "src/app/api/api_actualizar/models";
import { StoreService } from "src/app/api/api_actualizar/services";
import { CalledHttpService } from "src/app/shared/services/called-http.service";
import { ToastMessagesService } from "src/app/shared/services/toast-messages.service";

@Injectable({
  providedIn: "root",
})
export class OpenBoxesService {
  private officesOpenBox = new BehaviorSubject<boolean>(true);
  public officesOpenBox$ = this.officesOpenBox.asObservable();

  private openBoxes = new BehaviorSubject<OpenBoxDto[]>([]);
  public openBoxes$ = this.openBoxes.asObservable();

  private resetTable = new BehaviorSubject<boolean>(false);
  public resetTable$ = this.resetTable.asObservable();

  constructor(private storeService: StoreService, private calledHttpService: CalledHttpService, private toastMesagge: ToastMessagesService) {}

  public isOpenBox(value: boolean): void {
    this.officesOpenBox.next(value);
  }

  public getOpenBoxes(company: string): void {
    this.storeService
      .apiStoreOpenBoxesGet$Json({ company })
      .pipe(
        tap((res) => {
          this.openBoxes.next(res.data! == null ? [] : res.data!);

          if (res.dataError != null) {
            res.dataError.forEach((item) => {
              this.toastMesagge.showToast("tc", "error", "Error", `No se tiene conexión con la tienda ${item.tienda}.`);
            });
          }
        }),
        catchError((error) => this.calledHttpService.errorHandler(error))
      )
      .subscribe();
  }
  public clearOpenBoxes(): void {
    this.openBoxes.next([]);
    this.resetTable.next(true);
  }
}
