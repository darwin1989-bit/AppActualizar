import { Injectable } from "@angular/core";
import { BehaviorSubject, catchError, tap } from "rxjs";
import { AssignedSellerDto } from "src/app/api/api_actualizar/models";
import { SellersService } from "src/app/api/api_actualizar/services";
import { CalledHttpService } from "src/app/shared/services/called-http.service";

@Injectable({
  providedIn: "root",
})
export class SellersAssignedService {
  private resetTable = new BehaviorSubject<boolean>(false);
  public resetTable$ = this.resetTable.asObservable();

  private sellersAssigned = new BehaviorSubject<AssignedSellerDto[]>([]);
  public sellersAssigned$ = this.sellersAssigned.asObservable();

  private sellersAssignedMain = new BehaviorSubject<AssignedSellerDto[]>([]);
  public sellersAssignedMain$ = this.sellersAssignedMain.asObservable();

  constructor(private sellersService: SellersService, private calledHttpService: CalledHttpService) {}

  public getSellersAssignedId(ip: string, id: string): void {
    this.sellersService
      .apiSellersAssignedIdGet$Json({ ip, id })
      .pipe(
        tap((res) => this.sellersAssigned.next(res.data!)),
        catchError((error) => this.calledHttpService.errorHandler(error))
      )
      .subscribe();
  }
  public getMainSellersAssignedId(company: string, id: string): void {
    this.sellersService
      .apiSellersMainAssignedIdGet$Json({ company, id })
      .pipe(
        tap((res) => this.sellersAssignedMain.next(res.data!)),
        catchError((error) => this.calledHttpService.errorHandlerMain(error))
      )
      .subscribe();
  }
  public getSellersAssignedSapCode(ip: string, SapCode: string): void {
    this.sellersService
      .apiSellersAssignedSapCodeGet$Json({ ip, SapCode })
      .pipe(
        tap((res) => this.sellersAssigned.next(res.data!)),
        catchError((error) => this.calledHttpService.errorHandler(error))
      )
      .subscribe();
  }
  public getMainSellersAssignedSapCode(company: string, sapCode: string): void {
    this.sellersService
      .apiSellersMainAssignedSapCodeGet$Json({ company, sapCode })
      .pipe(
        tap((res) => this.sellersAssignedMain.next(res.data!)),
        catchError((error) => this.calledHttpService.errorHandlerMain(error))
      )
      .subscribe();
  }

  public clearTableSellers(): void {
    this.sellersAssigned.next([]);
    this.sellersAssignedMain.next([]);
    this.resetTable.next(true);
  }
}
