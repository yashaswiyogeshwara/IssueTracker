import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTaskDialogComponent } from './add-task-dialog/add-task-dialog.component';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker'
import {MatNativeDateModule} from '@angular/material/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatDialogModule } from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatChipsModule} from '@angular/material/chips';
import { AddProjectDialogeComponent } from './add-project-dialoge/add-project-dialoge.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    AddTaskDialogComponent,
    AddProjectDialogeComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    DragDropModule,
    MatIconModule,
    MatDialogModule,
    MatChipsModule,
    MatFormFieldModule,
    MatTableModule
  ],
  exports:[
    AddProjectDialogeComponent,
    AddTaskDialogComponent,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    DragDropModule,
    MatIconModule,
    MatDialogModule,
    MatChipsModule,
    MatFormFieldModule,
    MatTableModule
  ]
})
export class SharedModule { }
