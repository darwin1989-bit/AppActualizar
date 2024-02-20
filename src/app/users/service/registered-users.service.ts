import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class RegisteredUsersService {
  private OfficesMatriz = new BehaviorSubject<boolean>(false);
  public OfficesMatriz$ = this.OfficesMatriz.asObservable();

  constructor() {}

  public pushOfficesMatriz(value: boolean): void {
    this.OfficesMatriz.next(value);
  }
}
