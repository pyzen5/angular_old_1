import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompRoutingModule } from './comp-routing.module';
import { CompComponent } from './comp.component';
import { DisplayDataComponent } from './display-data/display-data.component';
import { TemplatesyntaxComponent } from './templatesyntax/templatesyntax.component';


@NgModule({
  declarations: [CompComponent, DisplayDataComponent, TemplatesyntaxComponent],
  imports: [
    CommonModule,
    CompRoutingModule
  ]
})
export class CompModule { }
