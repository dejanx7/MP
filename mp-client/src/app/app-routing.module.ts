import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodSearchComponent } from './components/food-search/food-search.component';
import { TestUserComponent } from './components/test-user/test-user.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { HomeComponent } from './components/home/home.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'register', component: UserRegistrationComponent},
  {path: 'login', component: UserLoginComponent},
  {path: 'search', component: FoodSearchComponent},
  {path: 'profile', component: UserProfileComponent},
  {path: 'testuser', component: TestUserComponent},
  {path: '**', redirectTo: 'home', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
