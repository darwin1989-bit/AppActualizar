import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { SelectItem } from "primeng/api";
import { Subscription } from "rxjs";
import { OfficesDto } from "src/app/api/api_actualizar/models";
import { OfficesHttpService } from "src/app/shared/services/offices-http.service";
import { SellersAssignedService } from "../../services/sellers-assigned.service";
import { ICompany } from "src/app/shared/models/offices.interface";

@Component({
  selector: "app-find-sellers",
  templateUrl: "./find-sellers.component.html",
  styles: [],
})
export class FindSellersComponent implements OnInit, OnDestroy {
  private subscription!: Subscription;

  private office!: OfficesDto;

  private company!: ICompany;

  public dropdown!: SelectItem[];

  public selectedDropdown!: SelectItem;

  public labelName: string = "";

  public labelError!: string;

  public sellerForm = this.fb.group({
    sellerDropdwn: [this.selectedDropdown, Validators.required],
    sellerInput: ["", [Validators.required, Validators.minLength(13), Validators.maxLength(13)]],
  });

  get sellerDropdwnControl(): FormControl<SelectItem> {
    return this.sellerForm.get("sellerDropdwn") as FormControl;
  }
  get sellerInputControl(): FormControl {
    return this.sellerForm.get("sellerInput") as FormControl;
  }

  constructor(private fb: FormBuilder, private officeService: OfficesHttpService, public sellersAssignedService: SellersAssignedService) {}

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.dropdown = [
      { label: "CÓDIGO SAP", value: "cs" },
      { label: "CÉDULA", value: "ce" },
    ];
    this.subscription = this.officeService.offices$.subscribe((res) => (this.office = res!));
    this.subscription = this.officeService.company$.subscribe((res) => (this.company = res!));
  }

  public changeDropDown(): void {
    this.sellerInputControl.reset();
    this.sellersAssignedService.clearTableSellers();
    switch (this.sellerDropdwnControl.value.value) {
      case "cs":
        this.sellerInputControl.setValidators([Validators.required, Validators.minLength(8), Validators.maxLength(8)]);
        this.labelName = "Ingrese el código sap";
        this.sellerInputControl.enable();
        this.labelError = "El código sap ingresado es incorrecto";

        break;
      case "ce":
        this.sellerInputControl.setValidators([Validators.required, Validators.minLength(10), Validators.maxLength(10)]);
        this.labelName = "Ingrese la cédula";
        this.sellerInputControl.enable();
        this.labelError = "La cédula ingresada es incorrecta";
        break;
    }
  }

  public clearResult(event: KeyboardEvent): void {
    if (event.key == "Enter" || event.key == "Backspace" || event.key == "Delete" || event.key == "shift") {
      this.sellersAssignedService.clearTableSellers();
    }
  }

  public findSeller(): void {
    this.sellerForm.markAllAsTouched();
    this.sellerInputControl.markAsDirty();
    this.officeService.setValidFindOffice();
    if (Boolean(this.office) && this.sellerForm.valid) {
      if (this.sellerDropdwnControl.value.value == "ce") {
        this.sellersAssignedService.getSellersAssignedId(this.office.ip_Red!, this.sellerInputControl.value);
        this.sellersAssignedService.getMainSellersAssignedId(this.company.code!, this.sellerInputControl.value);
      } else {
        this.sellersAssignedService.getSellersAssignedSapCode(this.office.ip_Red!, this.sellerInputControl.value);
        this.sellersAssignedService.getMainSellersAssignedSapCode(this.company.code!, this.sellerInputControl.value);
      }
    }
  }
}
