import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { Table } from "primeng/table";
import { Subscription } from "rxjs";
import { OfficesDto, RegisteredUserDto } from "src/app/api/api_actualizar/models";
import { OfficesHttpService } from "src/app/shared/services/offices-http.service";
import { RegisteredUsersService } from "src/app/users/service/registered-users.service";

@Component({
  selector: "app-result-registered-users",
  templateUrl: "./result-registered-users.component.html",
  styles: [
    `
      :host ::ng-deep .p-input-filled .p-inputtext {
        background-color: white;
      }
    `,
  ],
})
export class ResultRegisteredUsersComponent implements OnInit, OnDestroy {
  @ViewChild("dt") tableComponent!: Table;

  @ViewChild("inp") Input!: ElementRef;

  private office!: OfficesDto;

  private subscription!: Subscription;

  constructor(public registeredUsersService: RegisteredUsersService, private officeService: OfficesHttpService) {}

  ngOnInit(): void {
    this.subscription = this.officeService.offices$.subscribe((res) => (this.office = res!));
    this.subscription = this.registeredUsersService.resetTable$.subscribe((res) => {
      if (res) this.reset();
    });
  }
  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
    this.registeredUsersService.clearRegisteredUser();
  }

  public logOut(userRegistered: RegisteredUserDto): void {
    let office = this.office.nombre!;
    userRegistered.estado = "LOGOFF";
    switch (office) {
      case "MATRIZ ETAFASHION":
        this.registeredUsersService.putRegisteredUserMain("eta", userRegistered!);
        break;
      case "MATRIZ ETAFASHION CR":
        this.registeredUsersService.putRegisteredUserMain("cr", userRegistered!);
        break;
      case "MATRIZ MODA RM":
        this.registeredUsersService.putRegisteredUserMain("rm", userRegistered!);
        break;
      case "MATRIZ PRUEBAS":
        this.registeredUsersService.putRegisteredUserMain("prb", userRegistered!);
        break;
      default:
        this.registeredUsersService.putRegisteredUser(this.office.ip_Red!, userRegistered!);
    }
  }
  public onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, "contains");
  }

  private reset(): void {
    if (this.Input) this.Input.nativeElement.value = "";
    if (this.Input) this.tableComponent.filterGlobal("", "");
    if (this.tableComponent) this.tableComponent.reset();
    if (this.tableComponent) this.tableComponent.rows = 5;
  }
}
