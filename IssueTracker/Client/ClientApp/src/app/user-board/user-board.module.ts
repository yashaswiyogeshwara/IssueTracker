import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserBoardRoutingModule } from './user-board-routing.module';
import { UserBoardComponent } from './Components/user-board/user-board.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    UserBoardComponent
  ],
  imports: [
    CommonModule,
    UserBoardRoutingModule,
    SharedModule
  ]
})
export class UserBoardModule { }
