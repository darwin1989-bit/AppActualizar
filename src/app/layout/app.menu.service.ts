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

  public indexMenu = new BehaviorSubject(0);
  private indexMenuItem = new BehaviorSubject(0);

  menuSource$ = this.menuSource.asObservable();
  resetSource$ = this.resetSource.asObservable();
  indexMenu$ = this.indexMenu.asObservable();
  indexMenuItem$ = this.indexMenuItem.asObservable();

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

    const eventSplit = event.key.split("-");
    console.log("🚀 ~ file: app.menu.service.ts:43 ~ MenuService ~ onMenuStateChange ~ eventSplit:", eventSplit[0]);

    this.indexMenu.next(Number(eventSplit[0]));
    this.indexMenuItem.next(Number(eventSplit[1]));
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
