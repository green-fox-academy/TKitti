import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherInfoService {
  constructor(private http: HttpClient) { }

  getWeatherInfo (inputCity) {
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&APPID=e32c7dbda17032dcb301ab0e8593816f`);
  }

  getRandomCitiesWeatherInfo () {
    return this.http.get(`http://api.openweathermap.org/data/2.5/group?id=524901,703448,2643743&units=metric&APPID=e32c7dbda17032dcb301ab0e8593816f`);
  }
}
