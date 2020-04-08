import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'customer', loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule) },
  { path: 'comp', loadChildren: () => import('./comp/comp.module').then(m => m.CompModule) },
  { path: 'reusable', loadChildren: () => import('./reusable/reusable.module').then(m => m.ReusableModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
