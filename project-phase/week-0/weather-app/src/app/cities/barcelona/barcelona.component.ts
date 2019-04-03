import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barcelona',
  templateUrl: './barcelona.component.html',
  styleUrls: ['./barcelona.component.css']
})
export class BarcelonaComponent implements OnInit {
  barcelona = {
    cityName: 'Barcelona',
    countryName: 'Spain',
    celsius: '19°C',
    imgSource: '../../assets/sunny.png'
  }

  constructor() { }

  ngOnInit() {
  }

}
