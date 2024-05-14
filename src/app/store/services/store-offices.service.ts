import { Injectable } from "@angular/core";
import { BehaviorSubject, catchError, tap } from "rxjs";
import { StoreOfficesDto } from "src/app/api/api_actualizar/models/store-offices-dto";
import { StoreService } from "src/app/api/api_actualizar/services";
import { CalledHttpService } from "src/app/shared/services/called-http.service";
import { ToastMessagesService } from "src/app/shared/services/toast-messages.service";

@Injectable({
  providedIn: "root",
})
export class StoreOfficesService {
  private storeOffices = new BehaviorSubject<StoreOfficesDto[]>([]);
  public storeOffices$ = this.storeOffices.asObservable();

  private resetTable = new BehaviorSubject<boolean>(false);
  public resetTable$ = this.resetTable.asObservable();

  constructor(private storeService: StoreService, private calledHttpService: CalledHttpService, private toastMesagge: ToastMessagesService) {}

  public getStoreOffices(company: string): void {
    this.storeService
      .apiStoreStoreOfficesGet$Json({ company })
      .pipe(
        tap((res) => {
          this.storeOffices.next(res.data!);
        }),
        catchError((error) => this.calledHttpService.errorHandler(error))
      )
      .subscribe();
  }
  public clearStoreOffices(): void {
    this.storeOffices.next([]);
    this.resetTable.next(true);
  }
}
