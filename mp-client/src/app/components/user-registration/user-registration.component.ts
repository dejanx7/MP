import { Component, inject, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit{


  private fb = inject(FormBuilder);
  private authService = inject(AuthService);


  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  userRegisterForm : FormGroup;

  

  ngOnInit(): void {
    
    this.userRegisterForm = this.initForm();
    
  }

  initForm(): FormGroup{

    return this.fb.group({
      username: this.fb.control<string>('', [Validators.required]),
      email: this.fb.control<string>('', [Validators.required]),
      password: this.fb.control<string>('', [Validators.required])
    });

  }

  register(){

    console.log("form values are ", this.userRegisterForm.value)
    
    const username = this.userRegisterForm.value["username"];
    const email = this.userRegisterForm.value["email"];
    const password = this.userRegisterForm.value["password"];

    this.authService.register(username, email, password).subscribe({

      next: (data) => {
        
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },

      error: (err) => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
      
    })

    


  }




}
