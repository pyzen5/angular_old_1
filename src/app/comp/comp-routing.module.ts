import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompComponent } from './comp.component';
import { DisplayDataComponent } from './display-data/display-data.component';
import { TemplatesyntaxComponent } from './templatesyntax/templatesyntax.component';

const routes: Routes = [
  { path: 'templatesyntax', component: TemplatesyntaxComponent},
  { path: 'displaydata', component: DisplayDataComponent},
  { path: '', component: CompComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompRoutingModule { }
