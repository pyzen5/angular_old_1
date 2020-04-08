import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CompRoutingModule } from './comp-routing.module';
import { CompComponent } from './comp.component';
import { DisplayDataComponent } from './display-data/display-data.component';
import { TemplatesyntaxComponent } from './templatesyntax/templatesyntax.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { LifecycleChildComponent } from './lifecycle-child/lifecycle-child.component';


@NgModule({
  declarations: [CompComponent, DisplayDataComponent, TemplatesyntaxComponent, LifecycleComponent, LifecycleChildComponent],
  imports: [
    CommonModule,
    CompRoutingModule,
    FormsModule
  ]
})
export class CompModule { }
