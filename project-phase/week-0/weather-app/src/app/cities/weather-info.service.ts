import { Injectable, ErrorHandler } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherInfoService {
  constructor(private http: HttpClient) { }

  getWeatherInfo (inputCity) {
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=e32c7dbda17032dcb301ab0e8593816f`)
  }

  getRandomCitiesWeatherInfo () {
    return this.http.get(`http://api.openweathermap.org/data/2.5/group?id=524901,703448,2643743&units=metric&appid=e32c7dbda17032dcb301ab0e8593816f`)
  }
}
