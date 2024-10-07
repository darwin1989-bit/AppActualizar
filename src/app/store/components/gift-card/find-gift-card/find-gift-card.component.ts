import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { Subscription } from "rxjs";
import { ICompany } from "src/app/shared/models/offices.interface";
import { OfficesHttpService } from "src/app/shared/services/offices-http.service";
import { TypeGiftCard, TypeGiftCardObject } from "src/app/store/models/store-models";
import { GiftCardService } from "src/app/store/services/gift-card.service";

@Component({
  selector: "app-find-gift-card",
  templateUrl: "./find-gift-card.component.html",
  styles: [],
})
export class FindGiftCardComponent implements OnInit, OnDestroy {
  public company!: ICompany;

  private subscription!: Subscription;

  public dropdown = TypeGiftCardObject;

  public selectedDropdown!: TypeGiftCard;

  public inputBlock!: RegExp;

  public labelError!: string;

  public labelName: string = "";

  public giftCardForm = this.fb.group({
    selectOption: [this.selectedDropdown, Validators.required],
    identification: ["", [Validators.required, Validators.minLength(10), Validators.maxLength(13)]],
  });

  get selectOptionControl(): FormControl<any> {
    return this.giftCardForm.get("selectOption") as FormControl;
  }
  get identificationControl(): FormControl {
    return this.giftCardForm.get("identification") as FormControl;
  }

  constructor(private fb: FormBuilder, private officeService: OfficesHttpService, private giftCardService: GiftCardService) {}

  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.identificationControl.disable();
    this.subscription = this.officeService.company$.subscribe((res) => (this.company = res!));
  }

  public changeDropDown(): void {
    this.giftCardService.clearGiftCards();
    this.identificationControl.reset();
    let value: TypeGiftCard = this.selectOptionControl.value;
    if (value.type == "nt") {
      this.inputBlock = /^[0-9]+$/;
      this.labelName = "Ingrese el número de tarjeta";
      this.identificationControl.setValidators([Validators.required, Validators.minLength(25), Validators.maxLength(150)]);
      this.labelError = "El número de tarjeta es incorrecta";
    } else {
      this.inputBlock = /^[0-9]+$/;
      this.labelName = "Ingrese la identificación";
      this.identificationControl.setValidators([Validators.required, Validators.minLength(10), Validators.maxLength(13)]);
      this.labelError = "El número de indentificación es incorrecta";
    }
    this.identificationControl.enable();
  }

  public findUsers(): void {
    this.giftCardForm.markAllAsTouched();
    this.identificationControl.markAsDirty();
    this.officeService.setValidFindOffice();

    if (this.company) {
      if (this.company.name != "" && this.giftCardForm.valid) {
        let selectOption: TypeGiftCard = this.selectOptionControl.value;

        if (selectOption.type == "nt") this.giftCardService.getGitCardNumber(this.company.code, this.identificationControl.value);
        else this.giftCardService.getGitCardIdentification(this.company.code, this.identificationControl.value);
      }
    }
  }

  public clearResult(event: KeyboardEvent): void {
    if (event.key == "Enter" || event.key == "Backspace" || event.key == "Delete" || event.key == "shift") {
      this.giftCardService.clearGiftCards();
    }
  }
}
