import { HttpClient } from '@angular/common/http';
import { Component, ViewChild, inject } from '@angular/core';
import { GoogleMap, MapInfoWindow, MapMarker } from '@angular/google-maps';
import { Observable, catchError, map, of } from 'rxjs';



@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent {

  @ViewChild('myGoogleMap', { static: false })
  map!: GoogleMap;
  @ViewChild(MapInfoWindow, { static: false })
  info!: MapInfoWindow;

  apiLoaded: Observable<boolean>;

  markers = []  as  any;
  infoContent = ''

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

  openInfo(marker: MapMarker, content: string) {
    this.infoContent = content;
    this.info.open(marker)
  }




  
  

}
