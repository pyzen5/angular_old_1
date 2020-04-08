import { Component, OnInit } from '@angular/core';
import { Person } from '../models/person';

@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.css']
})
export class DisplayDataComponent implements OnInit {
  var1 = 'Interpolated Text';
  var2 = ['Mango', 'Banana', 'Apple'];
  var3 = true;
  var4: Person[];

  constructor() { }

  ngOnInit(): void {
    this.var4 = [
      new Person('Phani', 'Bangalore'),
      new Person('Kiran', 'Kadapa'),
    ];
  }

  // trackByItems(index: number, item: Item): number { return item.id; }

}
