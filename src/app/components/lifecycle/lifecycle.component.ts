import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.scss']
})
export class LifecycleComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  parenthookvar: string;
  showChild:boolean;
  constructor() { }

  ngOnInit(){
    this.parenthookvar = "Lifecycle Variable";
    this.showChild = true;
  }

  toggleChild(){    
    this.showChild = !this.showChild;
  }

  ngOnChanges(changes){
    this.log('--> parent on changes')
  }

  ngDoCheck(){
    this.log('--> parent do check')
  }

  ngAfterContentInit(){
    this.log('--> parent after content init')
  }

  ngAfterContentChecked(){
    this.log('--> parent after content checked')
  }

  ngAfterViewInit(){
    this.log('--> parent after view init')
  }

  ngAfterViewChecked(){
    this.log('--> parent after view checked')
  }

  ngOnDestroy(){
    this.log('--> parent destroy')
  }

  log(msg){
    console.log(msg)
  }
}
