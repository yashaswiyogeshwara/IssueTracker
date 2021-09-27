
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { ProjectBoardService } from '../../Services/project-board.service';
import { GetTaskResponse, projectTask } from '../../Services/responses/get-task-response';

@Component({
  selector: 'app-project-board',
  templateUrl: './project-board.component.html',
  styleUrls: ['./project-board.component.scss']
})
export class ProjectBoardComponent implements OnInit {
  public taskList: projectTask[] = {} as projectTask[];
  constructor(public projectBoardService: ProjectBoardService) { }

  ngOnInit(): void {
  this.projectBoardService.GetTasks().valueChanges.
  subscribe((data)=>{
    this.taskList = data.data.tasks.map(x => x);
    });
  }
  
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.taskList, event.previousIndex, event.currentIndex);
  }

}
