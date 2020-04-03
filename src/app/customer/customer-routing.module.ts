import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerComponent } from './customer.component';
import { CutomerDashboardComponent } from './customer-dashboard/cutomer-dashboard.component';

const routes: Routes = [
  { path: 'dashboard', component: CutomerDashboardComponent },
  { path: '', component: CustomerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
