import { Component, OnInit } from "@angular/core";
import { CalledHttpService } from "../../services/called-http.service";

@Component({
  selector: "app-load-panel",
  templateUrl: "./load-panel.component.html",
  styleUrls: ["./load-panel.component.scss"],
})
export class LoadPanelComponent implements OnInit {
  blocked$ = this.callHttpService.isLoading$;
  blocked: boolean = false;

  constructor(private readonly callHttpService: CalledHttpService) {}

  ngOnInit(): void {}
}
