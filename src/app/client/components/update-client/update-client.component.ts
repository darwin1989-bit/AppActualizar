import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-update-client",
  templateUrl: "./update-client.component.html",
  styleUrls: ["./update-client.component.scss"],
})
export class UpdateClientComponent implements OnInit {
  selectedState: any;

  dropdownItems = [
    { name: "Option 1", code: "Option 1" },
    { name: "Option 2", code: "Option 2" },
    { name: "Option 3", code: "Option 3" },
  ];

  constructor() {}

  ngOnInit(): void {}
}
