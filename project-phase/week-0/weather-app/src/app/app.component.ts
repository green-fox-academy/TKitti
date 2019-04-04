import { Component, Input } from '@angular/core';
import { WeatherInfoService } from './cities/weather-info.service';
import { City } from './city';
import { ResponseInfo } from './responseInterface';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weather-app';

  firstCity = new City('', '', 0, '');

  cities: City[] = [
    this.firstCity
  ];

  @Input() inputValue: string = "";

  constructor(private infoService: WeatherInfoService) { }

  ngOnInit() {
    this.infoService.getRandomCitiesWeatherInfo().subscribe((response: ResponseInfo[]) => {
      console.log(response.list[0].main.temp);
      this.cities = response.list.map(oneCity => { return new City(oneCity.name, oneCity.sys.country, Math.round((oneCity.main.temp)), `../../assets/${oneCity.weather[0].main}.png`)});
    });
  }

  search() {
    this.infoService.getWeatherInfo(this.inputValue).subscribe((response: ResponseInfo) => {
      this.cities = [
        this.firstCity
      ];
      this.cities[0].cityName = response.name;
      this.cities[0].countryName = response.sys.country;
      this.cities[0].celsius = Math.round((response.main.temp)) - 273;
      this.cities[0].imgSource = `../../assets/${response.weather[0].main}.png`;
    });
  }
}
