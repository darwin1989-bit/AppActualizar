import { Component, OnDestroy, OnInit } from "@angular/core";
import { Validators, FormControl, FormBuilder } from "@angular/forms";
import { Subscription, BehaviorSubject, catchError } from "rxjs";
import { OfficesDto } from "src/app/api/api_actualizar/models";
import { ClientComponentService } from "src/app/client/service/client-component.service";
import { ClientCreditComponentService } from "src/app/client/service/client-credit-component.service";
import { PaymentsComponentService } from "src/app/client/service/payments-component.service";
import { TransactionsComponentService } from "src/app/client/service/transactions-component.service";
import { DetailPromotionService } from "src/app/material/service/detail-promotion.service";
import { MaterialInformationService } from "src/app/material/service/material-information.service";
import { IpBoxesService } from "src/app/store/services/ip-boxes.service";
import { OpenBoxesService } from "src/app/store/services/open-boxes.service";
import { RegisteredUsersService } from "src/app/users/service/registered-users.service";
import { UsersAuthorizingService } from "src/app/users/service/users-authorizing.service";
import { UsersService } from "src/app/users/service/users.service";
import { environment } from "src/environments/environment";
import { DataCompany, CompanyObj, OfficesMatriz } from "../../models/objects";
import { ICompany } from "../../models/offices.interface";
import { CalledHttpService } from "../../services/called-http.service";
import { OfficesHttpService } from "../../services/offices-http.service";
import { SharedService } from "../../services/shared.service";
import { PlotsVoucherService } from "src/app/store/services/plots-voucher.service";
import { GiftCardService } from "src/app/store/services/gift-card.service";

@Component({
  selector: "app-find-company",
  templateUrl: "./find-company.component.html",
  styles: [],
})
export class FindCompanyComponent implements OnInit, OnDestroy {
  public company: ICompany[] = [DataCompany];
  public selectedCompany!: ICompany;
  public selectedOffice!: OfficesDto;
  private subcription!: Subscription;
  public overlayVisible: boolean = false;
  private pushOffices!: boolean;

  private officesGet = new BehaviorSubject<boolean>(false);
  public officesGet$ = this.officesGet.asObservable();

  public officesForm = this.fb.group({
    companyInput: [this.selectedCompany, Validators.required],
  });

  get companyControl(): FormControl {
    return this.officesForm.get("companyInput") as FormControl;
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
    private usersService: UsersService,
    private calledHttpService: CalledHttpService,
    private usersAuthorizingService: UsersAuthorizingService,
    private registeredUsersService: RegisteredUsersService,
    public openBoxesService: OpenBoxesService,
    private ipBoxesService: IpBoxesService,
    private plotsVoucherService: PlotsVoucherService,
    private giftCardService: GiftCardService
  ) {}

  ngOnDestroy(): void {
    this.officesHttpService.setOffice(null);
    this.officesHttpService.setCompany(null);
    this.subcription.unsubscribe();
  }

  ngOnInit(): void {
    this.subcription = this.registeredUsersService.OfficesMatriz$.subscribe((res) => (this.pushOffices = res));
    this.subcription = this.officesHttpService.validFindOffice$.subscribe((res: boolean) => {
      if (res) {
        this.officesForm.markAllAsTouched();
        this.companyControl.addValidators(Validators.required);
      }
    });

    this.company = structuredClone(CompanyObj);

    // if (environment.production) {
    //   this.company.splice(0, 3);
    //   this.company.push({ name: "PRUEBAS", code: "prb" });
    // }
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
      this.officesHttpService
        .getOffices(companyControl.value?.code!)
        .pipe(
          catchError((error) => {
            this.companyControl.reset();
            this.companyControl.clearValidators();
            return this.calledHttpService.errorHandler(error);
          })
        )
        .subscribe((offices) => {
          if (this.pushOffices) offices.unshift(OfficesMatriz.find((f) => f.nombre?.includes(typeCompany.name))!);
          this.officesGet.next(true);
        });
    }
  }
  public changeOffice(): void {
    this.companyControl.untouched;
    this.clienteService.clearClientFound();
    this.sharedService.setClearInvoiceFrom();
    this.paymentsService.clearPayments();
    this.clientCreditService.clearCreditClient();
    this.transactionsService.clearTransactions();
    this.materialService.clearMaterials();
    this.detailPromotionService.clearPromotions();
    this.usersService.clearUsers();
    this.usersAuthorizingService.clearUserAuthorizing();
    this.registeredUsersService.clearRegisteredUser();
    this.openBoxesService.clearOpenBoxes();
    this.ipBoxesService.clearIpBoxes();
    this.plotsVoucherService.clearPlotsVoucher();
    this.giftCardService.clearGiftCards();
  }
  public clearOffice(): void {
    this.officesHttpService.setOffice(null);
    this.clienteService.clearClientFound();
    this.sharedService.setClearInvoiceFrom();
    this.paymentsService.clearPayments();
    this.clientCreditService.clearCreditClient();
    this.transactionsService.clearTransactions();
    this.materialService.clearMaterials();
    this.detailPromotionService.clearPromotions();
    this.usersService.clearUsers();
    this.usersAuthorizingService.clearUserAuthorizing();
    this.registeredUsersService.clearRegisteredUser();
    this.openBoxesService.clearOpenBoxes();
    this.ipBoxesService.clearIpBoxes();
    this.plotsVoucherService.clearPlotsVoucher();
    this.giftCardService.clearGiftCards();
  }

  public toggle(): void {
    this.overlayVisible = !this.overlayVisible;
  }
}
