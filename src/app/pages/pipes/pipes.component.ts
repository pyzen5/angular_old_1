import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  curDate = new Date();
  impureObj = {
    name: ''
  };
  test = 'helo';

  constructor() { }

  ngOnInit(): void {
    this.impureObj.name = 'phani';
  }

}
