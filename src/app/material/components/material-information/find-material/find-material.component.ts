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

  public labelName: string = "Código del material";

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
      if (this.materialTypeControl.value.type == "CG") this.materialService.getMaterialGenerics(this.office.ip_Red!, this.materialCodeControl.value);
      if (this.materialTypeControl.value.type == "CV") this.materialService.getMaterialVariants(this.office.ip_Red!, this.materialCodeControl.value);
      if (this.materialTypeControl.value.type == "CB") this.materialService.getMaterialBarcode(this.office.ip_Red!, this.materialCodeControl.value);
    }
  }
  public changeDropDown(): void {
    this.materialCodeControl.reset();
    this.materialService.clearMaterials();
    switch (this.materialTypeControl.value.type) {
      case "CG":
        this.materialCodeControl.setValidators([Validators.required, Validators.minLength(13), Validators.maxLength(13), this.codeValidator()]);
        this.labelName = "Código del material";
        break;
      case "CV":
        this.materialCodeControl.setValidators([Validators.required, Validators.minLength(16), Validators.maxLength(16), this.codeValidator()]);
        this.labelName = "Código del material";
        break;
      case "CB":
        this.materialCodeControl.setValidators([Validators.required, Validators.minLength(13), Validators.maxLength(13), this.barcodeValidator()]);
        this.labelName = "Código de barras";
        break;
    }
  }

  public codeMaterialInput(event: KeyboardEvent): void {
    if (event.key == "Enter" || event.key == "Backspace" || event.key == "Delete" || event.key == "Control" || event.key == "shift") this.materialService.clearMaterials();
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
