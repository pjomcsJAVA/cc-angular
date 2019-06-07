import { Component, OnInit, Input, Output } from "@angular/core";
import { ICustomer } from "../../shared/interfaces";
import { LoggerService } from "../../core/services/logger.service";
import { DataService } from "../../core/services/data.service";

@Component({
  selector: "app-cardgrid",
  templateUrl: "./cardgrid.component.html",
  styleUrls: ["./cardgrid.component.css"]
})
export class CardgridComponent implements OnInit {
  @Input() customers: ICustomer[] = [];

  constructor(
    private dataService: DataService,
    private logger: LoggerService
  ) {}

  ngOnInit() {}

  getCustomers() {
    this.dataService.getCustomers().subscribe(
      (customers: ICustomer[]) => {
        this.customers = customers;
      },
      (err: any) => this.logger.log(err),
      () => this.logger.log("getCustomersPage() retrieved customers")
    );
  }
}
