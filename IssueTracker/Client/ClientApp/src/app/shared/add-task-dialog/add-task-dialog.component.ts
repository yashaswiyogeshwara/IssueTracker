export interface IdNamePair{
  id : number;
  name : string;
}

export interface User extends IdNamePair{}

export interface Team extends IdNamePair{}

export interface Status extends IdNamePair{}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

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
  constructor(public fb: FormBuilder, public dialogRef : MatDialogRef<AddTaskDialogComponent>) {
    this.addTaskForm = fb.group({
      "title":['',[Validators.required]],
       "description":[''],
       "userId":['',[Validators.required]],
       "teamId":[''],
       "startDate":[''],
       "endDate":[''],
       "estimate":[''],
       "timeSpent":[''],
       "parentTaskId":[''],
       "status":[1,[Validators.required]]
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
  }
}
