import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-budapest',
  templateUrl: './budapest.component.html',
  styleUrls: ['./budapest.component.css']
})
export class BudapestComponent implements OnInit {
  budapest = {
    cityName: 'Budapest',
    countryName: 'Hungary',
    celsius: '12°C',
    imgSource: '../../assets/partly_cloudy.png'
  }

  constructor() { }

  ngOnInit() {
  }

}
