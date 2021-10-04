import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectBoardRoutingModule } from './project-board-routing.module';
import { ProjectBoardComponent } from './Components/project-board/project-board.component';
import {MatIconModule} from '@angular/material/icon';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatDialogModule} from '@angular/material/dialog';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ProjectBoardComponent
  ],
  imports: [
    CommonModule,  
    ProjectBoardRoutingModule,
    DragDropModule,
    MatIconModule,
    MatDialogModule,
    SharedModule
  ]
})
export class ProjectBoardModule { }
