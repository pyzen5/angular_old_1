import { Component, OnInit, ViewChild, ComponentFactoryResolver, ComponentFactory, AfterViewInit, ViewContainerRef } from '@angular/core';
import { AnchorDirective } from '../anchor.directive';
import { Dynamiccomp1Component } from '../dynamiccomp1/dynamiccomp1.component';
import { Dynamiccomp2Component } from '../dynamiccomp2/dynamiccomp2.component';
import { Dynamicdata } from '../dynamicdata';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css']
})
export class DynamicComponent implements OnInit, AfterViewInit {
  @ViewChild(AnchorDirective, { static: true }) anchorHost: AnchorDirective;
  @ViewChild('adhost', { read: ViewContainerRef }) adhost;

  componentList = [
    { component: Dynamiccomp1Component, data: { name: 'Phani' } },
    { component: Dynamiccomp2Component, data: { name: 'Kiran' } }
  ];
  constructor(public componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.componentList[0].component);

    const viewContainerRef = this.adhost.viewContainerRef;
    // const viewContainerRef = this.anchorHost.viewContainerRef;
    // viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    ( componentRef.instance as Dynamicdata).data = this.componentList[0].data;
  }

}
