import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MaterialModule } from './components/material.module';
import { HomeComponent } from './pages/home/home.component';
import { SamplesComponent } from './pages/samples/samples.component';
import { TestingComponent } from './pages/testing/testing.component';
import { Babcn32Component } from './pages/babcn32/babcn32.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SamplesComponent,
    TestingComponent,
    Babcn32Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
