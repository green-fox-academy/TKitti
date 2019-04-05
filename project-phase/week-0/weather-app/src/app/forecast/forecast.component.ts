import { Component, OnInit, Input } from '@angular/core';
import { City } from '../city';
import { ActivatedRoute } from "@angular/router";
import { WeatherInfoService } from '../cities/weather-info.service';
import { ListOfCities } from '../responseArrayOfCitiesInterface';


@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
  @Input() childCity: City;
  id: string = '';
  error;
  errorMessageForUser: string = '';
  cityNameByDetailedView: string;

  cities: City[] = [];

  constructor(private route: ActivatedRoute, private infoService: WeatherInfoService) { }

  ngOnInit() { 
    this.route.paramMap.subscribe(params => {
      console.log(params);
      this.id = params.get("id");
      console.log(this.id);
      
    });

    this.infoService.getWeatherInfoById(this.id).subscribe(
      (response: ListOfCities) => {
        let fiveDataForecast: City[] = [];

        for (let i = 0; i < 5; i++) {
          fiveDataForecast.push(new City(response.list[i].id, response.list[i].dt_txt, response.list[i].dt_txt, Math.round(response.list[i].main.temp) - 273, `../../assets/${response.list[i].weather[0].main}.png`, response.list[i].weather[0].description));
        }

        this.cities = fiveDataForecast;
        this.cityNameByDetailedView = response.city.name;
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
