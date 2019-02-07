'use strict'


export class Sum {
  listOfNumbers: number[] = [];

  constructor (arrayNumber: number[]) {
    this.listOfNumbers = arrayNumber;
  }

  sum() {
    if (this.listOfNumbers === null) {
      return 0;
    }

    return this.listOfNumbers.reduce(function(accumulator, currentValue) {
      return accumulator + currentValue;
    }, 0);
  }
}