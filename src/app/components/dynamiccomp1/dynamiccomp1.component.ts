import { Component, OnInit, Input } from '@angular/core';
import { Dynamicdata } from '../dynamicdata';

@Component({
  selector: 'app-dynamiccomp1',
  templateUrl: './dynamiccomp1.component.html',
  styleUrls: ['./dynamiccomp1.component.css']
})
export class Dynamiccomp1Component implements OnInit, Dynamicdata {
  @Input() data;
  constructor() { }

  ngOnInit(): void {
  }

}
