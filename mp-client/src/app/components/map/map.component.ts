import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';



@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent {

  apiLoaded: Observable<boolean>;

  options: google.maps.MapOptions = {
    center: {lat: 40, lng: -20},
    zoom: 4
  };

  constructor(httpClient: HttpClient) {
    // If you're using the `<map-heatmap-layer>` directive, you also have to include the `visualization` library 
    // when loading the Google Maps API. To do so, you can add `&libraries=visualization` to the script URL:
    // https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=visualization

    this.apiLoaded = httpClient.jsonp('https://maps.googleapis.com/maps/api/js?key=AIzaSyDMLCHQwH8FuhQ9iBrmOoz57Bk1UwZtRdg', 'callback')
        .pipe(
          map(() => true),
          catchError(() => of(false)),
        );
  }


  
  

}
