import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private storageService = inject(StorageService);
  private router = inject(Router);
  loginForm: FormGroup;

  isLoggedIn = false;
  isLoginFailed = false;
  isSubmitted = false;
  errorMessage = '';
  roles: string[] = [];
  username : string;

  ngOnInit(): void {

    this.loginForm = this.initForm();
  }

  initForm(): FormGroup {

    return this.fb.group({
      username: this.fb.control<string>("", [Validators.required]),
      password: this.fb.control<string>("", [Validators.required])
    })
  }

  login() {
    console.log("form values are ", this.loginForm.value)

    const username = this.loginForm.value["username"];
    const password = this.loginForm.value["password"];

    this.authService.login(username, password).subscribe({

      next: (data) => {

        console.log("user details are ", data)

        this.storageService.saveUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.isSubmitted = true;
        this.username = this.storageService.getUser().username;
        this.reloadPage();
      },

      error: (err) => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
        this.isSubmitted = true;
      }

    })



  }

  reloadPage(): void {
    window.location.replace('/home');
  }




}
