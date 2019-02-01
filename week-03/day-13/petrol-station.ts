'use strict'
export { }

class Station {
  gasAmount: number;

  constructor(inputGas: number) {
    this.gasAmount = inputGas;
  }

  refill(car: Car) {
    this.gasAmount -= car.fillAmount;

    if (car.gasAmount + car.fillAmount > car.capacity) {
      car.gasAmount = car.capacity;
    } else {
      car.gasAmount += car.fillAmount;
    }
  }
}


class Car {
  gasAmount: number;
  capacity: number;
  fillAmount: number;

  constructor(inputGasAmount: number = 0, inputCapacity: number = 100, inputFillAmount: number) {
    this.gasAmount = inputGasAmount;
    this.capacity = inputCapacity;
    this.fillAmount = inputFillAmount;
  }
}

let bmw = new Car(40, 120, 50);
let petrolStation = new Station(1200);

petrolStation.refill(bmw);
console.log(bmw, petrolStation);