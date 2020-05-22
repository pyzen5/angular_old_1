import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CssRoutingModule } from './css-routing.module';
import { CssComponent } from './css.component';
import { FlexComponent } from './flex/flex.component';


@NgModule({
  declarations: [CssComponent, FlexComponent],
  imports: [
    CommonModule,
    CssRoutingModule
  ]
})
export class CssModule { }
