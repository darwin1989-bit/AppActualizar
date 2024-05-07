import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { OfficesDto } from "src/app/api/api_actualizar/models";
import { OfficesHttpService } from "src/app/shared/services/offices-http.service";
import { IpBoxesService } from "src/app/store/services/ip-boxes.service";

@Component({
  selector: "app-find-ip-boxes",
  templateUrl: "./find-ip-boxes.component.html",
  styles: [],
})
export class FindIpBoxesComponent implements OnInit, OnDestroy {
  private subscription!: Subscription;

  private offices!: OfficesDto;

  constructor(private officeService: OfficesHttpService, private ipBoxesService: IpBoxesService) {}

  ngOnInit(): void {
    this.subscription = this.officeService.offices$.subscribe((res) => (this.offices = res!));
    this.subscription = this.ipBoxesService.loadNewIp$.subscribe((res) => {
      if (res) this.findIpBoxes();
    });
  }
  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }
  public findIpBoxes(): void {
    this.officeService.setValidFindOffice();
    this.ipBoxesService.clearIpBoxes();
    if (this.offices) this.ipBoxesService.getIpClient(this.offices.ip_Red!);
  }
}
