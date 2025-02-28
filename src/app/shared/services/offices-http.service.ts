import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { OfficesService } from "src/app/api/api_actualizar/services";
import { OfficesDto } from "src/app/api/api_actualizar/models";
import { DataCompany } from "../models/objects";
import { ICompany } from "../models/offices.interface";
import { deleteList } from "../models/types";

@Injectable({
  providedIn: "root",
})
export class OfficesHttpService {
  private moneyLocale = new BehaviorSubject<{ money: string; locale: string }>({ money: "", locale: "" });
  public moneyLocale$ = this.moneyLocale.asObservable();

  private company = new BehaviorSubject<ICompany | null>(DataCompany);
  public company$ = this.company.asObservable();

  private offices = new BehaviorSubject<OfficesDto | null>(null);
  public offices$ = this.offices.asObservable();

  private validFindOffice = new Subject<boolean>();
  public validFindOffice$ = this.validFindOffice.asObservable();

  constructor(private officesService: OfficesService) {}

  public getOffices(company: string): Observable<OfficesDto[]> {
    return this.officesService.apiOfficesGet$Json({ company: company });
  }
  public setOffice(office: OfficesDto | null): void {
    this.offices.next(office);
  }
  public setCompany(company: ICompany | null): void {
    this.company.next(company);
  }
  public setValidFindOffice(): void {
    this.validFindOffice.next(true);
  }
  public setMoney(money: string): void {
    this.moneyLocale.next({ money: money, locale: money == "CRC" ? "es-CR" : "es-EC" });
  }
}
