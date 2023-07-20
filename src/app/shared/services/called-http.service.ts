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
    if (error.status === 404) {
      this.toastMesagge.showToast("tc", "warn", "Búsqueda no encontrada", error.error.message, 4000);
      return throwError(() => error);
    }

    this.toastMesagge.showToast("tc", "error", "Error", error.error.message ? error.error.message : "Se tuvo un error intente nuevamente", 4000);
    return throwError(() => error);
  }

  showLoad(): void {
    this.isLoading$.next(true);
  }
  hideLoad(): void {
    this.isLoading$.next(false);
  }
}
