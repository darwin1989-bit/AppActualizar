import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { MenuChangeEvent } from "./api/menuchangeevent";
import { JwtHelperService } from "@auth0/angular-jwt";

export interface userData {
  Name: string;
  UserName: string;
  UserRol: string;
}

@Injectable({
  providedIn: "root",
})
export class MenuService {
  private helper = new JwtHelperService();
  private menuSource = new Subject<MenuChangeEvent>();
  private resetSource = new Subject();

  menuSource$ = this.menuSource.asObservable();
  resetSource$ = this.resetSource.asObservable();

  private _userData = new BehaviorSubject<userData>({
    Name: "",
    UserName: "",
    UserRol: "",
  });

  public get userData() {
    return this._userData;
  }
  public set userData(value) {
    this._userData = value;
  }

  onMenuStateChange(event: MenuChangeEvent) {
    this.menuSource.next(event);
  }

  reset() {
    this.resetSource.next(true);
  }
  public checkToken(): boolean {
    const token = sessionStorage.getItem("token");
    const isExpired = this.helper.isTokenExpired(token);
    return isExpired;
  }
}
