import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Message } from "primeng/api";
import { Observable, catchError, tap } from "rxjs";
import { MLogin } from "src/app/api/api_login/models";
import { LoginService } from "src/app/api/api_login/services";
import { CalledHttpService } from "src/app/shared/services/called-http.service";
import { ToastMessagesService } from "src/app/shared/services/toast-messages.service";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private msgs: Message[] = [];
  constructor(private router: Router, private http: HttpClient, private calledHttpService: CalledHttpService, private loginService: LoginService, private toastMesagge: ToastMessagesService) {}

  public logIn(credentials: MLogin): Observable<string> {
    return this.loginService.apiLoginAuthenticatePost$Json({ body: credentials }).pipe(
      tap((token) => this.handleSuccessfullLogin(token)),
      catchError((error) => {
        if (error.status === 400) {
          return this.calledHttpService.errorHandler(error.error.message);
        }
        return this.calledHttpService.errorHandler(error.message);
      })
    );
  }

  public logOut(): void {
    sessionStorage.clear();
    this.router.navigate(["/login"]);
  }

  private handleSuccessfullLogin(token: any): void {
    sessionStorage.setItem("token", token.token);
    this.redirectToHome();
  }

  private redirectToHome(): void {
    this.router.navigate(["/actualizar/home"]);
  }
}
