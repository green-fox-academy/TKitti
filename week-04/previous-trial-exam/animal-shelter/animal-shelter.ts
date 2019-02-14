'use strict';


class Animal {
  name: string;
  isHealthy: boolean;
  healCost: number;


  heal() {
    this.isHealthy = true;
  }

  isAdoptable() {
    if (this.isHealthy === true) {
      return true;
    } else {
      return false;
    }
  }

  toString() {
    if (this.isHealthy === true) {
      return (`${this.name} is healthy, and adoptable`);
    } else {
      return (`${this.name} is not healthy (${this.healCost}€, and not adoptable`);
    }
  }

}

class Cat extends Animal {
  healCost: number = Math.floor(Math.random() * 7);

  constructor(inputName: string = 'Cat') {
    super();
    this.name = inputName;
  }
}


class Dog extends Animal {
  healCost: number = Math.floor((Math.random() * 8) + 1);

  constructor(inputName: string = 'Dog') {
    super();
    this.name = inputName;
  }
}


class Parrot extends Animal {
  healCost: number = Math.floor((Math.random() * 7) + 4);

  constructor(inputName: string = 'Parrot') {
    super();
    this.name = inputName;
  }
}


class Shelter {
  budget: number = 50;
  listOfAnimals: Animal[] = [];
  listOfAdopters: string[] = [];

  rescue(newAnimal: Animal) {
    this.listOfAnimals.push(newAnimal);
    return this.listOfAnimals.length;
  }

  heal() {
    /*
    this.listOfAnimals.sort(function(a,b): any {
      //sort by isHealthy value, start the list with false
      //in order to start the list with true , the last line should be: ? -1 : 1;
      return (a.isHealthy === b.isHealthy)
      ? 0
      : a.isHealthy
      ? 1 : -1;
    });
    */

    let firstUnhealthyAnimal = this.listOfAnimals.find(function (oneAnimal) {
      return oneAnimal.isHealthy === false;
    });

    if (firstUnhealthyAnimal && this.budget >= firstUnhealthyAnimal.healCost) {
      firstUnhealthyAnimal.isHealthy = true;
      this.budget -= firstUnhealthyAnimal.healCost;
      return 1;
    } else if (firstUnhealthyAnimal && this.budget < firstUnhealthyAnimal.healCost) {
      return 0;
    } else if (firstUnhealthyAnimal === undefined) {
      return 0;
    }
  }

  addAdopter(name: string) {
    this.listOfAdopters.push(name);
  }

  findNewOwner() {
    let newAdoption = {
      newOwner: '',
      animal: null
    }

    let randomNewOwner = Math.floor(Math.random() * this.listOfAdopters.length);

    let adoptableAnimals = [];
    this.listOfAnimals.forEach(oneAnimal => {
      if (oneAnimal.isHealthy === true) {
        adoptableAnimals.push(oneAnimal);
      }
    });

    let randomAnimal = Math.floor(Math.random() * adoptableAnimals.length);

    if (this.listOfAdopters.length === 0) {
      return 'There are no available new owners :(';
    } else if (adoptableAnimals.length === 0) {
      return 'There are no adoptable animals :(';
    } else {
      newAdoption.newOwner = this.listOfAdopters[randomNewOwner];
      newAdoption.animal = adoptableAnimals[randomAnimal];

      //removing the new owner from the adopters list
      this.listOfAdopters.splice(randomNewOwner, 1);

      //removing the animal from the animals list of the shelter
      let indexOfAdoptedAnimal = this.listOfAnimals.indexOf(adoptableAnimals[randomAnimal]);
      this.listOfAnimals.splice(indexOfAdoptedAnimal, 1);
    }
  }

  earnDonation(amount: number) {
    let wholeNumber: number = Math.round(amount);
    this.budget += wholeNumber;
    return this.budget;
  }


  toString() {
    let budget = `Budget: ${this.budget}€, There are ${this.listOfAnimals.length} animal(s) and ${this.listOfAdopters.length} potential adopter(s)`;
    let animals = this.listOfAnimals.map(function (animal: Animal): string {
      return animal.toString();
    });

    return [budget].concat(animals).join('\n');
  }
}


let animalShelter = new Shelter();

let myCat = new Cat();
myCat.isHealthy = true;
let myDog = new Dog("Furkesz");
myDog.isHealthy = false;
let myParrot = new Parrot();
myParrot.isHealthy = true;

animalShelter.rescue(myCat);
animalShelter.rescue(myDog);
animalShelter.rescue(myParrot);
console.log(animalShelter.toString());
// Budget: 50€, There are 3 animal(s) and 0 potential adopter(s)
// Cat is not healthy (3€) and not adoptable
// Furkesz is not healthy (1€) and not adoptable
// Parrot is not healthy (7€) and not adoptable

animalShelter.heal();
console.log(animalShelter.toString());
// Budget: 47€, There are 3 animal(s) and 0 potential adopter(s)
// Cat is healthy and adoptable
// Furkesz is not healthy (1€) and not adoptable
// Parrot is not healthy (7€) and not adoptable     

animalShelter.addAdopter("Kond");
console.log(animalShelter.toString());
// Budget: 47€, There are 3 animal(s) and 1 potential adopter(s)
// Cat is healthy and adoptable
// Furkesz is not healthy (1€) and not adoptable
// Parrot is not healthy (7€) and not adoptable

animalShelter.findNewOwner();
animalShelter.earnDonation(30);
console.log(animalShelter.toString());
// Budget: 77€, There are 2 animal(s) and 0 potential adopter(s)
// Furkesz is not healthy (1€) and not adoptable
// Parrot is not healthy (7€) and not adoptable
