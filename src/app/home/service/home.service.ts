import { Injectable } from "@angular/core";
import { BehaviorSubject, catchError, concatMap, mergeMap, NEVER, Observable, tap } from "rxjs";
import { DatabaseSizeDto, FilesEcomm, PayFromDto, ResponsePayFrom } from "src/app/api/api_actualizar/models";
import { DashboardService } from "src/app/api/api_actualizar/services";
import { ToastMessagesService } from "src/app/shared/services/toast-messages.service";
import { SummaryPayFrom } from "../models/home-models";

@Injectable({
  providedIn: "root",
})
export class HomeService {
  private resultDatabaseSize = new BehaviorSubject<DatabaseSizeDto[] | null>(null);
  public resultDatabaseSize$ = this.resultDatabaseSize.asObservable();

  private resultDatabaseSizeRm = new BehaviorSubject<DatabaseSizeDto[] | null>(null);
  public resultDatabaseSizeRm$ = this.resultDatabaseSizeRm.asObservable();

  private filesEcomm = new BehaviorSubject<FilesEcomm[] | null>(null);
  public filesEcomm$ = this.filesEcomm.asObservable();

  private payFrom = new BehaviorSubject<PayFromDto[] | null>(null);
  public payFrom$ = this.payFrom.asObservable();

  private payFromRm = new BehaviorSubject<PayFromDto[] | null>(null);
  public payFromRm$ = this.payFromRm.asObservable();

  private summaryPayFrom = new BehaviorSubject<SummaryPayFrom | null>(null);
  public summaryPayFrom$ = this.summaryPayFrom.asObservable();

  constructor(private dashboardService: DashboardService, private toastMessageService: ToastMessagesService) {}

  public getSpaceDisk(company: string): void {
    this.dashboardService
      .apiDashboardDatabaseSizesGet$Json({ company })
      .pipe(
        tap((res) => {
          const mapDataBase = res.data!.map((m) => {
            let mb = "0";

            const verifyMB = m.size?.substring(0, 1);

            let size;
            if (Number(verifyMB) == 0) {
              size = Number(m.size) * 1024;
              mb = `${size.toString().substring(0, 3)} MB`;
            } else {
              size = `${m.size?.substring(0, 3)} GB`;
            }

            return {
              ...m,
              sizeTransform: mb == "0" ? size.toString() : mb,
            };
          });
          this.resultDatabaseSize.next(mapDataBase);
        }),
        catchError(() => {
          this.resultDatabaseSize.next([]);
          this.toastMessageService.showToastTarget("tc", "error", "Error", "No se pudo obtener los datos");
          return NEVER;
        })
      )
      .subscribe();
  }
  public getSpaceDiskRm(company: string): void {
    this.dashboardService
      .apiDashboardDatabaseSizesGet$Json({ company })
      .pipe(
        tap((res) => {
          const mapDataBase = res.data!.map((m) => {
            let mb = "0";

            const verifyMB = m.size?.substring(0, 1);

            let size;
            if (Number(verifyMB) == 0) {
              size = Number(m.size) * 1024;
              mb = `${size.toString().substring(0, 3)} MB`;
            } else {
              size = `${m.size?.substring(0, 3)} GB`;
            }

            return {
              ...m,
              sizeTransform: mb == "0" ? size.toString() : mb,
            };
          });
          this.resultDatabaseSizeRm.next(mapDataBase);
        }),
        catchError(() => {
          this.resultDatabaseSizeRm.next([]);
          this.toastMessageService.showToastTarget("tc", "error", "Error", "No se pudo obtener los datos");
          return NEVER;
        })
      )
      .subscribe();
  }

