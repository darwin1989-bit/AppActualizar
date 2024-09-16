import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { Subscription, tap } from "rxjs";
import { DatabaseNameDto, OfficesDto } from "src/app/api/api_actualizar/models";
import { DatabaseSizeService } from "src/app/servers/services/database-size.service";
import { ICompany } from "src/app/shared/models/offices.interface";
import { OfficesHttpService } from "src/app/shared/services/offices-http.service";

@Component({
  selector: "app-find-database-size",
  templateUrl: "./find-database-size.component.html",
  styles: [],
})
export class FindDatabaseSizeComponent implements OnInit, OnDestroy {
  private subscription!: Subscription;

  public company!: ICompany;

  private office!: OfficesDto;

  public selectedDropdown!: DatabaseNameDto;

  public dropdownNames!: DatabaseNameDto[];

  constructor(private fb: FormBuilder, private officeService: OfficesHttpService, public databaseSizeService: DatabaseSizeService) {}

  public databaseForm = this.fb.group({
    databasesNames: [this.selectedDropdown, Validators.required],
  });

  get databasesNamesControl(): FormControl<DatabaseNameDto> {
    return this.databaseForm.get("databasesNames") as FormControl;
  }

  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
    this.databaseSizeService.setDatabases(false);
  }

  ngOnInit(): void {
    this.databaseSizeService.setDatabases(true);
    this.subscription = this.officeService.company$.subscribe((res) => (this.company = res!));
    this.subscription = this.officeService.offices$.subscribe((res) => {
      this.office = res!;
      if (this.office) {
        if (this.office.nombre?.toUpperCase() == "TODOS") this.databaseSizeService.getDatabaseNames("172.16.115.10");
        else this.databaseSizeService.getDatabaseNames(this.office.ip_Red!);

        this.subscription = this.databaseSizeService.databasesNames$
          .pipe(
            tap((res) => {
              const clone = structuredClone(res);
              if (this.office) {
                if (this.office.nombre?.toUpperCase() != "TODOS") {
                  const some = clone.some((f) => f.name == "TODOS");
                  this.dropdownNames = clone.sort((a, b) => a.name!.localeCompare(b.name!, "es", { sensitivity: "base" }));
                  if (!some) clone.unshift({ name: "TODOS", filename: this.company.code });
                } else {
                  const some = clone.some((f) => f.name == "TODOS");
                  this.dropdownNames = clone.sort((a, b) => a.name!.localeCompare(b.name!, "es", { sensitivity: "base" }));
                  if (some) clone.splice(0, 1);
                }
              }
            })
          )
          .subscribe();
        this.databaseForm.reset();
      }
    });
  }

  public find(): void {
    this.databaseSizeService.clearDatabaseSize();
    this.officeService.setValidFindOffice();
    this.databaseForm.markAllAsTouched();
    if (this.company.code != "" && this.databaseForm.valid) {
      if (this.office.nombre == "TODOS") this.databaseSizeService.getDatabaseName(this.company.code, this.databasesNamesControl.value.name!);
      else if (this.databasesNamesControl.value.name! == "TODOS") this.databaseSizeService.getDatabaseAllNames(this.office.ip_Red!, this.office.nombre!);
      else this.databaseSizeService.getDatabaseStoreName(this.office.ip_Red!, this.office.nombre!, this.databasesNamesControl.value.name!);
    }
  }

  public changeDropdown(): void {
    this.databaseSizeService.clearDatabaseSize();
  }
}
