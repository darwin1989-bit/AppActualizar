import { Component } from "@angular/core";
import { ITypeDocument } from "../../models/clients-interface";
import { TypeDocumentObj } from "../../models/clients-object";
import { ClientDto, OfficesDto } from "src/app/api/api_actualizar/models";
import { Subscription } from "rxjs";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { OfficesHttpService } from "src/app/shared/services/offices-http.service";
import { ClientComponentService } from "../../service/client-component.service";

@Component({
  selector: "app-find-client",
  templateUrl: "./find-client.component.html",
  styleUrls: ["./find-client.component.scss"],
})
export class FindClientComponent {
  public selectedDocumentType!: ITypeDocument;

  public inputDisable: boolean = true;

  public dropdownDocumentType = TypeDocumentObj;

  public regDocumentNumber: RegExp = /^[0-9]+$/;

  public messageName: string = "";

  private subcription!: Subscription;

  public documentForm = this.fb.group({
    documentType: ["", Validators.required],
    documentNumber: ["", Validators.required],
  });

  get documentTypeControl(): FormControl {
    return this.documentForm.get("documentType") as FormControl;
  }
  get documentNumberControl(): FormControl {
    return this.documentForm.get("documentNumber") as FormControl;
  }

  constructor(private fb: FormBuilder, private officeService: OfficesHttpService, private clientService: ClientComponentService) {}

  ngOnDestroy(): void {
    if (this.subcription) {
      this.subcription.unsubscribe();
    }
  }

  ngOnInit(): void {}

  public changeDropDown(): void {
    this.clientService.clearClientFound();
    this.documentForm.controls.documentNumber.reset();
    const form = this.documentForm.value;
    const typeControl: any = form.documentType;
    this.messageName = typeControl!.name;

    switch (typeControl!.type) {
      case "C":
        this.documentForm.controls.documentNumber.setValidators([Validators.required, Validators.minLength(10), Validators.maxLength(10)]);
        break;
      case "R":
        this.documentForm.controls.documentNumber.setValidators([Validators.required, Validators.minLength(13), Validators.maxLength(13)]);
        break;
      case "P":
        this.regDocumentNumber = /^[a-zA-Z0-9]+$/;
        this.documentForm.controls.documentNumber.setValidators([Validators.required, Validators.minLength(5), Validators.maxLength(15)]);
        break;
    }
  }
  public findclient(): void {
    let office!: OfficesDto;
    this.subcription = this.officeService.offices$.subscribe((res) => (office = res));
    this.officeService.setValidFindOffice();
    this.documentForm.markAllAsTouched();
    this.documentForm.controls.documentNumber.markAsDirty();

    if (office.ipRed && this.documentForm.valid) {
      const numberId: any = this.documentForm.controls.documentNumber.value;

      this.clientService.getClient(office.ipRed, numberId).subscribe((res) => this.clientService.setClientFound(res));
    }
  }
  public clearClient(): void {
    this.clientService.clearClientFound();
  }
}
