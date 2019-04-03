import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherInfoService {
  constructor(private http: HttpClient) { }

  getWeatherInfo (inputCity) {
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&APPID=e32c7dbda17032dcb301ab0e8593816f`);
  }
}
