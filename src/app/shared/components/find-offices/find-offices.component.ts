import { Component, OnDestroy, OnInit } from "@angular/core";
import { OfficesHttpService } from "../../services/offices-http.service";
import { OfficesDto } from "src/app/api/api_actualizar/models/offices-dto";
import { AutoCompleteCompleteEvent, ICompany } from "../../models/offices.interface";
import { DataCompany, DataOffice } from "../../models/objects";

@Component({
  selector: "app-find-offices",
  templateUrl: "./find-offices.component.html",
  styleUrls: ["./find-offices.component.scss"],
})
export class FindOfficesComponent implements OnInit, OnDestroy {
  public company: ICompany[] = [DataCompany];
  public selectedCompany!: ICompany;

  public offices: OfficesDto[] = [DataOffice];
  public selectedOffice!: OfficesDto;

  constructor(public officesHttpService: OfficesHttpService) {}

  ngOnDestroy(): void {
    this.officesHttpService.setOffice({});
  }

  ngOnInit(): void {
    this.company = [
      // { name: "ETAFASHION", code: "eta" },
      // { name: "MODA RM", code: "rm" },
      { name: "ETAFASHION CR", code: "cr" },
      { name: "PRUEBAS", code: "prb" },
    ];
  }

  public changeCompany(): void {
    this.offices = [DataOffice];
    if (this.selectedCompany) {
      this.officesHttpService.getOffices(this.selectedCompany.code).subscribe((offices) => {
        this.offices = offices;
      });
    }
  }
  public changeOffice(): void {
    if (this.selectedOffice) this.officesHttpService.setOffice(this.selectedOffice);
  }
  public clearOffice(): void {
    this.officesHttpService.setOffice(DataOffice);
  }
}
