'use strict'
import { Animal } from './animal';


class Farm {
  animals: Animal[];
  slots: number;

  constructor (listOfAnimals: Animal[], freeSlotsInput: number) {
    this.animals = listOfAnimals;
    this.slots = freeSlotsInput;
  }

  breed(newAnimal: Animal) {
    if (this.slots > 0) {
    this.animals.push(newAnimal);
    this.slots -= 1;
    } else {
      console.log('There is no place for new animal.');
    }
  }

  slaughter() {
    let sortedAnimalsArray = this.animals.sort(function(element1, element2) {
      return element1.hunger - element2.hunger;
    });

    sortedAnimalsArray.shift();
  }
}

let farmDallas = new Farm(initializeAnimals(), 4);

function initializeAnimals (): Animal[] {
  let animalsInFunction = [];
  console.log(animalsInFunction);
  animalsInFunction.push(new Animal(4, 4));
  animalsInFunction.push(new Animal(10, 9));
  animalsInFunction.push(new Animal(2, 4));
  animalsInFunction.push(new Animal(5, 6));
  animalsInFunction.push(new Animal(7, 5));
  return animalsInFunction;
}

farmDallas.breed(new Animal(3,8));
farmDallas.breed(new Animal(3,8));
farmDallas.breed(new Animal(3,8));
farmDallas.breed(new Animal(3,8));
farmDallas.breed(new Animal(3,8));
farmDallas.breed(new Animal(3,8));

console.log(farmDallas);


