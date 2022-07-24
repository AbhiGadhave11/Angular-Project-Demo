import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgDemoComponent } from './ng-demo/ng-demo.component';
import {FormsModule}from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NgDemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
