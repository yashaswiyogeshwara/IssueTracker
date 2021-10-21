import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserBoardService {

  constructor(private http: HttpClient) { }

  public SaveProject(form : any):Observable<any>{
    const url = environment.apiUrl + "/api/Project"
    return this.http.post(url,form);
  }
}
