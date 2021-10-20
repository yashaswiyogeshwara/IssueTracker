import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddProjectDialogeComponent } from 'src/app/shared/add-project-dialoge/add-project-dialoge.component';

@Component({
  selector: 'app-user-board',
  templateUrl: './user-board.component.html',
  styleUrls: ['./user-board.component.scss']
})
export class UserBoardComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  AddProject(){
   this.OpenProjectDialoge();
  }

  OpenProjectDialoge(){
    const dialogRef = this.dialog.open(AddProjectDialogeComponent,{
      width:'70%',
      height : '70%',
    });
  }

}