  public getFilesSabana(): void {
    this.dashboardService
      .apiDashboardEcommerceFilesGet$Json({ ip: "172.16.11.246" })
      .pipe(
        tap((res) => {
          const mapRes = res.data!.map((m) => {
            return {
              ...m,
              siceMb: (Number(m.size) / 1024 / 1024).toString().substring(0, 4),
            };
          });

          this.filesEcomm.next(mapRes);
        }),
        catchError(() => {
          this.filesEcomm.next([]);
          this.toastMessageService.showToastTarget("tc", "error", "Error", "No se pudo obtener los datos");
          return NEVER;
        })
      )
      .subscribe();
  }

  public getPayFromStore(company: string): void {
    this.dashboardService
      .apiDashboardInterfacesPayFromsGet$Json({ company })
      .pipe(concatMap((res) => this.getPayFromRmStore("rm", res)))
      .subscribe();
  }

  private getPayFromRmStore(company: string, res: ResponsePayFrom): Observable<ResponsePayFrom> {
    return this.dashboardService.apiDashboardInterfacesPayFromsGet$Json({ company }).pipe(
      tap((resRm) => {
        const summary: SummaryPayFrom = {
          totalStoreEta: res.data!.length,
          totalStoreRm: resRm.data!.length,
          textile_n_Eta: res.data!.filter((f) => f.ttc_Estado == "N" && f.ttc_Tipo_Material == "TEXTIL").length,
          textile_s_Eta: res.data!.filter((f) => f.ttc_Estado == "S" && f.ttc_Tipo_Material == "TEXTIL").length,
          textile_n_Rm: resRm.data!.filter((f) => f.ttc_Estado == "N" && f.ttc_Tipo_Material == "TEXTIL").length,
          textile_s_Rm: resRm.data!.filter((f) => f.ttc_Estado == "S" && f.ttc_Tipo_Material == "TEXTIL").length,
          electronica_n_Eta: res.data!.filter((f) => f.ttc_Estado == "N" && f.ttc_Tipo_Material == "ELECTRÓNICA").length,
          electronica_s_Eta: res.data!.filter((f) => f.ttc_Estado == "S" && f.ttc_Tipo_Material == "ELECTRÓNICA").length,
          electronica_n_Rm: resRm.data!.filter((f) => f.ttc_Estado == "N" && f.ttc_Tipo_Material == "ELECTRÓNICA").length,
          electronica_s_Rm: resRm.data!.filter((f) => f.ttc_Estado == "S" && f.ttc_Tipo_Material == "ELECTRÓNICA").length,
        };

        this.summaryPayFrom.next(summary);
      }),
      catchError(() => {
        const summary: SummaryPayFrom = {
          totalStoreEta: 0,
          totalStoreRm: 0,
          textile_n_Eta: 0,
          textile_s_Eta: 0,
          textile_n_Rm: 0,
          textile_s_Rm: 0,
          electronica_n_Eta: 0,
          electronica_s_Eta: 0,
          electronica_n_Rm: 0,
          electronica_s_Rm: 0,
        };
        this.summaryPayFrom.next(summary);
        this.toastMessageService.showToastTarget("tc", "error", "Error", "No se pudo obtener los datos");
        return NEVER;
      })
    );
  }
  public getPayFrom(company: string): void {
    this.dashboardService
      .apiDashboardInterfacesMainPayFromGet$Json({ company })
      .pipe(
        tap((res) => {
          this.payFrom.next(res.data!);
        }),
        catchError(() => {
          this.payFrom.next([]);
          this.toastMessageService.showToastTarget("tc", "error", "Error", "No se pudo obtener los datos");
          return NEVER;
        })
      )
      .subscribe();
  }

  public getPayFromRm(company: string): void {
    this.dashboardService
      .apiDashboardInterfacesMainPayFromGet$Json({ company })
      .pipe(
        tap((res) => {
          this.payFromRm.next(res.data!);
        }),
        catchError(() => {
          this.payFromRm.next([]);
          this.toastMessageService.showToastTarget("tc", "error", "Error", "No se pudo obtener los datos");
          return NEVER;
        })
      )
      .subscribe();
  }
}
