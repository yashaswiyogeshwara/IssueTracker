import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(public http : HttpClient) {}

 public signUp(form : any){
      let url = environment.apiUrl+"/api/SignUp"
      this.http.post(url,form).subscribe((data) =>{
        console.log(data);
      })
  }
}
