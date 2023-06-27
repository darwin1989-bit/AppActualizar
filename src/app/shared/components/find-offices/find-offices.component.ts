import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-find-offices",
  templateUrl: "./find-offices.component.html",
  styleUrls: ["./find-offices.component.scss"],
})
export class FindOfficesComponent implements OnInit {
  countries!: any[];

  selectedCountry!: string;

  constructor() {}

  ngOnInit(): void {
    this.countries = [
      { name: "Australia", code: "AU" },
      { name: "Brazil", code: "BR" },
      { name: "China", code: "CN" },
      { name: "Egypt", code: "EG" },
      { name: "France", code: "FR" },
      { name: "Germany", code: "DE" },
      { name: "India", code: "IN" },
      { name: "Japan", code: "JP" },
      { name: "Spain", code: "ES" },
      { name: "United States", code: "US" },
    ];
  }
}
