import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTaskDialogComponent } from './add-task-dialog/add-task-dialog.component';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';

import {MatSelectModule} from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AddTaskDialogComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSelectModule
  ],
  exports:[
    AddTaskDialogComponent
  ]
})
export class SharedModule { }