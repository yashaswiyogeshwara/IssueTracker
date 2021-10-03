import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {
  

  constructor(public http : HttpClient) {}

 public signUp(form : any): Observable<any>{
      let url = environment.apiUrl+"/api/SignUp";
      return this.http.post(url,form)
  }
  public SignIn(form : any) {
   let url = environment.apiUrl+"api/SignIn"; 
   return this.http.post(url,form);
  }
}
