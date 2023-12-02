import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup= new FormGroup({});
  x: boolean = false;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  constructor(private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit() {
    this.signupForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(5)]],
      lastName: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      pwd: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]]
    });
  }

  // signup() {
  //   // alert('Here into signup');
  //   console.log('Here user', this.signupForm.value);
  // }

  onSubmit(): void {
    this.authService.register(this.signupForm.controls['firstName'].value,this.signupForm.controls['email'].value,this.signupForm.controls['pwd'].value).subscribe(
        data => {
          console.log(data);
          this.isSuccessful = true;
          this.isSignUpFailed = false;
        },
        err => {
          this.errorMessage = err.error.message;
          this.isSignUpFailed = true;
        }
    );
  }

}
