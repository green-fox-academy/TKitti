'use strict'


abstract class Instrument {
  name: string;

  abstract play();
}

abstract class StringedInstrument extends Instrument {
  numberOfStrings: number;

  abstract sound();

  play() {
  }
}

class ElectricGuitar extends StringedInstrument {
  name: string = 'Electric Guitar';
  numberOfStrings: number;

  constructor (numberOfStrings: number = 6) {
    super();
    this.numberOfStrings = numberOfStrings;
  }

  sound() {
    return 'Twang';
  }

  play() {
    console.log(`${this.name}, a ${this.numberOfStrings}-stringed instrument that goes ${this.sound()}.`);
  }
}

class BassGuitar extends StringedInstrument {
  name: string = 'Bass Guitar';
  numberOfStrings: number;

  constructor (numberOfStrings: number = 4) {
    super();
    this.numberOfStrings = numberOfStrings;
  }

  sound() {
    return 'Duum-duum-duum';
  }

  play() {
    console.log(`${this.name}, a ${this.numberOfStrings}-stringed instrument that goes ${this.sound()}.`);
  }
}

class Violin extends StringedInstrument {
  name: string = 'Violin';
  numberOfStrings: number;

  constructor (numberOfStrings: number = 4) {
    super();
    this.numberOfStrings = numberOfStrings;
  }

  sound() {
    return 'Screech';
  }

  play() {
    console.log(`${this.name}, a ${this.numberOfStrings}-stringed instrument that goes ${this.sound()}.`);
  }
}


console.log('Test 1, create Electric Guitar, Bass Guitar and Violin with default strings.');
let guitar = new ElectricGuitar();
let bassGuitar = new BassGuitar();
let violin = new Violin();

console.log('Test 1 Play');
guitar.play();
bassGuitar.play();
violin.play();

console.log('Test 2, create Electric Guitar, Bass Guitar with 7 and 5 strings .');
let guitar2 = new ElectricGuitar(7);
let bassGuitar2 = new BassGuitar(5);

console.log('Test 2 Play');
guitar2.play();
bassGuitar2.play();