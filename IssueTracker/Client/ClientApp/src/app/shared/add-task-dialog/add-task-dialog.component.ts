export interface IdNamePair{
  id : number;
  name : string;
}

export interface User extends IdNamePair{}

export interface Team extends IdNamePair{}

export interface Status extends IdNamePair{}

import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProjectTask } from 'src/app/ProjectBoard/Services/responses/get-task-response';

@Component({
  selector: 'app-add-task-dialog',
  templateUrl: './add-task-dialog.component.html',
  styleUrls: ['./add-task-dialog.component.scss']
})
export class AddTaskDialogComponent implements OnInit {
  public addTaskForm : FormGroup;
  public users: User[] = [{"id":1,"name": "yash"}];
  public teams: Team[] = [{"id":2, "name":"team A"}];
  public statuses: Status[] = [
    {"id" : 1, "name":"To Do"  },
    {"id" : 2, "name":"In Progress"  },
    {"id" : 3, "name":"Done"  },
    {"id" : 4, "name":"Accepted"  }
  ]; 
  constructor(public fb: FormBuilder,
     public dialogRef : MatDialogRef<AddTaskDialogComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: {taskInfo: ProjectTask}
    ) {
    this.addTaskForm = fb.group({
      "id":[data.taskInfo.id],
      "title":[data.taskInfo.title,[Validators.required]],
       "description":[data.taskInfo.description],
       "userId":[data.taskInfo.userId,[Validators.required]],
       "teamId":[data.taskInfo.teamId],
       "startDate":[data.taskInfo.startDate],
       "endDate":[data.taskInfo.endDate],
       "estimate":[data.taskInfo.estimate],
       "timeSpent":[data.taskInfo.timeSpent],
       "parentTaskId":[''],
       "statusId":[data.taskInfo.statusId,[Validators.required]]
    });
    
   }

  ngOnInit(): void {
  }

  get title(){
    return this.addTaskForm.get('title');
  }

  get user(){
    return this.addTaskForm.get('userId');
  }

  get description(){
    return this.addTaskForm.get('description');
  }

  get team(){
    return this.addTaskForm.get('team');
  }

  get startDate(){
    return this.addTaskForm.get('startDate');
  }
  get endDate(){
    return this.addTaskForm.get('endDate');
  }
  get status(){
    return this.addTaskForm.get('status');
  }

  SaveTask(){
    this.dialogRef.close(this.addTaskForm.value);
    console.log(this.addTaskForm.value);
  }
}
