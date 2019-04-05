import { Component, Input } from '@angular/core';
import { WeatherInfoService } from './cities/weather-info.service';
import { City } from './city';
import { ResponseInfo } from './responseInterface';
import { error } from '@angular/compiler/src/util';
import { HttpErrorResponse } from '@angular/common/http';
import { ListOfCities } from './responseArrayOfCitiesInterface';


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
  cityNameByDetailedView: string;

  isInputvalueString: boolean = false;
  isNumber: boolean = false;

  @Input() inputValue: string = "";

  constructor(private infoService: WeatherInfoService) { }

  ngOnInit() {
    this.infoService.getRandomCitiesWeatherInfo().subscribe((response: ListOfCities) => {
      this.cities = response.list.map(oneCity => { return new City(oneCity.name, oneCity.sys.country, Math.round((oneCity.main.temp)), `../../assets/${oneCity.weather[0].main}.png`) });
    }, error => this.error = error);
  }

  search() {
    if (checkInputValue(this.inputValue) === false) {
      //show current weather
      this.isInputvalueString = true;
      this.isNumber = false;

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
          }
        }
      );
    } else {
      //show forecast
      this.isNumber = true;
      this.isInputvalueString = false;

      this.infoService.getWeatherInfoById(this.inputValue).subscribe(
        (response: ListOfCities) => {
          let fiveDataForecast: City[] = [];

          for (let i = 0; i < 5; i++) {
            fiveDataForecast.push(new City(response.list[i].dt_txt, response.list[i].dt_txt, Math.round(response.list[i].main.temp) - 273, `../../assets/${response.list[i].weather[0].main}.png`, response.list[i].weather[0].description));
          }

          this.cities = fiveDataForecast;
          this.cityNameByDetailedView = response.city.name;
          this.inputValue = '';
          this.errorMessageForUser = '';
        }, error => {
          this.error = error;
          if (this.error.status === 400 || this.error.status === 404) {
            this.errorMessageForUser = 'City was not found';
          }
        }
      );
    }
  }
}

function checkInputValue(value: string) {
  let numberArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  return numberArray.some(oneNumber => oneNumber === value[0]);
}

