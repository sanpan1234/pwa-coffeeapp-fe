import { Injectable } from '@angular/core';

@Injectable()
export class GeolocationService {

  constructor() { }

  requestLocation(callback){
    navigator.geolocation.getCurrentPosition(
      position => {
        callback(position.coords);
      },
      error => {
        callback(null);
      }
    )
  }

  getMapLink(location){
    let query = '';
    if (location.latitude){
      query = location.latitude + ',' + location.longitude;
    } else {
      query = `${location.address}, ${location.city}`;
    }
    if (/iPad|iPhone|iPod/.test(navigator.userAgent)){
      return `https://maps.apple.com/?q=${query}`;
    } else {
      return `https://www.google.com/maps/search/?api=1&query=${query}`;
    }
  }

}
