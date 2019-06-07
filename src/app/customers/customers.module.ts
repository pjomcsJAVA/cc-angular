import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CustomersRoutingModule } from "./customers-routing.module";
import { CardgridComponent } from "./cardgrid/cardgrid.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  imports: [CommonModule, CustomersRoutingModule, SharedModule],
  declarations: [CardgridComponent]
})
export class CustomersModule {}
