import { Injectable } from "@angular/core";
import { BehaviorSubject, catchError, tap } from "rxjs";
import { JobExecutionDto, NameJobsDto } from "src/app/api/api_actualizar/models";
import { ServerService } from "src/app/api/api_actualizar/services";
import { CalledHttpService } from "src/app/shared/services/called-http.service";
import { ToastMessagesService } from "src/app/shared/services/toast-messages.service";

@Injectable({
  providedIn: "root",
})
export class ExecutionJobService {
  private excutionsJobs = new BehaviorSubject<boolean>(false);
  public excutionsJobs$ = this.excutionsJobs.asObservable();

  private namesJobs = new BehaviorSubject<NameJobsDto[]>([]);
  public namesJobs$ = this.namesJobs.asObservable();

  private jobsExecutions = new BehaviorSubject<JobExecutionDto[]>([]);
  public jobsExecutions$ = this.jobsExecutions.asObservable();

  private resetTable = new BehaviorSubject<boolean>(false);
  public resetTable$ = this.resetTable.asObservable();

  constructor(public serverService: ServerService, private calledHttpService: CalledHttpService, private toastMessageService: ToastMessagesService) {}

  public getNamesJosb(): void {
    this.serverService
      .apiServerJobExecutionsJobsNamesGet$Json({ ip: "172.16.115.10" })
      .pipe(
        tap((res) => this.namesJobs.next(res.data!)),
        catchError((error) => {
          return this.calledHttpService.errorHandler(error);
        })
      )
      .subscribe();
  }
  public setExecutionJobs(value: boolean): void {
    this.excutionsJobs.next(value);
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

  public clearTable(): void {
    this.jobsExecutions.next([]);
    this.resetTable.next(true);
  }
}
