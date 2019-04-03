import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
