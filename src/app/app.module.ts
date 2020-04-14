import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceModule } from './service/service.module';
import { WidgetModule } from './widget/widget.module';
import { HeaderComponent } from './common/header/header.component';
import { HomeComponent } from './common/home/home.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StructuralDirective } from './directives/structural.directive';
import { AttributeDirective } from './directives/attribute.directive';
import { DirectivesComponent } from './pages/directives/directives.component';
import { PurePipe } from './pipe/pure.pipe';
import { ImpurePipe } from './pipe/impure.pipe';
import { PipesComponent } from './pages/pipes/pipes.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    StructuralDirective,
    AttributeDirective,
    DirectivesComponent,
    PurePipe,
    ImpurePipe,
    PipesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ServiceModule,
    WidgetModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
