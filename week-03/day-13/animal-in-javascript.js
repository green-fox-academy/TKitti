'use strict'


class Animal {

  constructor(hungerInput = 50, thirstInput = 50) {
    if (Number.isInteger(hungerInput)) {
      this.hunger = hungerInput;
    } else {
      this.hunger = Math.round(hungerInput);
    }

    if (Number.isInteger(thirstInput)) {
      this.thirst = thirstInput;
    } else {
      this.hunger = Math.round(thirstInput);
    }
  }


  eat() {
    this.hunger -= 1;
  }

  drink() {
    this.thirst -= 1;
  }

  play() {
    this.hunger += 1;
    this.thirst += 1;
  }

}

// let panda = new Animal(1.5, 10);
// console.log(panda);

// let cat = new Animal(4.4);
// console.log(cat);

// cat.play();
// console.log(cat);