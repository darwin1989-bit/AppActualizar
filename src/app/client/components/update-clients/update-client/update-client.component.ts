import { Component, OnDestroy, OnInit } from "@angular/core";
import { ClientComponentService } from "../../../service/client-component.service";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { IClientNotFound, IEmployee, IGender } from "../../../models/clients-interface";
import { GenderObj, IsEmployedObj } from "../../../models/clients-object";
import { Subscription } from "rxjs";
import { OfficesHttpService } from "src/app/shared/services/offices-http.service";
import { ICompany } from "src/app/shared/models/offices.interface";
import { ClientCreateParams, ClientParamsUpdate, GetCitiesDto, GetClientDto, GetProvincesDto, OfficesDto } from "src/app/api/api_actualizar/models";
import { MenuService } from "src/app/layout/app.menu.service";
import { userData } from "src/app/shared/models/objects";
import { SharedService } from "src/app/shared/services/shared.service";

@Component({
  selector: "app-update-client",
  templateUrl: "./update-client.component.html",
  styleUrls: ["./update-client.component.scss"],
})
export class UpdateClientComponent implements OnInit, OnDestroy {
  public visible: boolean = false;
  public employed: IEmployee[] = IsEmployedObj;
  public gender: IGender[] = GenderObj;
  private subscription!: Subscription;
  private selectedEmployed!: IEmployee;
  private selectedGender!: IGender;
  public onlyAlphabetic: RegExp = /^[a-zA-Z\s]+$/;
  public regEmail: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  private client!: GetClientDto;
  private user!: userData;
  public dialogCreate!: boolean;
  private clientNotFound!: IClientNotFound;
  public provinces!: GetProvincesDto[];
  public cities!: GetCitiesDto[];

  public clientForm = this.fb.group({
    name: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(70)]],
    birthdate: ["", Validators.required],
    isEmployed: [this.selectedEmployed],
    address: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
    email: ["", Validators.required],
    phone: [""],
    cellPhone: ["", [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
  });

  get nameControl(): FormControl {
    return this.clientForm.get("name") as FormControl;
  }
  get birthdateControl(): FormControl {
    return this.clientForm.get("birthdate") as FormControl;
  }
  get isEmployedControl(): FormControl {
    return this.clientForm.get("isEmployed") as FormControl;
  }
  get addressControl(): FormControl {
    return this.clientForm.get("address") as FormControl;
  }
  get emailControl(): FormControl {
    return this.clientForm.get("email") as FormControl;
  }
  get phoneControl(): FormControl {
    return this.clientForm.get("phone") as FormControl;
  }
  get cellPhoneControl(): FormControl {
    return this.clientForm.get("cellPhone") as FormControl;
  }

