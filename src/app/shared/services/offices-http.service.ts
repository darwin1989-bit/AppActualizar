import { Injectable } from "@angular/core";
import { CalledHttpService } from "./called-http.service";
import { BehaviorSubject, Observable, Subject, catchError } from "rxjs";
import { OfficesService } from "src/app/api/api_actualizar/services";
import { OfficesDto } from "src/app/api/api_actualizar/models";
import { DataCompany } from "../models/objects";
import { ICompany } from "../models/offices.interface";
import { deleteList } from "../models/types";

@Injectable({
  providedIn: "root",
})
export class OfficesHttpService {
  private company = new BehaviorSubject<ICompany>(DataCompany);
  private offices = new BehaviorSubject<OfficesDto | null>(null);
  private validFindOffice = new Subject<boolean>();

  private moneyLocale = new Subject<{ money: string; locale: string }>();
  public moneyLocale$ = this.moneyLocale.asObservable();

  private deleteList = new Subject<string>();
  public deleteList$ = this.deleteList.asObservable();

  public company$ = this.company.asObservable();
  public offices$ = this.offices.asObservable();
  public validFindOffice$ = this.validFindOffice.asObservable();

  constructor(private calledHttpService: CalledHttpService, private officesService: OfficesService) {}

  public getOffices(company: string): Observable<OfficesDto[]> {
    return this.officesService.apiOfficesGet$Json({ company: company }).pipe(
      catchError((error) => {
        return this.calledHttpService.errorHandler(error);
      })
    );
  }
  public setDeleteList(company: deleteList): void {
    this.deleteList.next(company);
  }
  public setOffice(office: OfficesDto | null): void {
    this.offices.next(office);
  }
  public setCompany(company: ICompany): void {
    this.company.next(company);
  }
  public setValidFindOffice(): void {
    this.validFindOffice.next(true);
  }
  public setMoney(money: string): void {
    this.moneyLocale.next({ money: money, locale: money == "CRC" ? "es-CR" : "es-EC" });
  }
}
