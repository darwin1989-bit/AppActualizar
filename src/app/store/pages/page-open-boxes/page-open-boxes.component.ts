import { Component, OnDestroy, OnInit } from "@angular/core";
import { OpenBoxesService } from "src/app/store/services/open-boxes.service";

@Component({
  selector: "app-page-open-boxes",
  templateUrl: "./page-open-boxes.component.html",
  styleUrls: ["./page-open-boxes.component.scss"],
})
export class PageOpenBoxesComponent implements OnInit, OnDestroy {
  constructor(public openBoxesService: OpenBoxesService) {}

  ngOnInit(): void {
    this.openBoxesService.isOpenBox(false);
  }
  ngOnDestroy(): void {
    this.openBoxesService.isOpenBox(true);
  }
}
