import { Component, OnInit, Input, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-lifecyclechild',
  templateUrl: './lifecyclechild.component.html',
  styleUrls: ['./lifecyclechild.component.scss']
})
export class LifecyclechildComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input('hookvar') HookVariable;
  ChildVariable:string;
  constructor() { }

  ngOnChanges(changes){
    this.log('----> child on changes')
  }

  ngOnInit() {
    this.ChildVariable = "Child Value";
    this.log('----> child on init')
  }

  ngDoCheck(){
    this.log('----> child do check')
  }

  ngAfterContentInit(){
    this.log('----> child after content init')
  }

  ngAfterContentChecked(){
    this.log('----> child after content checked')
  }

  ngAfterViewInit(){
    this.log('----> child after view init')
  }

  ngAfterViewChecked(){
    this.log('----> child after view checked')
  }

  ngOnDestroy(){
    this.log('----> child destroy')
  }

  log(msg){
    console.log(msg)
  }

}
