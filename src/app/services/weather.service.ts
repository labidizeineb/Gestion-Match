import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
 // weatherURL : Backend address
 weatherURL: string = "http://localhost:3000/weather";
  constructor(private http: HttpClient) { }
  displayCitySearch(city : string) {
    return this.http.post<{dataWearth  : any}>(this.weatherURL,city);
  }
}
