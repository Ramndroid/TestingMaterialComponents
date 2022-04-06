import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// añadido tras 'ng add @angular/material'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// MATERIAL
import { MatTreeModule } from '@angular/material/tree';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';

// COMPONENTES
import { MaterialTreeComponent } from './material-tree/material-tree.component';
import { MaterialMenuComponent } from './material-menu/material-menu.component';
import { MaterialTabsComponent } from './material-tabs/material-tabs.component';
import { MaterialToolbarComponent } from './material-toolbar/material-toolbar.component';
import { MaterialBasicButtonsComponent } from './material-basic-buttons/material-basic-buttons.component';

// Para poder enrutar las tabs
import { RouterModule } from '@angular/router';
import { Tarea32Component } from './tarea32/tarea32.component';

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
    BrowserAnimationsModule,

    RouterModule,

    // MATERIAL
    MatTreeModule,
    MatCheckboxModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    MatMenuModule,
    MatTabsModule,
    MatToolbarModule,
    MatDividerModule
  ],
  exports: [
    MaterialTreeComponent,
    MaterialMenuComponent,
    MaterialTabsComponent,
    MaterialToolbarComponent,
    MaterialBasicButtonsComponent,
    Tarea32Component
  ]
})
export class MaterialModule { }
