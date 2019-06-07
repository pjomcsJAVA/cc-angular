import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CardgridComponent } from "./customers/cardgrid/cardgrid.component";
import { HeaderComponent } from "./shared/header/header.component";

const routes: Routes = [
  {
    path: "customers",
    loadChildren: "./customers/customers.module#CustomersModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
