import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CustomersRoutingModule } from "./customers-routing.module";
import { CardgridComponent } from "./cardgrid/cardgrid.component";
import { SharedModule } from "../shared/shared.module";
import { CustomerCardComponent } from "./customer-card/customer-card.component";

@NgModule({
  imports: [CommonModule, CustomersRoutingModule, SharedModule],
  declarations: [CardgridComponent, CustomerCardComponent]
})
export class CustomersModule {}
