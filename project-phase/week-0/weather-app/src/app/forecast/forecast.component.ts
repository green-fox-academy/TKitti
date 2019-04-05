import { Component, OnInit, Input } from '@angular/core';
import { City } from '../city';


@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
  @Input() childCity: City;

  ngOnInit() { }
}
