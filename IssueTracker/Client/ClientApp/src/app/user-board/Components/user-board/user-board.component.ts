import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { noop } from 'rxjs';
import { AddProjectDialogeComponent } from 'src/app/shared/add-project-dialoge/add-project-dialoge.component';
import { Project } from '../../Services/Responses/get-project';
import { UserBoardService } from '../../Services/user-board.service';

@Component({
  selector: 'app-user-board',
  templateUrl: './user-board.component.html',
  styleUrls: ['./user-board.component.scss']
})
export class UserBoardComponent implements OnInit {

  constructor(public dialog: MatDialog,public userService: UserBoardService) { }

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
    dialogRef.afterClosed().subscribe((data: Project)=>{
      this.SaveProject(data)
    });
  }

  SaveProject(data: Project){
    console.log(data);
    this.userService.SaveProject(data).subscribe(_ => noop());
  }

}
