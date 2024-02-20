import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject, catchError, tap } from "rxjs";
import { AuthorizingUserDto } from "src/app/api/api_actualizar/models";
import { UserService } from "src/app/api/api_actualizar/services";
import { CalledHttpService } from "src/app/shared/services/called-http.service";
import { ToastMessagesService } from "src/app/shared/services/toast-messages.service";

@Injectable({
  providedIn: "root",
})
export class UsersAuthorizingService {
  private usersAuthorizing = new Subject<AuthorizingUserDto[]>();
  public usersAuthorizing$ = this.usersAuthorizing.asObservable();

  constructor(private userService: UserService, private calledHttpService: CalledHttpService, private toastMesagge: ToastMessagesService) {}

  public getAuthorizingUser(ip: string): void {
    this.userService
      .apiUserAuthorizingUserGet$Json({ ip })
      .pipe(
        tap((res) => this.usersAuthorizing.next(res.data!)),
        catchError((error) => this.calledHttpService.errorHandler(error))
      )
      .subscribe();
  }

  public updateAuthorizingUser(ip: string, body: AuthorizingUserDto): void {
    this.userService
      .apiUserUpdateDayPut$Json({ ip, body })
      .pipe(
        tap((res) => this.toastMesagge.showToast("tc", "success", "Éxito", res.message!)),
        catchError((error) => this.calledHttpService.errorHandler(error))
      )
      .subscribe();
  }
  public clearUserAuthorizing(): void {
    this.usersAuthorizing.next([]);
  }
}
