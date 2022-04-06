import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// COMPONENTES
import { MaterialTreeComponent } from './material-tree/material-tree.component';
import { MaterialMenuComponent } from './material-menu/material-menu.component';
import { MaterialTabsComponent } from './material-tabs/material-tabs.component';
import { MaterialToolbarComponent } from './material-toolbar/material-toolbar.component';
import { MaterialBasicButtonsComponent } from './material-basic-buttons/material-basic-buttons.component';
import { Tarea32Component } from './tarea32/tarea32.component';
import { MaterialModule } from './material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    MaterialTreeComponent,
    MaterialMenuComponent,
    MaterialTabsComponent,
    MaterialToolbarComponent,
    MaterialBasicButtonsComponent,
    Tarea32Component    
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports: [
    MaterialTreeComponent,
    MaterialMenuComponent,
    MaterialTabsComponent,
    MaterialToolbarComponent,
    MaterialBasicButtonsComponent,
    Tarea32Component,
    MaterialModule
  ]
})
export class ComponentsModule { }
