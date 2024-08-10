import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { ICompany } from "src/app/shared/models/offices.interface";
import { OfficesHttpService } from "src/app/shared/services/offices-http.service";
import { StoreOfficesService } from "src/app/store/services/store-offices.service";

@Component({
  selector: "app-find-store-offices",
  templateUrl: "./find-store-offices.component.html",
  styles: [],
})
export class FindStoreOfficesComponent implements OnInit, OnDestroy {
  public company!: ICompany;

  private subscription!: Subscription;

  constructor(private officeService: OfficesHttpService, private storeOfficesService: StoreOfficesService) {}

  ngOnInit(): void {
    this.subscription = this.officeService.company$.subscribe((res) => (this.company = res!));
  }
  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }

  public findOffices(): void {
    this.storeOfficesService.clearStoreOffices();
    this.officeService.setValidFindOffice();
    if (this.company) {
      if (this.company.name != "") this.storeOfficesService.getStoreOffices(this.company.code);
    }
  }
}
