// tslint:disable-next-line: max-line-length
import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ContentChild } from '@angular/core';
import { LifecycleChildComponent } from '../lifecycle-child/lifecycle-child.component';

// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit, OnChanges, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @ViewChild(LifecycleChildComponent) viewChild: LifecycleChildComponent;
  @ContentChild(LifecycleChildComponent) contentChild: LifecycleChildComponent;

  var1 = 'Hello';
  cp_variable = 'some data';
  constructor() {
    console.log('constructor - parent');
  }

  changeVar1() {
    this.var1 = 'New Data' + Date.now().toString();
  }
  ngOnChanges() {
    console.log('on changes');
  }

  ngOnInit() {
    console.log('init');
  }

  ngDoCheck() {
    console.log('do check');
  }

  ngAfterContentInit() {
    console.log('after content init');
  }

  ngAfterContentChecked() {
    // let a = this.contentChild.hero;
    console.log('after content checked');
  }

  ngAfterViewInit() {
    if (this.viewChild.hero.length > 10) {
      alert('too long');
    }
    console.log('after view init');
  }

  ngAfterViewChecked() {
    if (this.viewChild.hero.length > 10) {
      alert('too long');
    }
    console.log('after view checked');
  }

  ngOnDestroy() {
    console.log('on destroy');
  }

  dispData(event: any) {
    alert(event);
  }

}
