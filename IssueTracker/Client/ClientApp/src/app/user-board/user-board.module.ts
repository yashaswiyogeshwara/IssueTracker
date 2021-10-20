import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserBoardRoutingModule } from './user-board-routing.module';
import { UserBoardComponent } from './Components/user-board/user-board.component';


@NgModule({
  declarations: [
    UserBoardComponent
  ],
  imports: [
    CommonModule,
    UserBoardRoutingModule
  ]
})
export class UserBoardModule { }
