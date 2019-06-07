import { Component, Input, OnInit } from "@angular/core";
import { ICustomer } from "../../shared/interfaces";
import { ClarityModule } from "@clr/angular";

@Component({
  selector: "app-customer-card",
  templateUrl: "./customer-card.component.html",
  styleUrls: ["./customer-card.component.css"]
})
export class CustomerCardComponent implements OnInit {
  @Input() customer: ICustomer;

  constructor() {}

  ngOnInit() {}
}
