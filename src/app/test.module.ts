import { NgModule, Component, OnInit, Injectable, Directive, Pipe, PipeTransform } from "@angular/core";
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

@NgModule({})
export class TestModule {
    constructor() { }
}

@Component({
    selector: 'app-test',
    template: `hello`,
})
export class TestComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}

const routeConfig: Routes = [
    { path: '', component: TestComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routeConfig, { preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule]
})
export class TestRouterModule { }

@Injectable({
    providedIn: 'root'
})
export class TestService {

}

@Directive({
    selector: '[appTest]'
})
export class TestDirective {
    constructor() { }
}

@Pipe({
    name: 'test'
})
export class TestPipe implements PipeTransform {
    transform(value, ...args) {
        return value;
    }
}