  public clientCreateForm = this.fb.group({
    numberId: ["", Validators.required],
    typeId: ["", [Validators.required]],
    nameCreate: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(70)]],
    birthdateCreate: ["", Validators.required],
    genderCreate: [this.selectedGender, [Validators.required]],
    provincesCreate: [this.provinces, [Validators.required]],
    citiesCreate: [this.cities, [Validators.required]],
    addressCreate: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(200)]],
    emailCreate: ["", Validators.required],
    phoneCreate: [""],
    cellPhoneCreate: ["", [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
  });

  get numberIdControl(): FormControl {
    return this.clientCreateForm.get("numberId") as FormControl;
  }
  get typeIdControl(): FormControl {
    return this.clientCreateForm.get("typeId") as FormControl;
  }
  get nameCreateControl(): FormControl {
    return this.clientCreateForm.get("nameCreate") as FormControl;
  }
  get birthdateCreateControl(): FormControl {
    return this.clientCreateForm.get("birthdateCreate") as FormControl;
  }
  get genderCreateControl(): FormControl {
    return this.clientCreateForm.get("genderCreate") as FormControl;
  }
  get provincesCreateControl(): FormControl {
    return this.clientCreateForm.get("provincesCreate") as FormControl;
  }
  get citiesCreateControl(): FormControl {
    return this.clientCreateForm.get("citiesCreate") as FormControl;
  }
  get addressCreateControl(): FormControl {
    return this.clientCreateForm.get("addressCreate") as FormControl;
  }
  get emailCreateControl(): FormControl {
    return this.clientCreateForm.get("emailCreate") as FormControl;
  }
  get phoneCreateControl(): FormControl {
    return this.clientCreateForm.get("phoneCreate") as FormControl;
  }
  get cellPhoneCreateControl(): FormControl {
    return this.clientCreateForm.get("cellPhoneCreate") as FormControl;
  }

  constructor(
    public clientService: ClientComponentService,
    private fb: FormBuilder,
    private officeService: OfficesHttpService,
    private menuService: MenuService,
    private sharedService: SharedService
  ) {}

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.subscription = this.menuService.userData.subscribe((user: userData) => (this.user = user));
    this.subscription = this.sharedService.dialogCreateClient$.subscribe((res: boolean) => {
      if (res) {
        this.showDialogCreate();
        this.getProvince();
      } else {
        this.dialogCreate = res;
      }
    });
    this.subscription = this.sharedService.clientNotFound$.subscribe((client) => (this.clientNotFound = client));
  }

  public getProvince(): void {
    let office!: OfficesDto;
    this.subscription = this.officeService.offices$.subscribe((res) => (office = res!));
    this.clientService.getProvinces(office.ip_Red!).subscribe((provinces) => (this.provinces = provinces));
  }
  public getCities(): void {
    let office!: OfficesDto;
    this.subscription = this.officeService.offices$.subscribe((res) => (office = res!));
    const province: GetProvincesDto = this.provincesCreateControl.value;
    this.clientService.getCities(office.ip_Red!, province.zona!).subscribe((city) => (this.cities = city));
  }

  public showDialogCreate(): void {
    this.clientCreateForm.reset();
    this.dialogCreate = true;
    this.numberIdControl.disable();
    this.numberIdControl.patchValue(this.clientNotFound.numberID);
    this.typeIdControl.disable();
    this.typeIdControl.patchValue(this.clientNotFound.typedDocument.name);
    if (this.clientNotFound.typedDocument.type == "R") {
      this.birthdateCreateControl.disable();
      this.genderCreateControl.disable();
    } else {
      this.birthdateCreateControl.enable();
      this.genderCreateControl.enable();
    }
  }

  public showDialog(): void {
    this.clientForm.reset();
    this.visible = true;

    this.subscription = this.clientService.clientFound$.subscribe((res: GetClientDto[]) => {
      this.client = res[0];
      this.clientForm.controls.name.patchValue(res[0].nombre_Razon!);
      this.clientForm.controls.birthdate.patchValue(res[0].cli_Fecha_Nacimiento ? res[0].cli_Fecha_Nacimiento?.replace("-", "/").replace("-", "/").replace("-", "/").substring(0, 10) : "");
      this.clientForm.controls.isEmployed.patchValue(this.returnValueEmployed(res[0].esempleado!));
      this.clientForm.controls.address.patchValue(res[0].direccion!);
      this.clientForm.controls.email.patchValue(res[0].email! == null ? "example@example.com" : res[0].email!);
      this.clientForm.controls.phone.patchValue(res[0].num_Fono1!);
      this.clientForm.controls.cellPhone.patchValue(res[0].num_Fono2! == null ? "9999999999" : res[0].num_Fono2!);

      if (res[0].tipo_Idcliente == "R") {
        this.birthdateControl.disable();
        this.isEmployedControl.disable();
      } else {
        this.birthdateControl.enable();
        this.isEmployedControl.enable();
      }
    });
  }

  private returnValueEmployed(code: string): IEmployee {
    return this.employed.find((r) => r.code === code)!;
  }
  public saveEdit(): void {
    if (!this.clientForm.pristine) {
      const employee = this.clientForm.controls.isEmployed.value;
      let company!: ICompany;
      let office!: OfficesDto;

      const clientEdit: ClientParamsUpdate = {
        nombre_Razon: this.clientForm.controls.name.value!.toUpperCase().trim(),
        nombre_Comercial: this.clientForm.controls.name.value!.toUpperCase().trim(),
        direccion: this.clientForm.controls.address.value!.toUpperCase().trim(),
        cli_Fecha_Nacimiento: this.birthdateControl.value == "" ? null : this.birthdateControl.value,
        email: this.clientForm.controls.email.value?.trim(),
        esempleado: employee?.code,
        num_Fono1: this.clientForm.controls.phone.value == "" || null ? "" : this.clientForm.controls.phone.value,
        num_Fono2: this.clientForm.controls.cellPhone.value == "" || null ? "" : this.clientForm.controls.cellPhone.value,
        usuario_Modificacion: this.user.UserName,
      };

      this.subscription = this.officeService.company$.subscribe((res) => (company = res!));
      this.subscription = this.officeService.offices$.subscribe((res) => (office = res!));
      this.clientService.updateClient(company.code, office.ip_Red!, this.client.numero_Idcliente!, this.client.tipo_Idcliente!, clientEdit).subscribe(() => (this.visible = false));
    }
  }
  public saveCreate(): void {
    let office!: OfficesDto;
    this.subscription = this.officeService.offices$.subscribe((res) => (office = res!));

    this.clientCreateForm.markAllAsTouched();
    if (this.clientCreateForm.valid) {
      const clientCreate: ClientCreateParams = {
        ciudad: this.citiesCreateControl.value.ciudad,
        nombreComercial: this.nameCreateControl.value.toUpperCase().trim(),
        nombreRazon: this.nameCreateControl.value.toUpperCase().trim(),
        cliFechaNacimiento: this.birthdateCreateControl.value,
        email: this.emailCreateControl.value,
        cliSexo: this.clientNotFound.typedDocument.type == "R" ? null : this.genderCreateControl.value.code!,
        tipoIdcliente: this.clientNotFound.typedDocument.type,
        numeroIdcliente: this.clientNotFound.numberID,
        usuarioCreacion: this.user.UserName,
        direccion: this.addressCreateControl.value.toUpperCase().trim(),
        numFono2: this.cellPhoneCreateControl.value,
        numFono1: this.phoneCreateControl.value,
        cliIdLugarReferencia: this.provincesCreateControl.value.zona,
      };

      this.clientService.createClient(office.ip_Red!, this.clientNotFound.numberID, this.clientNotFound.typedDocument.type, clientCreate).subscribe();
    }
  }
  public showRetencion(): void {
    this.clientService.showRetention();
  }
}
