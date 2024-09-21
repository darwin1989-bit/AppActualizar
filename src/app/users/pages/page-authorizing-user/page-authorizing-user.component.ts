import { Component, OnDestroy, OnInit } from "@angular/core";
import { UsersAuthorizingService } from "../../service/users-authorizing.service";
import { OfficesHttpService } from "src/app/shared/services/offices-http.service";
import { OfficesDto } from "src/app/api/api_actualizar/models";
import { Subscription } from "rxjs";

@Component({
  selector: "app-page-authorizing-user",
  templateUrl: "./page-authorizing-user.component.html",
  styleUrls: ["./page-authorizing-user.component.scss"],
})
export class PageAuthorizingUserComponent implements OnInit, OnDestroy {
  private office!: OfficesDto;

  private subscription!: Subscription;

  constructor(private officeService: OfficesHttpService, private usersAuthorizingService: UsersAuthorizingService) {}

  ngOnInit(): void {
    this.subscription = this.officeService.offices$.subscribe((res) => (this.office = res!));
  }
  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }

  public findUserAuthorizing(): void {
    this.officeService.setValidFindOffice();
    if (Boolean(this.office)) {
      this.usersAuthorizingService.getAuthorizingUser(this.office.ip_Red!);
      this.usersAuthorizingService.getAuthorizerNc(this.office.ip_Red!);
    }
  }
}
