import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodSearchComponent } from './components/food-search/food-search.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import {HttpClientModule} from '@angular/common/http';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component'
import {ReactiveFormsModule, FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    FoodSearchComponent,
    SearchResultComponent,
    UserRegistrationComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
