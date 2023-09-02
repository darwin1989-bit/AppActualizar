import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, Subject, throwError } from "rxjs";
import { ToastMessagesService } from "./toast-messages.service";

@Injectable({
  providedIn: "root",
})
export class CalledHttpService {
  isLoading$ = new BehaviorSubject<boolean>(true);

  constructor(private toastMesagge: ToastMessagesService, private router: Router) {}

  errorHandler(error: HttpErrorResponse) {
    if (error.status === 404 && error.url?.includes("/api/Client")) {
      this.toastMesagge.showToast("cf", "warn", "Búsqueda no encontrada", `${error.error.message}`, 8000);
      return throwError(() => error);
    } else if (error.status === 404) {
      this.toastMesagge.showToast("tc", "warn", "Búsqueda no encontrada", error.error.message, 4000);
      return throwError(() => error);
    }
    this.toastMesagge.showToast("tc", "error", "Hubo un error", error.error.message ? error.error.message : "No se pudo obtener los datos, intente nuevamente", 4000);
    return throwError(() => error);
  }

  showLoad(): void {
    this.isLoading$.next(true);
  }
  hideLoad(): void {
    this.isLoading$.next(false);
  }
}
