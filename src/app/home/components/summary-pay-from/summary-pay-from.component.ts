import { Component, Input, OnInit } from "@angular/core";
import { HomeService } from "../../service/home.service";

@Component({
  selector: "app-summary-pay-from",
  templateUrl: "./summary-pay-from.component.html",
  styles: [
    `
      :host ::ng-deep .mt-3 {
        margin-top: 6.6rem;
      }
    `,
  ],
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
      const backgroundColor = [];

      if (res?.textile_s_Eta! > 0) {
        labels.push("ETA TEXTIL ACTIVO");
        data.push(res?.textile_s_Eta);
        backgroundColor.push(documentStyle.getPropertyValue("--gray-900"));
      }
      if (res?.textile_n_Eta! > 0) {
        labels.push("ETA TEXTIL INACTIVO");
        data.push(res?.textile_n_Eta);
        backgroundColor.push(documentStyle.getPropertyValue("--gray-400"));
      }
      if (res?.electronica_s_Eta! > 0) {
        labels.push("ETA ELECTRÓNICA ACTIVO");
        data.push(res?.electronica_s_Eta);
        backgroundColor.push(documentStyle.getPropertyValue("--bluegray-900"));
      }
      if (res?.electronica_n_Eta! > 0) {
        labels.push("ETA ELECTRÓNICA INACTIVO");
        data.push(res?.electronica_n_Eta);
        backgroundColor.push(documentStyle.getPropertyValue("--bluegray-500"));
      }

      if (res?.textile_s_Rm! > 0) {
        labels.push("RM TEXTIL ACTIVO");
        data.push(res?.textile_s_Rm);
        backgroundColor.push(documentStyle.getPropertyValue("--red-500"));
      }
      if (res?.textile_n_Rm! > 0) {
        labels.push("RM TEXTIL INACTIVO");
        data.push(res?.textile_n_Rm);
        backgroundColor.push(documentStyle.getPropertyValue("--red-300"));
      }
      if (res?.electronica_s_Rm! > 0) {
        labels.push("RM ELECTRÓNICA ACTIVO");
        data.push(res?.electronica_s_Rm);
        backgroundColor.push(documentStyle.getPropertyValue("--orange-500"));
      }
      if (res?.electronica_n_Rm! > 0) {
        labels.push("RM ELECTRÓNICA INACTIVO");
        data.push(res?.electronica_n_Rm);
        backgroundColor.push(documentStyle.getPropertyValue("--orange-300"));
      }

      this.polarData = {
        datasets: [
          {
            data: data,
            backgroundColor: backgroundColor,
            label: "Tiendas",
          },
        ],
        labels: labels,
      };
    });
  }
}
