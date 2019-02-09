'use strict';

import { Animal } from './animals-in-zoo';


interface Flyable {
  land(): void;
  fly(): void;
  takeOff(): void;
}


abstract class Vehicle {
  speed: number;
  hasWheels: boolean;
  personCapacity: number;
}

class Helicopter extends Vehicle implements Flyable {
  speed: number = 50;
  hasWheels: boolean = false;
  personCapacity: number = 2;

  land() {
    return 'Helicopters descend vertically to the ground.';
  }

  fly() {
    return `Helicopters fly with a speed of ${this.speed}.`;
  }

  takeOff() {
    return 'Helicopters don\'t need to speed up before taking off.';
  }
}


class Bird extends Animal implements Flyable {
  breed() {
    return 'Birds are breeding by laying eggs.';
  }

  land() {
    return 'Birds land in different ways according to their body structure.';
  }

  fly() {
    return `Birds can fly.`;
  }

  takeOff() {
    return 'Birds can easily take off with the help of their wings.';
  }
}