import { Component, Input, OnInit } from "@angular/core";
import { HomeService } from "../../service/home.service";
import { LayoutService } from "src/app/layout/service/app.layout.service";

@Component({
  selector: "app-task",
  templateUrl: "./task.component.html",
  styleUrls: ["./task.component.scss"],
})
export class TaskComponent implements OnInit {
  @Input() company!: string;

  constructor(public homeService: HomeService, public layoutService: LayoutService) {}

  ngOnInit(): void {
    if (this.company == "eta") this.homeService.getPayFrom(this.company);
    if (this.company == "rm") this.homeService.getPayFromRm(this.company);
  }
}
