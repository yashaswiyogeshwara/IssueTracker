import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Apollo, gql, QueryRef } from 'apollo-angular';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GetProjectsResponse } from './Responses/get-project';

const GET_Projects = gql`
  query GetProjects {
    projects {
      id,
      title
    }
  }
`;

@Injectable({
  providedIn: 'root'
})
export class UserBoardService {

  constructor(private http: HttpClient, private apollo: Apollo) { }

  public SaveProject(form : any):Observable<any>{
    const url = environment.apiUrl + "/api/Project"
    return this.http.post(url,form);
  }

  public GetProjects(): QueryRef<GetProjectsResponse>{
    return this.apollo.watchQuery<GetProjectsResponse>({
      query: GET_Projects,
      errorPolicy: 'all'
    });
  }
}
