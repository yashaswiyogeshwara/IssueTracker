import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Apollo, gql, QueryRef } from 'apollo-angular';
import { environment } from 'src/environments/environment';
import { GetTaskResponse } from './responses/get-task-response';

const GET_Project_Tasks = gql`
  query GetProjectItems {
    tasks {
      id,
      title,
      statusId
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

  public SaveTask(form : any):any{
    const url = environment.apiUrl + "/api/TaskItem"
    this.http.post(url,form).subscribe();
  }

}
