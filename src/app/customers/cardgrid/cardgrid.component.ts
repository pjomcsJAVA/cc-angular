import { Component, OnInit, Input } from "@angular/core";
import { ICustomer } from "../../shared/interfaces";

@Component({
  selector: "app-cardgrid",
  templateUrl: "./cardgrid.component.html",
  styleUrls: ["./cardgrid.component.css"]
})
export class CardgridComponent implements OnInit {
  @Input() customers: ICustomer[] = [];

  constructor() {}

  ngOnInit() {}
}
