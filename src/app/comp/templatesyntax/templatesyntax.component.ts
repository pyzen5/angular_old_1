import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templatesyntax',
  templateUrl: './templatesyntax.component.html',
  styleUrls: ['./templatesyntax.component.css']
})
export class TemplatesyntaxComponent implements OnInit {
  name = 'somehing';
  help = 'Help Text';
  isSpecial = true;
  constructor() { }

  ngOnInit(): void {
  }

  getVal() {
    return 5;
  }

}
