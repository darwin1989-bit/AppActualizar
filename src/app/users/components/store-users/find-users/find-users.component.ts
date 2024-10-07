import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { Subscription } from "rxjs";
import { OfficesDto } from "src/app/api/api_actualizar/models";
import { ICompany } from "src/app/shared/models/offices.interface";
import { OfficesHttpService } from "src/app/shared/services/offices-http.service";
import { ITypeUsers, TypeUsersObj } from "src/app/users/models/user-models";
import { UsersService } from "src/app/users/service/users.service";

@Component({
  selector: "app-find-users",
  templateUrl: "./find-users.component.html",
  styleUrls: ["./find-users.component.scss"],
})
export class FindUsersComponent implements OnInit, OnDestroy {
  @Output() visbleMain = new EventEmitter<boolean>();

  private subscription!: Subscription;

  private company!: ICompany;

  private office!: OfficesDto;

  public moneyLocale!: { money: string; locale: string };

  public dropdownUsers = TypeUsersObj;

  public selectedDropdown!: ITypeUsers;

  public labelName: string = "";

  public userBlock!: RegExp;

  public labelError!: string;

  public userForm = this.fb.group({
    userType: [this.selectedDropdown, Validators.required],
    userCode: ["", [Validators.required, Validators.minLength(13), Validators.maxLength(13)]],
  });

  get userTypeControl(): FormControl<any> {
    return this.userForm.get("userType") as FormControl;
  }
  get userCodeControl(): FormControl {
    return this.userForm.get("userCode") as FormControl;
  }

  constructor(private fb: FormBuilder, private officeService: OfficesHttpService, private usersService: UsersService) {}

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.subscription = this.officeService.offices$.subscribe((res) => (this.office = res!));
    this.subscription = this.officeService.company$.subscribe((res) => (this.company = res!));
    this;
    this.userCodeControl.disable();
    this.usersService.loadUser$.subscribe((res) => {
      if (res) this.findUsers();
    });
  }

  public findUsers(): void {
    this.userForm.markAllAsTouched();
    this.userCodeControl.markAsDirty();
    this.officeService.setValidFindOffice();
    if (Boolean(this.office) && this.userForm.valid) {
      this.usersService.getIpPosMobile(this.office.ip_Red!);
      if (this.userTypeControl.value.type == "ua") {
        this.usersService.getUsername(this.office.ip_Red!, this.userCodeControl.value);
        this.usersService.getUsernameMain(this.company.code!, this.userCodeControl.value);
      }
      if (this.userTypeControl.value.type == "ce") {
        this.usersService.getIdentificationNumber(this.office.ip_Red!, this.userCodeControl.value);
        this.usersService.getIdentificationNumberMain(this.company.code!, this.userCodeControl.value);
      }
      if (this.userTypeControl.value.type == "tu") {
        this.usersService.getAllUsers(this.office.ip_Red!);
      }
    }
  }
  public changeDropDown(): void {
    this.userCodeControl.reset();
    this.usersService.clearUsers();
    switch (this.userTypeControl.value.type) {
      case "ua":
        this.userCodeControl.setValidators([Validators.required, Validators.minLength(4), Validators.maxLength(65)]);
        this.labelName = "Ingrese el usuario";
        this.userCodeControl.enable();
        this.userBlock = /^[a-zA-Z0-9.]*$/;
        this.labelError = "El usuario ingresado es incorrecto";
        this.visbleMain.emit(true);

        break;
      case "ce":
        this.userCodeControl.setValidators([Validators.required, Validators.minLength(10), Validators.maxLength(10)]);
        this.labelName = "Ingrese la cédula";
        this.userCodeControl.enable();
        this.userBlock = /^[0-9]+$/;
        this.labelError = "La cédula ingresada es incorrecta";
        this.visbleMain.emit(true);
        break;
      case "tu":
        this.labelName = "";
        this.userCodeControl.disable();
        this.visbleMain.emit(false);
        break;
    }
  }

  public clearResult(event: KeyboardEvent): void {
    if (event.key == "Enter" || event.key == "Backspace" || event.key == "Delete" || event.key == "shift") this.usersService.clearUsers();
  }
}
