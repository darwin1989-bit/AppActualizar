import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, NEVER } from "rxjs";
import { ToastMessagesService } from "./toast-messages.service";

@Injectable({
  providedIn: "root",
})
export class CalledHttpService {
  isLoading$ = new BehaviorSubject<boolean>(true);

  constructor(private toastMesagge: ToastMessagesService) {}

  errorHandler(error: HttpErrorResponse) {
    if (error.status === 404 && error.url?.includes("/api/Client")) {
      this.toastMesagge.showToast("cf", "warn", "Advertencia", `${error.error.message}`);
      return NEVER;
    } else if (error.status === 404) {
      this.toastMesagge.showToast("tc", "warn", "Advertencia", error.error.message);
      return NEVER;
    }

    this.toastMesagge.showToast("tc", "error", "Error", error.error.message ? error.error.message : "No se pudo obtener los datos, intente nuevamente");
    return NEVER;
  }
  errorHandlerMain(error: HttpErrorResponse) {
    if (error.status === 404) {
      this.toastMesagge.showToast("tc", "warn", "Advertencia matriz", error.error.message);
      return NEVER;
    }
    this.toastMesagge.showToast("tc", "error", "Error matriz", error.error.message ? error.error.message : "No se pudo obtener los datos, intente nuevamente");
    return NEVER;
  }

  showLoad(): void {
    this.isLoading$.next(true);
  }
  hideLoad(): void {
    this.isLoading$.next(false);
  }
}
