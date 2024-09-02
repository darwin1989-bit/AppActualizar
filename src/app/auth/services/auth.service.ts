import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Message } from "primeng/api";
import { Observable, catchError, tap, throwError } from "rxjs";
import { MLogin, ResponseUser, UserLogin } from "src/app/api/api_actualizar/models";
import { LoginService } from "src/app/api/api_actualizar/services";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private msgs: Message[] = [];
  constructor(private router: Router, private loginService: LoginService) {}

  public logIn(credentials: MLogin): Observable<ResponseUser> {
    return this.loginService.apiLoginAuthenticatePost$Json({ body: credentials }).pipe(
      tap((response) => this.handleSuccessfullLogin(response.data!)),
      catchError((error) => {
        if (error.status === 400) {
          return throwError(() => error.error.message);
        }
        return throwError(() => error.message);
      })
    );
  }

  public logOut(): void {
    sessionStorage.clear();
    this.router.navigate(["/app/login"]);
  }

  private handleSuccessfullLogin(user: UserLogin): void {
    sessionStorage.setItem("token", user.token!);
    sessionStorage.setItem("theme", user.theme!);
    sessionStorage.setItem("colorScheme", user.colorScheme!);
    this.redirectToHome();
  }

  private redirectToHome(): void {
    this.router.navigate(["/app/home"]);
  }
}
