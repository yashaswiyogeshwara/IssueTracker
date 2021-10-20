import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectBoardRoutingModule } from './project-board-routing.module';
import { ProjectBoardComponent } from './Components/project-board/project-board.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ProjectBoardComponent
  ],
  imports: [
    CommonModule,  
    ProjectBoardRoutingModule,
    SharedModule,
    HttpClientModule,
  ]
})
export class ProjectBoardModule { }
