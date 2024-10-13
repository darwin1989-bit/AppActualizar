import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject, catchError, mergeMap, tap } from "rxjs";
import { IpPosMobileDto, ResponseMessage, UpdateUserDto, UserMainDto, UsersDto } from "src/app/api/api_actualizar/models";
import { UserService } from "src/app/api/api_actualizar/services";
import { CalledHttpService } from "src/app/shared/services/called-http.service";
import { ToastMessagesService } from "src/app/shared/services/toast-messages.service";

@Injectable({
  providedIn: "root",
})
export class UsersService {
  private users = new BehaviorSubject<UsersDto[]>([]);
  public users$ = this.users.asObservable();

  private usersMain = new BehaviorSubject<UsersDto[]>([]);
  public usersMain$ = this.usersMain.asObservable();

  private editUser = new BehaviorSubject<UserMainDto>({});
  public editUser$ = this.editUser.asObservable();

  private resetTable = new BehaviorSubject<boolean>(false);
  public resetTable$ = this.resetTable.asObservable();

  private editUserDialog = new BehaviorSubject<boolean>(false);
  public editUserDialog$ = this.editUserDialog.asObservable();

  private ipPosMobile = new BehaviorSubject<IpPosMobileDto[]>([]);
  public ipPosMobile$ = this.ipPosMobile.asObservable();

  private loadUser = new BehaviorSubject<boolean>(false);
  public loadUser$ = this.loadUser.asObservable();

  constructor(private userService: UserService, private calledHttpService: CalledHttpService, private toastMesagge: ToastMessagesService) {}

  public getUsername(ip: string, username: string): void {
    this.userService
      .apiUserUsernameGet$Json({ ip, username })
      .pipe(
        tap((res) => this.users.next(res.data!)),
        catchError((error) => this.calledHttpService.errorHandler(error))
      )
      .subscribe();
  }

  public getUsernameMain(company: string, username: string): void {
    this.userService
      .apiUserMainUsernameGet$Json({ company, username })
      .pipe(
        tap((res) => this.usersMain.next(res.data!)),
        catchError((error) => this.calledHttpService.errorHandlerMain(error))
      )
      .subscribe();
  }
  public getIdentificationNumber(ip: string, identificationNumber: string): void {
    this.userService
      .apiUserIdentificationNumberGet$Json({ ip, identificationNumber })
      .pipe(
        tap((res) => this.users.next(res.data!)),
        catchError((error) => this.calledHttpService.errorHandler(error))
      )
      .subscribe();
  }

  public getIdentificationNumberMain(company: string, identificationNumber: string): void {
    this.userService
      .apiUserMainIdentificationNumberGet$Json({ company, identificationNumber })
      .pipe(
        tap((res) => this.usersMain.next(res.data!)),
        catchError((error) => this.calledHttpService.errorHandlerMain(error))
      )
      .subscribe();
  }

  public getAllUsers(ip: string): void {
    this.userService
      .apiUserAllUsersGet$Json({ ip })
      .pipe(
        tap((res) => this.users.next(res.data!)),
        catchError((error) => this.calledHttpService.errorHandler(error))
      )
      .subscribe();
  }

  public getIpPosMobile(ip: string): void {
    this.userService.apiUserIpPosmobileGet$Json({ ip }).subscribe((res) => this.ipPosMobile.next(res.data!));
  }

  public updateUser(company: string, ip: string, updateUser: UpdateUserDto) {
    this.userService
      .apiUserPut$Json({ ip, body: updateUser })
      .pipe(
        tap((res) => {
          this.toastMesagge.showToast("tc", "success", "Éxito", res.message!);
          this.closeDialog();
          this.loadUser.next(true);
        }),

        mergeMap((_) => this.updateUserMain(company, updateUser).pipe(tap((res) => this.toastMesagge.showToast("tc", "success", "Éxito Matriz", res.message!)))),
        catchError((error) => this.calledHttpService.errorHandler(error))
      )
      .subscribe();
  }
  private updateUserMain(company: string, updateUser: UpdateUserDto): Observable<ResponseMessage> {
    return this.userService.apiUserMainPut$Json({ company, body: updateUser }).pipe(catchError((error) => this.calledHttpService.errorHandlerMain(error)));
  }

  public openDialog(user: UsersDto): void {
    this.editUser.next(user);
    this.editUserDialog.next(true);
  }

  public closeDialog(): void {
    this.editUserDialog.next(false);
  }

  public clearUsers(): void {
    this.users.next([]);
    this.usersMain.next([]);
    this.resetTable.next(true);
    this.editUser.next({});
  }
}
