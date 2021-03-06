import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignUpService } from '../services/sign-up.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  public successfullySignedUp = true;
  public signUpForm : FormGroup;
  constructor(public fb : FormBuilder, public service : SignUpService, public route: Router) {
    this.signUpForm = this.fb.group({
      name:['',[Validators.required]],
      email: ['',[Validators.required,Validators.email]],
      password :['',[Validators.required]]
    })
  }

  ngOnInit(): void {
    
  }

  submit(){
    console.log(this.signUpForm.value)
    this.service.signUp(this.signUpForm.value).subscribe((data)=>{
      this.successfullySignedUp = true;
    })
  }

  get name(){
    return this.signUpForm.get('name');
  }
  
  get email(){
    return this.signUpForm.get('email');
  }

  get password(){
    return this.signUpForm.get("password");
  }

  
  public ShowSignUp(){
    this.successfullySignedUp = false;
  }

}
