import { Injectable } from "@angular/core";
import { CalledHttpService } from "./called-http.service";
import { BehaviorSubject, Observable, Subject, catchError, tap } from "rxjs";
import { OfficesService } from "src/app/api/api_actualizar/services";
import { OfficesDto } from "src/app/api/api_actualizar/models";
import { DataOffice } from "../models/objects";

@Injectable({
  providedIn: "root",
})
export class OfficesHttpService {
  private offices = new BehaviorSubject<OfficesDto>(DataOffice);
  public offices$ = this.offices.asObservable();

  constructor(private calledHttpService: CalledHttpService, private officesService: OfficesService) {}

  public getOffices(company: string): Observable<OfficesDto[]> {
    return this.officesService.apiOfficesGet$Json({ company: company }).pipe(
      catchError((error) => {
        if (error.status === 400) {
          return this.calledHttpService.errorHandler(error.error.message);
        }
        return this.calledHttpService.errorHandler(error.message);
      })
    );
  }
  public setOffice(office: OfficesDto): void {
    this.offices.next(office);
  }
}
