import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Project } from 'src/app/user-board/Services/Responses/get-project';
import { Team } from '../add-task-dialog/add-task-dialog.component';

@Component({
  selector: 'app-add-project-dialoge',
  templateUrl: './add-project-dialoge.component.html',
  styleUrls: ['./add-project-dialoge.component.scss']
})
export class AddProjectDialogeComponent implements OnInit {
  public teams: Team[] = [{"id":2, "name":"team A"}];
  public addProjectForm: FormGroup;
  constructor(public fb:FormBuilder,
    public dialogRef : MatDialogRef<AddProjectDialogeComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: {projectInfo: Project}
    ) {
      this.addProjectForm = fb.group({
        "id":[''],
        "title":['',[Validators.required]],
        "description":[''],
        "teamId":[''],
        "startDate":[''],
        "endDate":[''],
        "estimate":[''],
        "timeSpent":['']
      })
   }

  ngOnInit(): void {
  }
  
  get startDate(){
    return this.addProjectForm.get('startDate');
  }
  get endDate(){
    return this.addProjectForm.get('endDate');
  }

  get title(){
    return this.addProjectForm.get('title');
  }

  get description(){
    return this.addProjectForm.get('description');
  }

  get team(){
    return this.addProjectForm.get('team');
  }

  SaveProject(){
    this.dialogRef.close(this.addProjectForm.value);
  }

}
