import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-miami',
  templateUrl: './miami.component.html',
  styleUrls: ['./miami.component.css']
})
export class MiamiComponent implements OnInit {
  miami = {
    cityName: 'Miami',
    countryName: 'Florida, United States',
    celsius: '33°C',
    imgSource: '../../assets/sunny.png'
  }
  
  constructor() { }

  ngOnInit() {
  }

}
