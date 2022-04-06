import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { SamplesComponent } from './samples/samples.component';
import { TestingComponent } from './testing/testing.component';
import { Babcn32Component } from './babcn32/babcn32.component';

import { MaterialModule } from '../components/material.module';
import { ComponentsModule } from '../components/components.module';


@NgModule({
  declarations: [
    HomeComponent,
    SamplesComponent,
    TestingComponent,
    Babcn32Component
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class PagesModule { }
