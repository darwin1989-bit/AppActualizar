import { Component, OnDestroy, OnInit } from "@angular/core";
import { OfficesHttpService } from "../../services/offices-http.service";
import { OfficesDto } from "src/app/api/api_actualizar/models/offices-dto";
import { ICompany } from "../../models/offices.interface";
import { CompanyObj, DataCompany, DataOffice } from "../../models/objects";
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
    companyInput: ["", Validators.required],
    officeInput: ["", Validators.required],
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
      if (res) this.verifyValidForm();
    });

    const cloneCompanyObj = structuredClone(CompanyObj);
    this.company = cloneCompanyObj;
    if (!environment.production) {
      cloneCompanyObj.splice(0, 2);
      cloneCompanyObj.push({ name: "PRUEBAS", code: "prb" });
      this.company = cloneCompanyObj;
    }
  }

  public changeCompany(): void {
    this.clearOffice();
    const form = this.officesForm.value;
    const caompanyControl: any = form.companyInput;
    if (caompanyControl) {
      this.officesHttpService.getOffices(caompanyControl.code).subscribe((offices) => {
        this.offices = offices;
      });
    }
  }
  public changeOffice(): void {
    const form = this.officesForm.value;
    const officeControl: any = form.officeInput;
    this.officesHttpService.setOffice(officeControl);
    this.clienteService.clearClientFound();
  }
  public clearOffice(): void {
    this.officesForm.controls.officeInput.reset();
    this.offices = [];
    this.officesHttpService.setOffice(DataOffice);
    this.clienteService.clearClientFound();
  }
  public verifyValidForm(): void {
    this.officesForm.markAllAsTouched();
  }
  public toggle() {
    this.overlayVisible = !this.overlayVisible;
  }
}
