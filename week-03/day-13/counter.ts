'use strict'
export { }


class Counter {
  integer: number;

  constructor(inputNumber: number = 0) {
    this.integer = inputNumber;
  }

  add(number) {
    this.integer = this.integer + number;
  }

  /*
  add() {
      this.integer++;
    }
  */

  get() {
    return this.integer;
  }

  reset() {
    this.integer = 0;
  }
}

let exmaple1 = new Counter(25);
exmaple1.add(10);

console.log(exmaple1.get());
console.log(exmaple1);