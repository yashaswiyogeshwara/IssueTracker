import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Apollo, gql, QueryRef } from 'apollo-angular';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GetTaskResponse, ProjectTask } from './responses/get-task-response';

const GET_Project_Tasks = gql`
  query GetProjectItems {
    tasks {
      id,
      title,
      statusId,
      status,
      displayOrder,
      userId,
      teamId,
      description,
      estimate,
      startDate,
      endDate,
      timeSpent
    }
  }
`;
@Injectable({
  providedIn: 'root'
})
export class ProjectBoardService {

  constructor(private apollo: Apollo, private http: HttpClient) { }

  public GetTasks(): QueryRef<GetTaskResponse>{
    return this.apollo.watchQuery<GetTaskResponse>({
      query: GET_Project_Tasks,
      errorPolicy:'all'
    });
  }

  public SaveTask(form : any):Observable<any>{
    const url = environment.apiUrl + "/api/TaskItem"
    return this.http.post(url,form);
  }

  public UpdateTaskDisplayOrder(form: ProjectTask[]){
    const url = environment.apiUrl + "/api/TaskItem"
    return this.http.patch(url,form);
  }

}
