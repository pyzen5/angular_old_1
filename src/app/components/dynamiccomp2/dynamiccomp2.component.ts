import { Component, OnInit, Input } from '@angular/core';
import { Dynamicdata } from '../dynamicdata';

@Component({
  selector: 'app-dynamiccomp2',
  templateUrl: './dynamiccomp2.component.html',
  styleUrls: ['./dynamiccomp2.component.css']
})
export class Dynamiccomp2Component implements OnInit, Dynamicdata {
  @Input() data;
  constructor() { }

  ngOnInit(): void {
  }

}
