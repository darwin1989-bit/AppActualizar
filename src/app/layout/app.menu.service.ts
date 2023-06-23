import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { MenuChangeEvent } from "./api/menuchangeevent";
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: "root",
})
export class MenuService {
  private helper = new JwtHelperService();
  private menuSource = new Subject<MenuChangeEvent>();
  private resetSource = new Subject();

  menuSource$ = this.menuSource.asObservable();
  resetSource$ = this.resetSource.asObservable();

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
