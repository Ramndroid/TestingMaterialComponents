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

// COMPONENTES
import { MaterialTreeComponent } from './material-tree/material-tree.component';


@NgModule({
  declarations: [
    MaterialTreeComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,

    // MATERIAL
    MatTreeModule,
    MatCheckboxModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule
  ],
  exports: [
    MaterialTreeComponent
  ]
})
export class MaterialModule { }
