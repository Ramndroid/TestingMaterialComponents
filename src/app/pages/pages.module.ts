import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { SamplesComponent } from './samples/samples.component';
import { TestingComponent } from './testing/testing.component';

import { ComponentsModule } from '../components/components.module';


@NgModule({
  declarations: [
    HomeComponent,
    SamplesComponent,
    TestingComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class PagesModule { }
