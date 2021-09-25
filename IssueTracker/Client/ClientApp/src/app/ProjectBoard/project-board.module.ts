import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectBoardRoutingModule } from './project-board-routing.module';
import { ProjectBoardComponent } from './Components/project-board/project-board.component';


@NgModule({
  declarations: [
    ProjectBoardComponent
  ],
  imports: [
    CommonModule,
    ProjectBoardRoutingModule
  ]
})
export class ProjectBoardModule { }
