import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject, catchError, tap } from "rxjs";
import { RegisteredUserDto } from "src/app/api/api_actualizar/models";
import { UserService } from "src/app/api/api_actualizar/services";
import { CalledHttpService } from "src/app/shared/services/called-http.service";
import { ToastMessagesService } from "src/app/shared/services/toast-messages.service";

@Injectable({
  providedIn: "root",
})
export class RegisteredUsersService {
  private OfficesMatriz = new BehaviorSubject<boolean>(false);
  public OfficesMatriz$ = this.OfficesMatriz.asObservable();

  private registeredUsers = new BehaviorSubject<RegisteredUserDto[]>([]);
  public registeredUsers$ = this.registeredUsers.asObservable();

  private loadUserRegistered = new BehaviorSubject<boolean>(false);
  public loadUserRegistered$ = this.loadUserRegistered.asObservable();

  private resetTable = new BehaviorSubject<boolean>(false);
  public resetTable$ = this.resetTable.asObservable();

  constructor(private userService: UserService, private calledHttpService: CalledHttpService, private toastMesagge: ToastMessagesService) {}

  public pushOfficesMatriz(value: boolean): void {
    this.OfficesMatriz.next(value);
  }

  public getRegisteredUser(ip: string): void {
    this.userService
      .apiUserRegisteredUserGet$Json({ ip })
      .pipe(
        tap((res) => this.registeredUsers.next(res.data!)),
        catchError((error) => {
          this.clearRegisteredUser();
          return this.calledHttpService.errorHandler(error);
        })
      )
      .subscribe();
  }

  public getRegisteredUserMain(company: string): void {
    this.userService
      .apiUserMainRegisteredUserGet$Json({ company })
      .pipe(
        tap((res) => this.registeredUsers.next(res.data!)),
        catchError((error) => {
          this.clearRegisteredUser();
          return this.calledHttpService.errorHandlerMain(error);
        })
      )
      .subscribe();
  }

  public putRegisteredUser(ip: string, body: RegisteredUserDto): void {
    body.estado = "LOGOFF";
    this.userService
      .apiUserUpdateRegisteredUserPut$Json({ ip, body })
      .pipe(
        tap((res) => {
          this.loadUserRegistered.next(true);
          this.toastMesagge.showToast("tc", "success", "Exito", res.message!);
        }),
        catchError((error) => this.calledHttpService.errorHandler(error))
      )
      .subscribe();
  }

  public putRegisteredUserMain(company: string, body: RegisteredUserDto): void {
    body.estado = "LOGOFF";
    this.userService
      .apiUserMainUpdateRegisteredUserPut$Json({ company, body })
      .pipe(
        tap((res) => {
          this.loadUserRegistered.next(true);
          this.toastMesagge.showToast("tc", "success", "Exito", res.message!);
        }),
        catchError((error) => this.calledHttpService.errorHandler(error))
      )
      .subscribe();
  }

  public clearRegisteredUser(): void {
    this.registeredUsers.next([]);
    this.resetTable.next(true);
  }
}
