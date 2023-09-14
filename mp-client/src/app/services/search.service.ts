import { Injectable, inject } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { FoodLog } from '../model/food-log';

const AUTH_API = '/api/';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() { }

  private http = inject(HttpClient);
  sharedData! : any;
  foodLog : FoodLog;

  getSearchResults (query : any): Observable<any>{

    let queryParams = new HttpParams();

    queryParams = queryParams.set("query", query)


    return this.http.get(AUTH_API + 'nutri/getmacros', {params : queryParams});

  }

  postToDb(foodList : any[], dateTime : any, id : any) : Observable<any>{


    const newLog : FoodLog = {

      user_id: id,
      dateTime: dateTime,
      foodList: foodList
    }

    console.log("new log is ", newLog);

    return this.http.post(AUTH_API + 'db/postlog', newLog ,{responseType: 'text'});

  }

  getUserLog(id : any) : Observable<any>{

    let queryParams = new HttpParams();
    queryParams = queryParams.set("user_id", id);

    return this.http.get(AUTH_API + 'db/getlog', {params : queryParams});

  }

  deleteUserLog(logId : any): Observable<any>{

    let queryParams = new HttpParams();
    queryParams = queryParams.set("logId", logId);

    return this.http.delete( AUTH_API + 'db/deletelog', {params : queryParams});

  }


}
