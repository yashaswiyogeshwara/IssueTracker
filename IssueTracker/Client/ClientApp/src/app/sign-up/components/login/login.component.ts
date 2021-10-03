import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SignUpService } from '../../services/sign-up.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public signInForm :FormGroup;
  constructor(public fb : FormBuilder, public service : SignUpService, public route : Router) {
    this.signInForm = fb.group({
      email: ['',[Validators.required,Validators.email]],
      password: ['',[Validators.required]]
    });
   }

  ngOnInit(): void {
  }

  submit(): void{
    this.service.SignIn(this.signInForm.value).subscribe((data) => {
      this.route.navigate(['/project']);
    })
  }

  get email(){
    return this.signInForm.get('email');
  }

  
  get password(){
    return this.signInForm.get('password');
  }


}
