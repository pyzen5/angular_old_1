import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReusableComponent } from './reusable.component';

const routes: Routes = [{ path: '', component: ReusableComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReusableRoutingModule { }
