import { Component, OnInit } from '@angular/core';
import { Dynamiccomp1Component } from './dynamiccomp1/dynamiccomp1.component';
import { Dynamiccomp2Component } from './dynamiccomp2/dynamiccomp2.component';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.css']
})
export class ComponentsComponent implements OnInit {
  dynamicComps = [
    {component: Dynamiccomp1Component, data: {name: 'Phani'}},
    {component: Dynamiccomp2Component, data: {name: 'Phani'}}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
