import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Message } from "primeng/api";
import { Observable, catchError, tap } from "rxjs";
import { MLogin, User } from "src/app/api/api_login/models";
import { LoginService } from "src/app/api/api_login/services";
import { LayoutService } from "src/app/layout/service/app.layout.service";
import { CalledHttpService } from "src/app/shared/services/called-http.service";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private msgs: Message[] = [];
  constructor(private router: Router, private layoutService: LayoutService, private calledHttpService: CalledHttpService, private loginService: LoginService) {}

  public logIn(credentials: MLogin): Observable<User> {
    return this.loginService.apiLoginAuthenticatePost$Json({ body: credentials }).pipe(
      tap((user: User) => this.handleSuccessfullLogin(user)),
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

  private handleSuccessfullLogin(user: User): void {
    this.layoutService.changeTheme(user.theme!, user.colorScheme!);
    sessionStorage.setItem("token", user.token!);
    sessionStorage.setItem("theme", user.theme!);
    sessionStorage.setItem("colorScheme", user.colorScheme!);
    this.redirectToHome();
  }

  private redirectToHome(): void {
    this.router.navigate(["/actualizar/home"]);
  }
}
