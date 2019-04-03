import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-london',
  templateUrl: './london.component.html',
  styleUrls: ['./london.component.css']
})
export class LondonComponent implements OnInit {
  london = {
    cityName: 'London',
    countryName: 'United Kingdom',
    celsius: '4°C',
    imgSource: '../../assets/snowy.png'
  }

  constructor() { }

  ngOnInit() {
  }

}
