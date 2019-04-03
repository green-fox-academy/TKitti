import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weather-app';

  // constructor(private http: HttpClient) { }

  // ngOnInit () {
  //   this.http.get('https://api.openweathermap.org/data/2.5/weather?q=London&APPID=e32c7dbda17032dcb301ab0e8593816f')
  //   .subscribe((response) => console.log(response));
  // }
}
