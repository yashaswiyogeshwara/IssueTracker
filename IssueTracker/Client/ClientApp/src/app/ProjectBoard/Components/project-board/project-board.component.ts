export class Task{
  public title : string = '';
  public userId : number = -1;
  public teamId : string = '';
  public description: string = '';
  public estimate= null;
  public startDate = null;
  public endDate = null;
  public timeSpent = null;
  public statusId:number = 0;
  public displayOrder: number = 0; 
}

import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddTaskDialogComponent } from 'src/app/shared/add-task-dialog/add-task-dialog.component';
import { ProjectBoardService } from '../../Services/project-board.service';
import { GetTaskResponse, projectTask } from '../../Services/responses/get-task-response';
import {map,mergeMap} from 'rxjs/operators'
import { noop } from 'rxjs';

@Component({
  selector: 'app-project-board',
  templateUrl: './project-board.component.html',
  styleUrls: ['./project-board.component.scss']
})
export class ProjectBoardComponent implements OnInit {
  public taskList: projectTask[] = [] as projectTask[];
  constructor(public projectBoardService: ProjectBoardService,public dialog: MatDialog) { }

  ngOnInit(): void {
  this.projectBoardService.GetTasks().valueChanges.
  subscribe((data)=>{
    this.taskList = data.data.tasks.map(x => x);
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    let task : projectTask=  new projectTask();
    task.id = this.taskList[event.previousIndex].id;
    task.displayOrder = event.currentIndex;
    this.projectBoardService.UpdateTaskDisplayOrder(task).subscribe(() => noop());
    moveItemInArray(this.taskList, event.previousIndex, event.currentIndex);
  }

  AddTask(){
    const dialogRef = this.dialog.open(AddTaskDialogComponent,{
      width:'70%',
      height : '70%'
    });
    dialogRef.afterClosed()
        .pipe(
          map((data) => {
            let task = new Task();
            task.title = data.title;
            task.teamId = data.teamId;
            task.userId = data.userId;
            task.description = data.description;
            task.endDate = data.endDate;
            task.startDate = data.startDate;
            task.estimate = data.estimate;
            task.timeSpent = data.timeSpent;
            task.statusId = data.statusId;
            task.displayOrder = this.taskList.length;
            return task;
          }),
          mergeMap((data) => this.projectBoardService.SaveTask(data).pipe(map((x) => data)))
          )
        .subscribe((data) =>{
      this.AddToTaskList(data);    
    });
  }

  AddToTaskList(data: any){
    console.log(data);
    const task = new projectTask();
    task.id = data.id;
    task.title = data.title;
    task.statusId = data.statusId;
    task.status = data.status; //TODO : Status is not available on client side should fetch this on login. Maintain a state store as well. 
    this.taskList.push(task);
  }

}
