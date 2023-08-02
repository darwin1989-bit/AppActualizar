import { Component, OnDestroy, OnInit } from "@angular/core";
import { OfficesHttpService } from "../../services/offices-http.service";
import { OfficesDto } from "src/app/api/api_actualizar/models/offices-dto";
import { ICompany } from "../../models/offices.interface";
import { CompanyObj, DataCompany } from "../../models/objects";
import { environment } from "src/environments/environment";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { Subscription } from "rxjs";
import { ClientComponentService } from "src/app/client/service/client-component.service";

@Component({
  selector: "app-find-offices",
  templateUrl: "./find-offices.component.html",
  styleUrls: ["./find-offices.component.scss"],
})
export class FindOfficesComponent implements OnInit, OnDestroy {
  public company: ICompany[] = [DataCompany];
  public selectedCompany!: ICompany;
  public offices!: OfficesDto[];
  public selectedOffice!: OfficesDto;
  private subcription!: Subscription;
  public overlayVisible: boolean = false;

  public officesForm = this.fb.group({
    companyInput: [this.selectedCompany, Validators.required],
    officeInput: [this.selectedOffice, Validators.required],
  });

  get companyControl(): FormControl {
    return this.officesForm.get("companyInput") as FormControl;
  }
  get officeControl(): FormControl {
    return this.officesForm.get("officeInput") as FormControl;
  }

  constructor(public officesHttpService: OfficesHttpService, private fb: FormBuilder, private clienteService: ClientComponentService) {}

  ngOnDestroy(): void {
    this.officesHttpService.setOffice({});
    this.subcription.unsubscribe();
  }

  ngOnInit(): void {
    this.subcription = this.officesHttpService.validFindOffice$.subscribe((res: boolean) => {
      if (res) this.officesForm.markAllAsTouched();
    });

    this.company = structuredClone(CompanyObj);

    if (!environment.production) {
      this.company.splice(0, 2);
      this.company.push({ name: "PRUEBAS", code: "prb" });
    }
  }

  public changeCompany(): void {
    this.companyControl.untouched;
    this.clearOffice();
    const companyControl = this.officesForm.controls.companyInput;
    this.officesHttpService.setCompany(companyControl.value!);
    if (companyControl.value) {
      this.officesHttpService.getOffices(companyControl.value?.code!).subscribe((offices) => {
        this.offices = offices.map((office) => {
          return {
            ...office,
            nombre: office.nombre?.toUpperCase(),
          };
        });
      });
    }
  }
  public changeOffice(): void {
    this.companyControl.untouched;
    this.officesHttpService.setOffice(this.officeControl.value);
    this.clienteService.clearClientFound();
  }
  public clearOffice(): void {
    this.officesForm.controls.officeInput.reset();
    this.offices = [];
    this.officesHttpService.setOffice(null);
    this.clienteService.clearClientFound();
  }

  public toggle() {
    this.overlayVisible = !this.overlayVisible;
  }
}
