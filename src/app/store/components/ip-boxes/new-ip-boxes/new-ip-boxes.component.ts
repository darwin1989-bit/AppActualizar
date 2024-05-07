import { Component, OnDestroy, OnInit } from "@angular/core";
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from "@angular/forms";
import { SelectItem } from "primeng/api";
import { Subscription } from "rxjs";
import { IpClientDto, OfficesDto } from "src/app/api/api_actualizar/models";
import { OfficesHttpService } from "src/app/shared/services/offices-http.service";
import { IpBoxesService } from "src/app/store/services/ip-boxes.service";

@Component({
  selector: "app-new-ip-boxes",
  templateUrl: "./new-ip-boxes.component.html",
  styles: [],
})
export class NewIpBoxesComponent implements OnInit, OnDestroy {
  private offices!: OfficesDto;

  private subscription!: Subscription;

  public dialog: boolean = true;

  public entryIp: RegExp = /^[0-9.]+$/;

  public selectedDropdown!: SelectItem;

  public dropdownTypeImpresora!: SelectItem[];

  public ipClientForm = new FormGroup({
    numberIp: new FormControl("", [Validators.required, Validators.minLength(7), Validators.maxLength(15), this.ipValidator()]),
    numberBox: new FormControl("", [Validators.required, Validators.minLength(1), Validators.maxLength(3)]),
    typePrinter: new FormControl(this.selectedDropdown, Validators.required),
  });

  get numberIpControl(): FormControl {
    return this.ipClientForm.get("numberIp") as FormControl;
  }
  get numberBoxControl(): FormControl {
    return this.ipClientForm.get("numberBox") as FormControl;
  }
  get typePrinterControl(): FormControl {
    return this.ipClientForm.get("typePrinter") as FormControl;
  }

  constructor(public ipBoxesService: IpBoxesService, private officeService: OfficesHttpService) {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.numberBoxControl.reset();
  }

  ngOnInit(): void {
    this.subscription = this.officeService.offices$.subscribe((res) => (this.offices = res!));

    this.subscription = this.ipBoxesService.dialogNewIp$.subscribe((res) => {
      this.dialog = res;
      this.ipClientForm.reset();
    });

    this.dropdownTypeImpresora = [
      { label: "TÉRMICA CONTROLADOR", value: "TERMICA CONTROLADOR" },
      { label: "MATRICIAL", value: "MATRICIAL" },
    ];
  }

  public saveIpClient(): void {
    this.ipClientForm.markAllAsTouched();
    if (this.ipClientForm.valid) {
      let aa = this.typePrinterControl.value;
      let ipClient: IpClientDto = {
        ipServidor: this.offices.ip_Red,
        ipCliente: this.numberIpControl.value,
        numeroCaja: this.numberBoxControl.value,
        tipoImpresora: aa.value,
      };

      this.ipBoxesService.postInsertIpClient(this.offices.ip_Red!, ipClient);
    }
  }

  private ipValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const ip: string = control.value;

      let regexIp: RegExp = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

      let result = regexIp.test(ip);

      if (ip == "") return null;

      return !result ? { ipValidator: true } : null;
    };
  }
}
