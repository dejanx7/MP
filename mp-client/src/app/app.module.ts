import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodSearchComponent } from './components/food-search/food-search.component';

import {HttpClientModule} from '@angular/common/http';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component'
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { TestUserComponent } from './components/test-user/test-user.component';
import { HomeComponent } from './components/home/home.component';
import { httpInterceptorProviders } from './helpers/auth.interceptor';
import { DonateComponent } from './components/donate/donate.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';



@NgModule({
  declarations: [
    AppComponent,
    FoodSearchComponent,
    UserRegistrationComponent,
    UserLoginComponent,
    TestUserComponent,
    HomeComponent,
    DonateComponent,
    UserProfileComponent

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
