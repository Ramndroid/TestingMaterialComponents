import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SamplesComponent } from './pages/samples/samples.component';
import { TestingComponent } from './pages/testing/testing.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'samples',
    component: SamplesComponent 
  },
  {
    path: 'testing',
    component: TestingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
