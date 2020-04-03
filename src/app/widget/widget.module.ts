import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatagridComponent } from './datagrid/datagrid.component';

@NgModule({
  declarations: [DatagridComponent],
  exports: [DatagridComponent],
  imports: [
    CommonModule
  ]
})
export class WidgetModule { }
