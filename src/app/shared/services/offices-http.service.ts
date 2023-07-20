import { Injectable } from "@angular/core";
import { CalledHttpService } from "./called-http.service";
import { BehaviorSubject, Observable, Subject, catchError } from "rxjs";
import { OfficesService } from "src/app/api/api_actualizar/services";
import { OfficesDto } from "src/app/api/api_actualizar/models";
import { DataOffice } from "../models/objects";

@Injectable({
  providedIn: "root",
})
export class OfficesHttpService {
  private offices = new BehaviorSubject<OfficesDto>(DataOffice);
  public offices$ = this.offices.asObservable();
  private validFindOffice = new Subject<boolean>();
  public validFindOffice$ = this.validFindOffice.asObservable();

  constructor(private calledHttpService: CalledHttpService, private officesService: OfficesService) {}

  public getOffices(company: string): Observable<OfficesDto[]> {
    return this.officesService.apiOfficesGet$Json({ company: company }).pipe(
      catchError((error) => {
        return this.calledHttpService.errorHandler(error);
      })
    );
  }
  public setOffice(office: OfficesDto): void {
    this.offices.next(office);
  }

  public setValidFindOffice(): void {
    this.validFindOffice.next(true);
  }
}
