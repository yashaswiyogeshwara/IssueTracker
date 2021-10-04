import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-task-dialog',
  templateUrl: './add-task-dialog.component.html',
  styleUrls: ['./add-task-dialog.component.scss']
})
export class AddTaskDialogComponent implements OnInit {
  public addTaskForm : FormGroup;
  public users = [{"id":1,"name": "yash"}]
  constructor(public fb: FormBuilder) {
    this.addTaskForm = fb.group({
      "title":['',[Validators.required]],
      "description":['',[Validators.required]],
      'user':['',[Validators.required]]
    });
   }

  ngOnInit(): void {
  }

  get title(){
    return this.addTaskForm.get('title');
  }

  get user(){
    return this.addTaskForm.get('user');
  }

  get description(){
    return this.addTaskForm.get('description');
  }

}
