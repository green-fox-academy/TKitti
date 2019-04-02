import { Component, OnInit } from '@angular/core';
import { City } from '../city';
import { exampleCities } from '../example-cities';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {

  cities = exampleCities;

  constructor() { }

  ngOnInit() {
  }

}
