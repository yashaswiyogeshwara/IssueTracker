import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddTaskDialogComponent } from 'src/app/shared/add-task-dialog/add-task-dialog.component';
import { ProjectBoardService } from '../../Services/project-board.service';
import { ProjectTask } from '../../Services/responses/get-task-response';
import {map,mergeMap} from 'rxjs/operators'
import { noop } from 'rxjs';
import { Task } from '../../Models/task';

@Component({
  selector: 'app-project-board',
  templateUrl: './project-board.component.html',
  styleUrls: ['./project-board.component.scss']
})
export class ProjectBoardComponent implements OnInit {
  public taskList: ProjectTask[] = [] as ProjectTask[];
  constructor(public projectBoardService: ProjectBoardService,public dialog: MatDialog) { }

  ngOnInit(): void {
  this.projectBoardService.GetTasks().valueChanges.
  subscribe((data)=>{
    this.taskList = data.data.tasks.map(x => x);
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.taskList, event.previousIndex, event.currentIndex);
    var updatedTaskList = this.getProjectTasksWithTheirDisplayOrder();
    this.projectBoardService.UpdateTaskDisplayOrder(updatedTaskList).subscribe(() => noop());
  }

  private getProjectTasksWithTheirDisplayOrder(){
    var updatedTaskList = this.taskList.map( (x,index) =>{
      let task = new ProjectTask();
      task.id = x.id;
      task.displayOrder= index;
      return task;
    });
    return updatedTaskList;
  }

  AddTask(){
    const task = new ProjectTask();
    task.statusId = 1;
    this.OpenTaskDialog(task);
  }

  AddToTaskList(data: any){
    console.log(data);
    const task = new ProjectTask();
    task.id = data.id;
    task.title = data.title;
    task.statusId = data.statusId;
    task.status = data.status; //TODO : Status is not available on client side should fetch this on login. Maintain a state store as well. 
    this.taskList.push(task);
  }

  EditTask(id: number): void{
    let task = this.taskList.find(x => x.id == id) ;
    console.log(task);
    if(task != null){
      this.OpenTaskDialog(task);
    }
  }

  OpenTaskDialog(projectTask: ProjectTask): void{
    const dialogRef = this.dialog.open(AddTaskDialogComponent,{
      width:'70%',
      height : '70%',
      data:{
        taskInfo : projectTask
      }
    });
    dialogRef.afterClosed()
        .pipe(
          map((data) => {
            let task = new Task();
            task.id = data.id;
            task.title = data.title;
            task.teamId = data.teamId;
            task.userId = data.userId;
            task.description = data.description;
            task.endDate = data.endDate;
            task.startDate = data.startDate;
            task.estimate = data.estimate;
            task.timeSpent = data.timeSpent;
            task.statusId = data.statusId;
            task.displayOrder = projectTask.displayOrder > 0 ? projectTask.displayOrder : this.taskList.length;
            return task;
          }),
          mergeMap((data) => this.projectBoardService.SaveTask(data).pipe(map((x) => data)))
          )
        .subscribe((data) =>{
          if(projectTask.id == null || projectTask.id == 0){
            this.AddToTaskList(data);
          }
    });
  }

}
