import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { Observable } from 'rxjs';
import { httpInterceptorProviders } from '../helpers/auth.interceptor';


const ApiUrl = 'http://localhost:8081/api/test/'



@Injectable({
  providedIn: 'root'
})
export class TestService {
  constructor() { }

  private http = inject(HttpClient);

  getUserContent() : Observable<any>{

    return this.http.get(ApiUrl + 'user', {responseType: 'text'});

  }
  
  




    
 
}



  

  



