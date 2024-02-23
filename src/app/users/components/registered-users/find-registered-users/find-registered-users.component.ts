import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { OfficesDto } from "src/app/api/api_actualizar/models";
import { ICompany } from "src/app/shared/models/offices.interface";
import { OfficesHttpService } from "src/app/shared/services/offices-http.service";
import { RegisteredUsersService } from "src/app/users/service/registered-users.service";

@Component({
  selector: "app-find-registered-users",
  templateUrl: "./find-registered-users.component.html",
  styles: [],
})
export class FindRegisteredUsersComponent implements OnInit, OnDestroy {
  private subscription!: Subscription;

  private offices!: OfficesDto;
  constructor(private officeService: OfficesHttpService, private registeredUsersService: RegisteredUsersService) {}

  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = this.officeService.offices$.subscribe((res) => (this.offices = res!));
    this.subscription = this.registeredUsersService.loadUserRegistered$.subscribe((res) => {
      if (res) this.findResgisteredUser();
    });
  }

  public findResgisteredUser(): void {
    this.officeService.setValidFindOffice();
    if (Boolean(this.offices)) {
      let office = this.offices.nombre!;

      switch (office) {
        case "MATRIZ ETAFASHION":
          this.registeredUsersService.getRegisteredUserMain("eta");
          break;
        case "MATRIZ ETAFASHION CR":
          this.registeredUsersService.getRegisteredUserMain("cr");
          break;
        case "MATRIZ MODA RM":
          this.registeredUsersService.getRegisteredUserMain("rm");
          break;
        case "MATRIZ PRUEBAS":
          this.registeredUsersService.getRegisteredUserMain("prb");
          break;
        default:
          this.registeredUsersService.getRegisteredUser(this.offices.ip_Red!);
      }
    }
  }
}
