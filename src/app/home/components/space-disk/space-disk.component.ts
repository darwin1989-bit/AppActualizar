import { Component, Input, OnInit } from "@angular/core";
import { HomeService } from "../../service/home.service";

@Component({
  selector: "app-space-disk",
  templateUrl: "./space-disk.component.html",
  styleUrls: ["./space-disk.component.scss"],
})
export class SpaceDiskComponent implements OnInit {
  @Input() company!: string;

  constructor(public homeService: HomeService) {}

  ngOnInit(): void {
    if (this.company == "eta") this.homeService.getSpaceDisk(this.company);
    if (this.company == "rm") this.homeService.getSpaceDiskRm(this.company);
  }

  public getSeverity(value: string): string {
    if (Number(value) > 7 && Number(value) < 9) return "warning";
    else if (Number(value) > 9) return "danger";
    return "success";
  }

  public getPercentBar(value: string): string {
    if (Number(value) > 7 && Number(value) < 9) return "bg-orange-500 h-full";
    else if (Number(value) > 9) return "bg-red-500 h-full";
    return "bg-green-500 h-full";
  }

  public getPercentText(value: string): string {
    if (Number(value) > 7 && Number(value) < 9) return "text-orange-500 h-full font-bold flex justify-content-center ";
    else if (Number(value) > 9) return "text-red-500 h-full font-bold flex justify-content-center";
    return "text-green-500 h-full font-bold flex justify-content-center";
  }

  public getValue(value: string): object {
    let valuePercent = Number(value) * 10;
    return { width: `${valuePercent}%` };
  }
}
