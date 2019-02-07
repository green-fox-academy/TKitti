'use strict'


export class Apples {
  numberOfApples: number;

  constructor (inputNumberOfApples: number) {
    this.numberOfApples = inputNumberOfApples;
  }

  getApple() {
    return `You have ${this.numberOfApples} number of apples`;
  }
}
