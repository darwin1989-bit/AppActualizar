import { Component, Input, OnInit } from "@angular/core";
import { HomeService } from "../../service/home.service";

@Component({
  selector: "app-summary-pay-from",
  templateUrl: "./summary-pay-from.component.html",
  styles: [],
})
export class SummaryPayFromComponent implements OnInit {
  @Input() company!: string;

  polarData: any;

  polarOptions: any;

  constructor(public homeService: HomeService) {}

  ngOnInit(): void {
    this.homeService.getPayFromStore("eta");

    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue("--text-color");
    const textColorSecondary = documentStyle.getPropertyValue("--text-color-secondary");
    const surfaceBorder = documentStyle.getPropertyValue("--surface-border");

    this.homeService.summaryPayFrom$.subscribe((res) => {
      const labels = [];
      const data = [];

      if (res?.electronica_s_Eta! > 0) {
        labels.push("ETA ELECTRÓNICA ACTIVO");
        data.push(res?.electronica_s_Eta);
      }
      if (res?.textile_s_Eta! > 0) {
        labels.push("ETA TEXTIL ACTIVO");
        data.push(res?.textile_s_Eta);
      }
      if (res?.electronica_s_Rm! > 0) {
        labels.push("RM ELECTRÓNICA ACTIVO");
        data.push(res?.electronica_s_Rm);
      }
      if (res?.textile_s_Rm! > 0) {
        labels.push("RM TEXTIL ACTIVO");
        data.push(res?.textile_s_Rm);
      }
      if (res?.electronica_n_Eta! > 0) {
        labels.push("ETA ELECTRÓNICA INACTIVO");
        data.push(res?.electronica_n_Eta);
      }
      if (res?.textile_n_Eta! > 0) {
        labels.push("ETA TEXTIL INACTIVO");
        data.push(res?.textile_n_Eta);
      }
      if (res?.electronica_n_Rm! > 0) {
        labels.push("RM ELECTRÓNICA INACTIVO");
        data.push(res?.electronica_n_Rm);
      }
      if (res?.textile_n_Rm! > 0) {
        labels.push("RM TEXTIL INACTIVO");
        data.push(res?.textile_n_Rm);
      }

      this.polarData = {
        datasets: [
          {
            data: data,
            backgroundColor: [
              documentStyle.getPropertyValue("--gray-900"),
              documentStyle.getPropertyValue("--gray-500"),
              documentStyle.getPropertyValue("--red-100"),
              documentStyle.getPropertyValue("--red-500"),
            ],
            label: "Tiendas",
          },
        ],
        labels: labels,
      };
    });
  }
}
