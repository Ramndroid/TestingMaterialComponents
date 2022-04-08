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

// Para poder enrutar las tabs
import { RouterModule } from '@angular/router';

const material = [
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
];

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
    [...material]
  ], exports: [
    [...material]
  ]
})
export class MaterialModule { }
