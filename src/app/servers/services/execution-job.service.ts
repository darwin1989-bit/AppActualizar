import { Injectable } from "@angular/core";
import { BehaviorSubject, catchError, tap } from "rxjs";
import { JobExecutionDto, NameJobsDto, ServerDateControlDto } from "src/app/api/api_actualizar/models";
import { ServerService } from "src/app/api/api_actualizar/services";
import { CalledHttpService } from "src/app/shared/services/called-http.service";
import { ToastMessagesService } from "src/app/shared/services/toast-messages.service";

@Injectable({
  providedIn: "root",
})
export class ExecutionJobService {
  private excutionsJobs = new BehaviorSubject<boolean>(false);
  public excutionsJobs$ = this.excutionsJobs.asObservable();

  private executePa = new BehaviorSubject<boolean>(false);
  public executePa$ = this.executePa.asObservable();

  private visibleResultServerDateControl = new BehaviorSubject<boolean>(false);
  public visibleResultServerDateControl$ = this.visibleResultServerDateControl.asObservable();

  private visibleResultJob = new BehaviorSubject<boolean>(true);
  public visibleResultJob$ = this.visibleResultJob.asObservable();

  private namesJobs = new BehaviorSubject<NameJobsDto[]>([]);
  public namesJobs$ = this.namesJobs.asObservable();

  private jobsExecutions = new BehaviorSubject<JobExecutionDto[]>([]);
  public jobsExecutions$ = this.jobsExecutions.asObservable();

  private resetTable = new BehaviorSubject<boolean>(false);
  public resetTable$ = this.resetTable.asObservable();

  private serverDateControlResult = new BehaviorSubject<ServerDateControlDto[]>([]);
  public serverDateControlResult$ = this.serverDateControlResult.asObservable();

  constructor(public serverService: ServerService, private calledHttpService: CalledHttpService, private toastMessageService: ToastMessagesService) {}

  public getNamesJosb(ip: string): void {
    this.serverService
      .apiServerJobExecutionsJobsNamesGet$Json({ ip })
      .pipe(
        tap((res) => this.namesJobs.next(res.data!)),
        catchError((error) => {
          return this.calledHttpService.errorHandler(error);
        })
      )
      .subscribe();
  }

  public GetExecutedStoreNameJob(ip: string, nameJob: string, startDate: string, endDate: string): void {
    this.serverService
      .apiServerJobExecutionsJobExecutedStoreNameJobGet$Json({ ip, nameJob, startDate, endDate })
      .pipe(
        tap((res) => this.jobsExecutions.next(res.data!)),
        catchError((error) => {
          return this.calledHttpService.errorHandler(error);
        })
      )
      .subscribe();
  }

  public GetExecutedJobAllStore(company: string, nameJob: string, startDate: string, endDate: string): void {
    this.serverService
      .apiServerJobExecutionsJobExecutedAllStoreGet$Json({ company, nameJob, startDate, endDate })
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
            this.jobsExecutions.next(res.data!);
          }
        })
      )
      .subscribe();
  }
  public GetExecutedStoreAllJobs(ip: string, startDate: string, endDate: string): void {
    this.serverService
      .apiServerJobExecutionsJobExecutedStoreAllJobsGet$Json({ ip, startDate, endDate })
      .pipe(
        tap((res) => this.jobsExecutions.next(res.data!)),
        catchError((error) => {
          return this.calledHttpService.errorHandler(error);
        })
      )
      .subscribe();
  }

  public GetServerDateControl(ip: string, nameOffice: string): void {
    this.serverService
      .apiServerJobExecutionsJobExecutedServerDateControlStoreGet$Json({ ip, nameOffice })
      .pipe(
        tap((res) => {
          const date = new Date().toJSON().substring(0, 10).replace("-", "").replace("-", "");

          const mapRes = res.data?.map((m) => {
            const dateRes = m.cfs_ultima_fecha?.substring(0, 10).replace("/", "").replace("/", "");

            let invalidDate = true;

            if (date == dateRes && m.cfs_estado == "OK") invalidDate = false;

            return {
              ...m,
              validDate: invalidDate,
            };
          });
          this.serverDateControlResult.next(mapRes!);
        }),
        catchError((error) => {
          return this.calledHttpService.errorHandler(error);
        })
      )
      .subscribe();
  }
  public GetServerDateControlAllStore(company: string): void {
    this.serverService
      .apiServerJobExecutionsJobExecutedServerDateControlAllStoreGet$Json({ company })
      .pipe(
        tap((res) => {
          const date = new Date().toJSON().substring(0, 10).replace("-", "").replace("-", "");

          const mapRes = res.data?.map((m) => {
            const dateRes = m.cfs_ultima_fecha?.substring(0, 10).replace("/", "").replace("/", "");

            let invalidDate = true;

            if (date == dateRes && m.cfs_estado == "OK") invalidDate = false;

            return {
              ...m,
              validDate: invalidDate,
            };
          });
          this.serverDateControlResult.next(mapRes!);
        }),
        catchError((error) => {
          return this.calledHttpService.errorHandler(error);
        })
      )
      .subscribe();
  }

  public executeStoreProcedure(ip: string) {
    this.serverService
      .apiServerJobExecutionsJobExecutedServerDateControlStoredProcedureGet({ ip })
      .pipe(
        tap(() => {
          this.toastMessageService.showToast("tc", "success", "Realizado", `Se ejecuto correctamente el procedimiento almacenado`);
          this.executePa.next(true);
        }),
        catchError((error) => {
          return this.calledHttpService.errorHandler(error);
        })
      )
      .subscribe();
  }

  public setExecutionJobs(value: boolean): void {
    this.excutionsJobs.next(value);
  }

  public setVisibleResultServerDateControl(value: boolean): void {
    this.visibleResultServerDateControl.next(value);
  }
  public setVisibleResultJob(value: boolean): void {
    this.visibleResultJob.next(value);
  }

  public clearData(): void {
    this.jobsExecutions.next([]);
    this.serverDateControlResult.next([]);
  }

  public clearTable(): void {
    this.jobsExecutions.next([]);
    this.resetTable.next(true);
    this.serverDateControlResult.next([]);
    this.visibleResultJob.next(true);
    this.visibleResultServerDateControl.next(false);
  }
}
