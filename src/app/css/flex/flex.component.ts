import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flex',
  templateUrl: './flex.component.html',
  styleUrls: ['./flex.component.css']
})
export class FlexComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  hideThis(t: any) {
    let span = t.target;
    span.style.display = 'none';
  }

}
