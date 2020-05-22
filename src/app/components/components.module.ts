import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { ComponentsComponent } from './components.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { AnchorDirective } from './anchor.directive';
import { Dynamiccomp1Component } from './dynamiccomp1/dynamiccomp1.component';
import { Dynamiccomp2Component } from './dynamiccomp2/dynamiccomp2.component';


@NgModule({
  declarations: [ComponentsComponent, DynamicComponent, AnchorDirective, Dynamiccomp1Component, Dynamiccomp2Component],
  imports: [
    CommonModule,
    ComponentsRoutingModule
  ],
  entryComponents: [Dynamiccomp1Component, Dynamiccomp2Component]
})
export class ComponentsModule { }
