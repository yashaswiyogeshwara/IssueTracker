import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { noop, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { AddProjectDialogeComponent } from 'src/app/shared/add-project-dialoge/add-project-dialoge.component';
import { GetProjectsResponse, Project } from '../../Services/Responses/get-project';
import { UserBoardService } from '../../Services/user-board.service';

@Component({
  selector: 'app-user-board',
  templateUrl: './user-board.component.html',
  styleUrls: ['./user-board.component.scss']
})
export class UserBoardComponent implements OnInit {
  public projects: Project[] = {} as Project[];
  constructor(public dialog: MatDialog, public userService: UserBoardService) {
  }

  ngOnInit(): void {
    this.userService.GetProjects().valueChanges.subscribe((data) => {
      this.projects = data.data.projects;
    });
  }

  AddProject(){
   this.OpenProjectDialoge();
  }

  OpenProjectDialoge(){
    const dialogRef = this.dialog.open(AddProjectDialogeComponent,{
      width:'70%',
      height : '70%',
    });
    dialogRef.afterClosed().pipe(map((data) => {
      var p = new Project();
      p.description = data.description;
      p.endDate = data.endDate;
      p.estimate = data.estimate;
      p.startDate = data.startDate;
      p.teamId = data.teamId;
      p.timeSpent = data.timeSpent;
      p.title = data.title;
      return p;
    })).subscribe((data: Project)=>{
      this.SaveProject(data)
    });
  }

  SaveProject(data: Project){
    console.log(data);
    this.userService.SaveProject(data).subscribe(_ => noop());
  }

}
