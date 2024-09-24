import { Component, Input, OnInit } from "@angular/core";
import { HomeService } from "../../service/home.service";
import { LayoutService } from "src/app/layout/service/app.layout.service";

@Component({
  selector: "app-summary-jobs-error",
  templateUrl: "./summary-jobs-error.component.html",
  styles: [],
})
export class SummaryJobsErrorComponent implements OnInit {
  @Input() company!: string;

  constructor(public homeService: HomeService, public layoutService: LayoutService) {}

  ngOnInit(): void {
    if (this.company == "eta") this.homeService.getJobError(this.company);
    if (this.company == "rm") this.homeService.getJobErrorRm(this.company);
  }

  public getSeverity(value: string): string {
    if (Number(value) > 7 && Number(value) < 9) return "warning";
    else if (Number(value) > 9) return "danger";
    return "success";
  }
}
