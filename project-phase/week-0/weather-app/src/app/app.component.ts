import { Component, Input } from '@angular/core';
import { WeatherInfoService } from './cities/weather-info.service';
import { City } from './city';
import { ResponseInfo } from './responseInterface';
import { error } from '@angular/compiler/src/util';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weather-app';

  firstCity = new City('', '', 0, '');
  error;
  errorMessageForUser: string = '';

  cities: City[] = [
    this.firstCity
  ];

  @Input() inputValue: string = "";

  constructor(private infoService: WeatherInfoService) { }

  ngOnInit() {
    this.infoService.getRandomCitiesWeatherInfo().subscribe((response: ResponseInfo[]) => {
      this.cities = response.list.map(oneCity => { return new City(oneCity.name, oneCity.sys.country, Math.round((oneCity.main.temp)), `../../assets/${oneCity.weather[0].main}.png`) });
    }, error => this.error = error);
  }

  search() {
    this.infoService.getWeatherInfo(this.inputValue).subscribe(
      (response: ResponseInfo) => {
          this.cities = [
            this.firstCity
          ];
          this.cities[0].cityName = response.name;
          this.cities[0].countryName = response.sys.country;
          this.cities[0].celsius = Math.round((response.main.temp)) - 273;
          this.cities[0].imgSource = `../../assets/${response.weather[0].main}.png`;

          //clear input field after search
          this.inputValue = '';
          //delete error message if it exists
          this.errorMessageForUser = '';
      }, error => { 
        this.error = error;
        if (this.error.status === 400 || this.error.status === 404) {
          this.errorMessageForUser = 'City was not found';
      }}
    );
  }
}
