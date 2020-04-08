// tslint:disable-next-line: max-line-length
import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, Input, Output, SimpleChanges, EventEmitter } from '@angular/core';

// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'app-lifecycle-child',
  templateUrl: './lifecycle-child.component.html',
  styleUrls: ['./lifecycle-child.component.css']
})
export class LifecycleChildComponent implements OnInit, OnChanges, DoCheck,
AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() info: string;
  @Output() display = new EventEmitter();
  hero;
  constructor() {
    console.log('constructor - child');
  }

  displayData() {
    this.display.emit('Message from Child');
  }

  ngOnChanges(sc: SimpleChanges) {
    let a1 = sc.info;
    console.log('child - on changes');
  }

  ngOnInit() {
    console.log('child - init');
  }

  ngDoCheck() {
    console.log('child - do check');
  }

  ngAfterContentInit() {
    console.log('child - after content init');
  }

  ngAfterContentChecked() {
    console.log('child - after content checked');
  }

  ngAfterViewInit() {
    console.log('child - after view init');
  }

  ngAfterViewChecked() {
    console.log('child - after view checked');
  }

  ngOnDestroy() {
    console.log('child - on destroy');
  }

}
