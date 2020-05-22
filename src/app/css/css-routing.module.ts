import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CssComponent } from './css.component';
import { FlexComponent } from './flex/flex.component';

const routes: Routes = [{
  path: '',
  component: CssComponent,
  children: [
    { path: 'flex', component: FlexComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CssRoutingModule { }
