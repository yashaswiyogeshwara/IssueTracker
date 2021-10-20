import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserBoardComponent } from './Components/user-board/user-board.component';

const routes: Routes = [{
  path:'',
  component:UserBoardComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserBoardRoutingModule { }
