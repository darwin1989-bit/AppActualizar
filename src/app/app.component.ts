import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { PrimeNGConfig } from "primeng/api";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.translate("es");
  }
  title = "Actualizar";
  constructor(private primengConfig: PrimeNGConfig, private translateService: TranslateService) {}

  translate(lang: string) {
    this.translateService.use(lang);
    this.translateService.get("primeng").subscribe((res) => this.primengConfig.setTranslation(res));
  }
}
