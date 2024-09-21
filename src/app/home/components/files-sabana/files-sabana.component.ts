import { Component, OnInit } from "@angular/core";
import { HomeService } from "../../service/home.service";

@Component({
  selector: "app-files-sabana",
  templateUrl: "./files-sabana.component.html",
  styles: [],
})
export class FilesSabanaComponent implements OnInit {
  constructor(public homeService: HomeService) {}

  ngOnInit(): void {
    this.homeService.getFilesSabana();
  }

  public getSeverity(value: string): string {
    if (value != "CORRECTO") return "danger";
    return "success";
  }
}
