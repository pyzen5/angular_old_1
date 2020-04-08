import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceModule } from './service/service.module';
import { WidgetModule } from './widget/widget.module';
import { HeaderComponent } from './common/header/header.component';
import { HighlightDirective } from './common/highlight.directive';
import { HomeComponent } from './common/home/home.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HighlightDirective,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ServiceModule,
    WidgetModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
