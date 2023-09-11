import { Injectable, inject } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() { }

  private http = inject(HttpClient);
  sharedData! : any;

  getSearchResults (query : any): Observable<any>{

    let queryParams = new HttpParams();

    queryParams = queryParams.set("query", query)


    return this.http.get('http://localhost:8081/nutri/getmacros', {params : queryParams});

  }


}
