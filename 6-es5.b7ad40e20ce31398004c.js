!function(){function n(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function t(n,t){for(var e=0;e<t.length;e++){var o=t[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function e(n,e,o){return e&&t(n.prototype,e),o&&t(n,o),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{j1ZV:function(t,o,c){"use strict";c.r(o),c.d(o,"ComponentsModule",(function(){return J}));var a,i,r,s,u=c("ofXK"),p=c("tyNb"),f=c("fXoL"),m=((s=function(){function t(){n(this,t)}return e(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(n){return new(n||s)},s.\u0275cmp=f.Bb({type:s,selectors:[["app-dynamiccomp1"]],inputs:{data:"data"},decls:3,vars:1,template:function(n,t){1&n&&(f.Kb(0,"p"),f.lc(1,"dynamiccomp1 works!"),f.Jb(),f.lc(2)),2&n&&(f.xb(2),f.nc("\n",null==t.data?null:t.data.name,""))},styles:[""]}),s),l=((r=function(){function t(){n(this,t)}return e(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(n){return new(n||r)},r.\u0275cmp=f.Bb({type:r,selectors:[["app-dynamiccomp2"]],inputs:{data:"data"},decls:2,vars:0,template:function(n,t){1&n&&(f.Kb(0,"p"),f.lc(1,"dynamiccomp2 works!"),f.Jb())},styles:[""]}),r),d=((i=function(){function t(){n(this,t),this.dynamicComps=[{component:m,data:{name:"Phani"}},{component:l,data:{name:"Phani"}}]}return e(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(n){return new(n||i)},i.\u0275cmp=f.Bb({type:i,selectors:[["app-components"]],decls:5,vars:0,consts:[["routerLink","dynamic"]],template:function(n,t){1&n&&(f.Kb(0,"p"),f.lc(1,"components works!"),f.Jb(),f.Kb(2,"a",0),f.lc(3,"Dynamic"),f.Jb(),f.Ib(4,"router-outlet"))},directives:[p.a,p.c],styles:[""]}),i),b=((a=function t(e){n(this,t),this.viewContainerRef=e}).\u0275fac=function(n){return new(n||a)(f.Hb(f.O))},a.\u0275dir=f.Cb({type:a,selectors:[["","appAnchor",""]]}),a),y=["adhost"];function h(n,t){}var w,v,k,g=[{path:"",component:d,children:[{path:"dynamic",component:(w=function(){function t(e){n(this,t),this.componentFactoryResolver=e,this.componentList=[{component:m,data:{name:"Phani"}},{component:l,data:{name:"Kiran"}}]}return e(t,[{key:"ngOnInit",value:function(){}},{key:"ngAfterViewInit",value:function(){var n=this.componentFactoryResolver.resolveComponentFactory(this.componentList[0].component);this.adhost.viewContainerRef.createComponent(n).instance.data=this.componentList[0].data}}]),t}(),w.\u0275fac=function(n){return new(n||w)(f.Hb(f.j))},w.\u0275cmp=f.Bb({type:w,selectors:[["app-dynamic"]],viewQuery:function(n,t){var e;1&n&&(f.gc(b,!0),f.pc(y,!0,f.O)),2&n&&(f.bc(e=f.Sb())&&(t.anchorHost=e.first),f.bc(e=f.Sb())&&(t.adhost=e.first))},decls:4,vars:0,consts:[["adhost",""]],template:function(n,t){1&n&&(f.Kb(0,"p"),f.lc(1,"dynamic works!"),f.Jb(),f.jc(2,h,0,0,"ng-template",null,0,f.kc))},styles:[""]}),w)}]}],C=((k=function t(){n(this,t)}).\u0275mod=f.Fb({type:k}),k.\u0275inj=f.Eb({factory:function(n){return new(n||k)},imports:[[p.b.forChild(g)],p.b]}),k),J=((v=function t(){n(this,t)}).\u0275mod=f.Fb({type:v}),v.\u0275inj=f.Eb({factory:function(n){return new(n||v)},imports:[[u.b,C]]}),v)}}])}();