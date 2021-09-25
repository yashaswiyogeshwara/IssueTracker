import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectBoardComponent } from './Components/project-board/project-board.component';

const routes: Routes = 
[
  {
    path:'',
    component:ProjectBoardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectBoardRoutingModule { }
