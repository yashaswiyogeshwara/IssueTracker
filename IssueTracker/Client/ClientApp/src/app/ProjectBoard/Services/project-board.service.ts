import { Injectable } from '@angular/core';
import { Apollo, gql, QueryRef } from 'apollo-angular';
import { GetTaskResponse } from './responses/get-task-response';

const GET_Project_Tasks = gql`
  query GetProjectItems {
    tasks {
      id,
      title,
      description
    }
  }
`;
@Injectable({
  providedIn: 'root'
})
export class ProjectBoardService {

  constructor(private apollo: Apollo) { }

  public GetTasks(): QueryRef<GetTaskResponse>{
    return this.apollo.watchQuery<GetTaskResponse>({
      query: GET_Project_Tasks,
      errorPolicy:'all'
    });
  }

}
