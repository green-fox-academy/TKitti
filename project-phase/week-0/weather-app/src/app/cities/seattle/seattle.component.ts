import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherInfoService } from '../weather-info.service';

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {
  seattle = {
    cityName: 'Seattle',
    countryName: 'Washington, United States',
    celsius: '11°C',
    imgSource: '../../assets/cloudy.png'
  }

  constructor(private http: HttpClient) { }

  ngOnInit() {
    let newInstance = new WeatherInfoService(this.http);
    newInstance.getWeatherInfo(this.seattle.cityName).subscribe((response) => {
      this.seattle.celsius = response.main.temp;
    });
  }
}
