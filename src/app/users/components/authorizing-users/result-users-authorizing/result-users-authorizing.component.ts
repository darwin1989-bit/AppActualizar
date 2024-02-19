import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { AuthorizingUserDto, OfficesDto } from "src/app/api/api_actualizar/models";
import { OfficesHttpService } from "src/app/shared/services/offices-http.service";
import { UsersAuthorizingService } from "src/app/users/service/users-authorizing.service";

@Component({
  selector: "app-result-users-authorizing",
  templateUrl: "./result-users-authorizing.component.html",
  styles: [],
})
export class ResultUsersAuthorizingComponent implements OnInit, OnDestroy {
  private office!: OfficesDto;

  private subscription!: Subscription;

  constructor(public usersAuthorizingService: UsersAuthorizingService, private officeService: OfficesHttpService) {}
  ngOnInit(): void {
    this.subscription = this.officeService.offices$.subscribe((res) => (this.office = res!));
  }
  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }

  public changeDayAuthorizing(userAuthorizing: AuthorizingUserDto, minusAndPlus: boolean): void {
    if (minusAndPlus) userAuthorizing.hasta = userAuthorizing.hasta! * 2;
    else userAuthorizing.hasta = userAuthorizing.parameterization?.until;

    this.usersAuthorizingService.updateAuthorizingUser(this.office.ip_Red!, userAuthorizing);
  }
}
