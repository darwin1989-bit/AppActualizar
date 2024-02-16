import { Component, OnDestroy, OnInit } from "@angular/core";
import { OfficesHttpService } from "../../services/offices-http.service";
import { OfficesDto } from "src/app/api/api_actualizar/models/offices-dto";
import { ICompany } from "../../models/offices.interface";
import { CompanyObj, DataCompany } from "../../models/objects";
import { environment } from "src/environments/environment";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { Subscription } from "rxjs";
import { ClientComponentService } from "src/app/client/service/client-component.service";
import { SharedService } from "../../services/shared.service";
import { PaymentsComponentService } from "src/app/client/service/payments-component.service";
import { ClientCreditComponentService } from "src/app/client/service/client-credit-component.service";
import { TransactionsComponentService } from "src/app/client/service/transactions-component.service";
import { MaterialInformationService } from "src/app/material/service/material-information.service";
import { DetailPromotionService } from "src/app/material/service/detail-promotion.service";
import { UsersService } from "src/app/users/service/users.service";

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

  constructor(
    public officesHttpService: OfficesHttpService,
    private fb: FormBuilder,
    private clienteService: ClientComponentService,
    private sharedService: SharedService,
    private paymentsService: PaymentsComponentService,
    private clientCreditService: ClientCreditComponentService,
    private transactionsService: TransactionsComponentService,
    private materialService: MaterialInformationService,
    private detailPromotionService: DetailPromotionService,
    private usersService: UsersService
  ) {}

  ngOnDestroy(): void {
    this.officesHttpService.setOffice(null);
    this.subcription.unsubscribe();
  }

  ngOnInit(): void {
    this.subcription = this.officesHttpService.validFindOffice$.subscribe((res: boolean) => {
      if (res) this.officesForm.markAllAsTouched();
    });

    this.company = structuredClone(CompanyObj);

    //note delete in production
    if (!environment.production) {
      this.company.splice(0, 2);
      this.company.push({ name: "PRUEBAS", code: "prb" });
    }

    /*     this.subcription = this.officesHttpService.deleteList$.subscribe((res: string) => {
      if (!environment.production) {
        this.company.splice(0, 2);
        this.company.push({ name: "PRUEBAS", code: "prb" });
      } else {
        if (res.includes("ETA")) this.company.splice(0, 1); //note delete ETAFASHION
        if (res.includes("RM")) this.company.splice(1, 1); //note delete MODARM
        if (res.includes("CR")) this.company.splice(2, 1); //note delete ETAFASHION CR
      }
    }); */
  }

  public changeCompany(): void {
    this.companyControl.untouched;
    this.clearOffice();
    const companyControl = this.officesForm.controls.companyInput;
    this.officesHttpService.setCompany(companyControl.value!);
    if (companyControl.value) {
      var typeCompany = this.companyControl.value;
      if (typeCompany.code.includes("cr")) {
        this.officesHttpService.setMoney("CRC");
      } else {
        this.officesHttpService.setMoney("USD");
      }

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
    this.sharedService.setClearInvoiceFrom();
    this.paymentsService.clearPayments();
    this.clientCreditService.clearCreditClient();
    this.transactionsService.clearTransactions();
    this.materialService.clearMaterials();
    this.detailPromotionService.clearPromotions();
    this.usersService.clearUsers();
  }
  public clearOffice(): void {
    this.officesForm.controls.officeInput.reset();
    this.offices = [];
    this.officesHttpService.setOffice(null);
    this.clienteService.clearClientFound();
    this.sharedService.setClearInvoiceFrom();
    this.paymentsService.clearPayments();
    this.clientCreditService.clearCreditClient();
    this.transactionsService.clearTransactions();
    this.materialService.clearMaterials();
    this.detailPromotionService.clearPromotions();
    this.usersService.clearUsers();
  }

  public toggle() {
    this.overlayVisible = !this.overlayVisible;
  }
}
