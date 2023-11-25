import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from 'src/app/shared/confirmPwd';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  SignupForm !:FormGroup

  constructor( private fb:FormBuilder) { }

  ngOnInit(): void {
    this.SignupForm=this.fb.group({
      firstName:["" , [Validators.minLength(3) , Validators.required] ],
      lastName:["", [Validators.minLength(3) , Validators.required]],
      email:["", [Validators.email , Validators.required]],
      password:[""],
      cPassword:[""],
    } , {
      validators:MustMatch('password','cPassword')
    })
  }

  signup(){
    console.log(this.SignupForm);  
  }

}
