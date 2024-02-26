import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { ICompany } from "src/app/shared/models/offices.interface";
import { OfficesHttpService } from "src/app/shared/services/offices-http.service";
import { OpenBoxesService } from "src/app/store/services/open-boxes.service";

@Component({
  selector: "app-find-open-boxes",
  templateUrl: "./find-open-boxes.component.html",
  styles: [],
})
export class FindOpenBoxesComponent implements OnInit, OnDestroy {
  public company!: ICompany;

  public subcription!: Subscription;

  constructor(private officeService: OfficesHttpService, private openBoxesService: OpenBoxesService) {}

  ngOnInit(): void {
    this.subcription = this.officeService.company$.subscribe((res) => (this.company = res));
  }
  ngOnDestroy(): void {
    if (this.subcription) this.subcription.unsubscribe();
  }

  public findOpenBoxes(): void {
    this.officeService.setValidFindOffice();
    if (this.company.name != "") this.openBoxesService.getOpenBoxes(this.company.code);
  }
}
