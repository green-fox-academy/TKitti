'use strict';

abstract class Animal {
  name: string;
  age: number;
  gender: string;
  size: string;

  constructor (inputName: string) {
    this.name = inputName;
  }

  getName(): string {
    return this.name;
  }

  abstract breed(): string;

}

class Mammal extends Animal {
  breed() {
    return 'miniature versions out.';
  }
}

class Reptile extends Animal {
  breed() {
    return 'laying eggs.';
  }
}

class Bird extends Animal {
  breed() {
    return 'laying eggs.';
  }
}


let reptile = new Reptile("Crocodile");
let mammal = new Mammal("Koala");
let bird = new Bird("Parrot");

console.log("How do you breed?");
console.log("A " + reptile.getName() + " is breeding by " + reptile.breed());
console.log("A " + mammal.getName() + " is breeding by " + mammal.breed());
console.log("A " + bird.getName() + " is breeding by " + bird.breed());