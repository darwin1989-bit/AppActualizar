import { Component, OnDestroy, OnInit } from "@angular/core";
import { AbstractControl, FormBuilder, FormControl, ValidationErrors, ValidatorFn, Validators } from "@angular/forms";
import { Subscription } from "rxjs";
import { OfficesDto } from "src/app/api/api_actualizar/models";
import { ITypeMaterials } from "src/app/material/models/material-interface";
import { TypeMaterialObj } from "src/app/material/models/material-objects";
import { MaterialInformationService } from "src/app/material/service/material-information.service";
import { OfficesHttpService } from "src/app/shared/services/offices-http.service";

@Component({
  selector: "app-find-material",
  templateUrl: "./find-material.component.html",
  styleUrls: ["./find-material.component.scss"],
})
export class FindMaterialComponent implements OnInit, OnDestroy {
  private subscription!: Subscription;

  private office!: OfficesDto;

  public moneyLocale!: { money: string; locale: string };

  public dropdownMaterial = TypeMaterialObj;

  public selectedDropdown!: ITypeMaterials;

  public labelName: string = "";

  public materialForm = this.fb.group({
    materialType: [this.selectedDropdown, Validators.required],
    codeMaterial: ["", [Validators.required, Validators.minLength(13), Validators.maxLength(13)]],
  });

  get materialTypeControl(): FormControl<any> {
    return this.materialForm.get("materialType") as FormControl;
  }
  get materialCodeControl(): FormControl {
    return this.materialForm.get("codeMaterial") as FormControl;
  }

  constructor(private fb: FormBuilder, private materialService: MaterialInformationService, private officeService: OfficesHttpService) {}

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.materialCodeControl.disable();
    this.subscription = this.officeService.offices$.subscribe((res) => (this.office = res!));
    this.subscription = this.materialService.loadMaterial$.subscribe((res) => {
      if (res) this.findMaterial();
    });
  }

  public findMaterial(): void {
    this.materialService.clearMaterials();
    this.materialForm.markAllAsTouched();
    this.materialCodeControl.markAsDirty();
    this.officeService.setValidFindOffice();
    if (Boolean(this.office) && this.materialForm.valid) {
      this.materialService.setTypeMaterial(this.materialTypeControl.value, this.materialCodeControl.value);
      if (this.materialTypeControl.value.type == "CV") this.materialService.getMaterial(this.office.ip_Red!, this.materialCodeControl.value);
      if (this.materialTypeControl.value.type == "CB") this.materialService.getMaterialBarcode(this.office.ip_Red!, this.materialCodeControl.value);
      if (this.materialTypeControl.value.type == "EL") this.materialService.getMaterialInformation(this.office.ip_Red!, this.materialCodeControl.value, true);
    }
  }
  public changeDropDown(): void {
    this.materialCodeControl.enable();
    this.materialCodeControl.reset();
    this.materialService.clearMaterials();
    switch (this.materialTypeControl.value.type) {
      case "CG":
        this.materialCodeControl.setValidators([Validators.required, Validators.minLength(13), Validators.maxLength(13), this.codeValidator()]);
        this.labelName = "Código del material";
        break;
      case "CV":
        this.materialCodeControl.setValidators([Validators.required, Validators.minLength(13), Validators.maxLength(16), this.codeValidator()]);
        this.labelName = "Código del material";
        break;
      case "CB":
        this.materialCodeControl.setValidators([Validators.required, Validators.minLength(13), Validators.maxLength(13), this.barcodeValidator()]);
        this.labelName = "Código de barras";
        break;
      case "EL":
        this.materialCodeControl.setValidators([Validators.required, Validators.minLength(13), Validators.maxLength(16)]);
        this.labelName = "Código";
        break;
    }
  }

  public codeMaterialInput(event: KeyboardEvent): void {
    if (event.key == "Enter" || event.key == "Backspace" || event.key == "Delete" || event.key == "shift") this.materialService.clearMaterials();
  }
  private barcodeValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const code: string = control.value;
      if (!code) return null;
      if (code.substring(0, 1) == "2" || code.substring(0, 1) == "4") return null;
      return code ? { barcode: true } : null;
    };
  }
  private codeValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const code: string = control.value;
      if (!code) return null;
      if (code.substring(0, 1) == "5") return null;
      return code ? { codeMaterial: true } : null;
    };
  }
}
