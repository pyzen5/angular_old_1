import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompComponent } from './comp.component';
import { DisplayDataComponent } from './display-data/display-data.component';
import { TemplatesyntaxComponent } from './templatesyntax/templatesyntax.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';

const routes: Routes = [
  { path: 'templatesyntax', component: TemplatesyntaxComponent },
  { path: 'displaydata', component: DisplayDataComponent },
  { path: 'lifecycle', component: LifecycleComponent },
  {
    path: '', component: CompComponent, children: [
      {}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompRoutingModule { }
