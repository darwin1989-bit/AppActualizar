import { Injectable } from "@angular/core";
import { BehaviorSubject, catchError, tap } from "rxjs";
import { DatabaseNameDto, DatabaseSizeDto } from "src/app/api/api_actualizar/models";
import { ServerService } from "src/app/api/api_actualizar/services";
import { CalledHttpService } from "src/app/shared/services/called-http.service";
import { ToastMessagesService } from "src/app/shared/services/toast-messages.service";

@Injectable({
  providedIn: "root",
})
export class DatabaseSizeService {
  private databasesNames = new BehaviorSubject<DatabaseNameDto[]>([]);
  public databasesNames$ = this.databasesNames.asObservable();

  private resultDatabaseSize = new BehaviorSubject<DatabaseSizeDto[]>([]);
  public resultDatabaseSize$ = this.resultDatabaseSize.asObservable();

  private databases = new BehaviorSubject<boolean>(false);
  public databases$ = this.databases.asObservable();

  private resetTable = new BehaviorSubject<boolean>(false);
  public resetTable$ = this.resetTable.asObservable();

  constructor(private serverService: ServerService, private calledHttpService: CalledHttpService, private toastMessageService: ToastMessagesService) {}

  public getDatabaseNames(ip: string): void {
    this.serverService
      .apiServerDatabaseNamesGet$Json({ ip })
      .pipe(
        tap((res) => this.databasesNames.next(res.data!)),
        catchError((error) => {
          return this.calledHttpService.errorHandler(error);
        })
      )
      .subscribe();
  }

  public getDatabaseAllNames(ip: string, officeName: string): void {
    this.serverService
      .apiServerDatabaseSizeAllNamesGet$Json({ ip, officeName })
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
        catchError((error) => {
          return this.calledHttpService.errorHandler(error);
        })
      )
      .subscribe();
  }

  public getDatabaseStoreName(ip: string, officeName: string, nameDatabase: string): void {
    this.serverService
      .apiServerDatabaseSizeStoreGet$Json({ ip, officeName, nameDatabase })
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
        catchError((error) => {
          return this.calledHttpService.errorHandler(error);
        })
      )
      .subscribe();
  }

  public getDatabaseName(company: string, nameDatabase: string): void {
    this.serverService
      .apiServerDatabaseSizeNameGet$Json({ company, nameDatabase })
      .pipe(
        tap((res) => {
          if (res.noConnections!.length > 0) {
            res.noConnections!.forEach((element) => {
              this.toastMessageService.showToast("tc", "error", "Sin conexión", `No se tiene conexión con la tienda ${element.tienda}`);
            });
          } else {
            if (res.data!.length == 0) {
              this.toastMessageService.showToast("tc", "warn", "Advertencia", `No se encontraron resultados`);
            }
            const mapDataBase = res.data!.map((m) => {
              let mb = "0";

              const verifyMB = m.size?.substring(0, 1);

              let size;
              if (Number(verifyMB) == 0) {
                size = Number(m.size) * 1024;
                mb = `${size.toString().substring(0, 4)} MB`;
              } else {
                size = `${m.size?.substring(0, 3)} GB`;
              }

              return {
                ...m,
                sizeTransform: mb == "0" ? size.toString() : mb,
              };
            });
            this.resultDatabaseSize.next(mapDataBase);
          }
        }),
        catchError((error) => {
          return this.calledHttpService.errorHandler(error);
        })
      )
      .subscribe();
  }

  public getDatabaseSize(company: string): void {
    this.serverService
      .apiServerDatabaseStoresGet$Json({ company })
      .pipe(
        tap((res) => {
          if (res.noConnections!.length > 0) {
            res.noConnections!.forEach((element) => {
              this.toastMessageService.showToast("tc", "error", "Sin conexión", `No se tiene conexión con la tienda ${element.tienda}`);
            });
          } else {
            if (res.data!.length == 0) {
              this.toastMessageService.showToast("tc", "warn", "Advertencia", `No se encontraron resultados`);
            }

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
          }
        }),
        catchError((error) => {
          return this.calledHttpService.errorHandler(error);
        })
      )
      .subscribe();
  }

  public setDatabases(value: boolean): void {
    this.databases.next(value);
  }

  public clearDatabaseSize(): void {
    this.resultDatabaseSize.next([]);
    this.resetTable.next(true);
  }
}
