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

  constructor(private usersAuthorizingService: UsersAuthorizingService, private officeService: OfficesHttpService) {}

  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = this.officeService.offices$.subscribe((res) => (this.office = res!));
  }

  public findUserAuthorizing(): void {
    this.officeService.setValidFindOffice();
    this.usersAuthorizingService.getAuthorizingUser(this.office.ip_Red!);
  }
}
