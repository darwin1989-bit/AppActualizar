import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { Subscription, tap } from "rxjs";
import { NameJobsDto, OfficesDto } from "src/app/api/api_actualizar/models";
import { ExecutionJobService } from "src/app/servers/services/execution-job.service";
import { ICompany } from "src/app/shared/models/offices.interface";
import { OfficesHttpService } from "src/app/shared/services/offices-http.service";

@Component({
  selector: "app-find-job-executions",
  templateUrl: "./find-job-executions.component.html",
  styles: [],
})
export class FindJobExecutionsComponent implements OnInit, OnDestroy {
  private subscription!: Subscription;

  private office!: OfficesDto;

  public company!: ICompany;

  public selectedDropdown!: NameJobsDto;

  public dropdownNamesJobs!: NameJobsDto[];

  public minDate!: Date;

  public maxDate!: Date;

  public inputVisible: boolean = false;

  constructor(private fb: FormBuilder, private officeService: OfficesHttpService, public executionJobService: ExecutionJobService) {}

  ngOnInit(): void {
    this.executionJobService.setExecutionJobs(true);

    let today = new Date();
    let month = today.getUTCMonth();
    let prevMonth = month === 0 ? 11 : month - 2;
    this.minDate = new Date();
    this.minDate.setUTCMonth(prevMonth);
    this.maxDate = new Date();

    this.subscription = this.officeService.company$.subscribe((res) => (this.company = res!));
    this.subscription = this.officeService.offices$.subscribe((res) => {
      this.office = res!;
      if (this.office) {
        if (this.office.nombre?.toUpperCase() == "TODOS") this.executionJobService.getNamesJosb("172.16.115.10");
        else this.executionJobService.getNamesJosb(this.office.ip_Red!);

        this.subscription = this.executionJobService.namesJobs$
          .pipe(
            tap((res) => {
              const clone = structuredClone(res);
              if (this.office) {
                if (this.office.nombre?.toUpperCase() != "TODOS") {
                  const some = clone.some((f) => f.nameJob == "TODOS");
                  this.dropdownNamesJobs = clone.sort((a, b) => a.nameJob!.localeCompare(b.nameJob!, "es", { sensitivity: "base" }));
                  if (!some) clone.unshift({ nameJob: "TODOS", cjs_Nombre_Job: this.company.code });
                } else {
                  const some = clone.some((f) => f.nameJob == "TODOS");
                  this.dropdownNamesJobs = clone.sort((a, b) => a.nameJob!.localeCompare(b.nameJob!, "es", { sensitivity: "base" }));
                  if (some) clone.splice(0, 1);
                }
              }
            })
          )
          .subscribe();
      }
      this.jobsForm.reset();
    });
    this.subscription = this.executionJobService.executePa$.subscribe((res) => {
      if (res) this.find();
    });
  }
  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
    this.executionJobService.setExecutionJobs(false);
    this.executionJobService.setVisibleResultServerDateControl(false);
    this.executionJobService.setVisibleResultJob(true);
  }

  public jobsForm = this.fb.group({
    namesJobs: [this.selectedDropdown, Validators.required],
    dateExecutionJobs: [[Date], Validators.required],
  });

  get namesJobsControl(): FormControl<NameJobsDto> {
    return this.jobsForm.get("namesJobs") as FormControl;
  }
  get dateExecutionJobsControl(): FormControl<Date[] | null> {
    return this.jobsForm.get("dateExecutionJobs") as FormControl;
  }

  public find(): void {
    this.officeService.setValidFindOffice();
    this.jobsForm.markAllAsTouched();
    this.dateExecutionJobsControl.markAsDirty();
    this.dateExecutionJobsControl.markAsUntouched();

    if (this.jobsForm.valid && this.office.nombre != "") {
      let dateRange: Date[] | null = this.dateExecutionJobsControl.value;
      if (dateRange != null) {
        let startDate: Date;
        startDate = new Date(dateRange![0]);
        startDate.setHours(-5, 0, 0);
        let endDate: Date;

        if (dateRange![1]) {
          endDate = new Date(dateRange![1]);
          endDate.setHours(18, 59, 59);
        } else {
          let startDate2 = new Date(dateRange![0]);
          endDate = startDate2;
          endDate.setHours(18, 59, 59);
        }

        if (this.office.nombre == "TODOS" && this.namesJobsControl.value.nameJob!.trimEnd().toUpperCase() != "CONTROL FECHA SERVIDOR")
          return this.executionJobService.GetExecutedJobAllStore(this.company.code!, this.namesJobsControl.value.cjs_Nombre_Job!, startDate.toJSON(), endDate.toJSON());

        if (this.namesJobsControl.value.nameJob != "TODOS" && this.namesJobsControl.value.nameJob!.trimEnd().toUpperCase() != "CONTROL FECHA SERVIDOR") {
          this.executionJobService.GetExecutedStoreNameJob(this.office.ip_Red!, this.namesJobsControl.value.cjs_Nombre_Job!, startDate.toJSON(), endDate.toJSON());
        } else if (this.namesJobsControl.value.nameJob!.trimEnd().toUpperCase() != "CONTROL FECHA SERVIDOR") {
          this.executionJobService.GetExecutedStoreAllJobs(this.office.ip_Red!, startDate.toJSON(), endDate.toJSON());
        }
      }

      if (this.office.nombre == "TODOS" && this.namesJobsControl.value.nameJob!.trimEnd().toUpperCase() == "CONTROL FECHA SERVIDOR")
        this.executionJobService.GetServerDateControlAllStore(this.company.code!);
      else if (this.namesJobsControl.value.nameJob!.trimEnd().toUpperCase() == "CONTROL FECHA SERVIDOR") this.executionJobService.GetServerDateControl(this.office.ip_Red!, this.office.nombre!);
    }
  }

  public changeDropdownNamesJobs(): void {
    this.executionJobService.clearTable();
    if (this.namesJobsControl.value.nameJob?.trimEnd().toUpperCase() == "CONTROL FECHA SERVIDOR") {
      this.inputVisible = false;
      this.executionJobService.setVisibleResultServerDateControl(true);
      this.executionJobService.setVisibleResultJob(false);
      this.dateExecutionJobsControl.disable();
    } else {
      this.inputVisible = true;
      this.executionJobService.setVisibleResultJob(true);
      this.executionJobService.setVisibleResultServerDateControl(false);
      this.dateExecutionJobsControl.enable();
    }
  }
}
