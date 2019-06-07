import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SharedRoutingModule } from "./shared-routing.module";
import { HeaderComponent } from "../shared/header/header.component";
import { ClarityModule } from "@clr/angular";

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, SharedRoutingModule, ClarityModule],
  exports: [HeaderComponent]
})
export class SharedModule {}
