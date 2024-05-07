import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Subscription } from "rxjs";
import { IpPosMobileDto, UpdateUserDto } from "src/app/api/api_actualizar/models";
import { ICompany } from "src/app/shared/models/offices.interface";
import { OfficesHttpService } from "src/app/shared/services/offices-http.service";
import { ISelect, SelectStatus } from "src/app/users/models/user-models";
import { UsersService } from "src/app/users/service/users.service";

@Component({
  selector: "app-edit-user",
  templateUrl: "./edit-user.component.html",
  styleUrls: ["./edit-user.component.scss"],
})
export class EditUserComponent implements OnInit, OnDestroy {
  public company!: ICompany;

  public visible!: boolean;

  public onlyNumber: RegExp = /^[0-9]+$/;

  private subscription!: Subscription;

  public statusUser: ISelect[] = SelectStatus;

  private selectedStatus!: ISelect;

  private selectedIpPosMobile!: IpPosMobileDto;

  public ipPosMobileUser!: IpPosMobileDto[];

  public userForm = new FormGroup({
    nombreCorto: new FormControl(),
    cedula: new FormControl("", [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
    estado: new FormControl(this.selectedStatus),
    ipPosMobileUser: new FormControl(this.selectedIpPosMobile),
  });

  get nombreCortoControl(): FormControl {
    return this.userForm.get("nombreCorto") as FormControl;
  }
  get cedulaControl(): FormControl {
    return this.userForm.get("cedula") as FormControl;
  }
  get estadoControl(): FormControl {
    return this.userForm.get("estado") as FormControl;
  }
  get ipPosMobileUserControl(): FormControl {
    return this.userForm.get("ipPosMobileUser") as FormControl;
  }

  constructor(public usersService: UsersService, private officeService: OfficesHttpService) {}

  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
    this.usersService.closeDialog();
    this.userForm.reset();
  }

  ngOnInit(): void {
    this.subscription = this.usersService.editUserDialog$.subscribe((res) => (this.visible = res));
    this.subscription = this.usersService.editUser$.subscribe((res) => {
      this.userForm.controls.nombreCorto.disable();
      this.userForm.controls.nombreCorto.patchValue(res.nombreCorto!);
      if (res.cedula != "") this.userForm.controls.cedula.disable();
      else this.userForm.controls.cedula.enable();
      this.userForm.controls.cedula.patchValue(res.cedula!);
      this.userForm.controls.estado.patchValue(this.statusUser.find((f) => f.name == res.estado!)!);
      this.usersService.ipPosMobile$.subscribe((resIp) => {
        this.ipPosMobileUser = resIp;
        this.userForm.controls.ipPosMobileUser.patchValue(this.ipPosMobileUser.find((f) => f.ipCliente == res.ipPosmobile!)!);
      });
    });
    this.subscription = this.officeService.company$.subscribe((res) => (this.company = res!));
  }

  saveEditUser(): void {
    this.userForm.markAllAsTouched();
    this.cedulaControl.markAsDirty();
    if (this.userForm.valid) {
      const estado: ISelect = this.estadoControl.value;
      const ipPosMobile: IpPosMobileDto = this.ipPosMobileUserControl.value;
      const userUpdate: UpdateUserDto = {
        nombreCorto: this.nombreCortoControl.value,
        cedula: this.cedulaControl.value,
        estado: Number(estado.type),
        ipPosMobile: ipPosMobile ? ipPosMobile.ipCliente : null,
      };

      this.usersService.updateUser(this.company.code, userUpdate);
    }
  }
}
