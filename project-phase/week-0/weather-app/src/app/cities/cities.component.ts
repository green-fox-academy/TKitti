import { Component, OnInit, Input } from '@angular/core';
import { City } from '../city';


@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {
  @Input() childCity: City;
  //@Input() inputValue: string = "";
  @Input() cityIdByDetailedView: number;
  
  error;
  errorMessageForUser: string = '';
  cityNameByDetailedView: string;

  cities: City[] = [];

  constructor() { }

  ngOnInit() { }
}
