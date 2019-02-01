'use strict'

import { Sharpie } from './sharpie';


class SharpieSet {
  sharpies: Sharpie[];

  constructor (listOfSharpies: Sharpie[]) {
    this.sharpies = listOfSharpies;
  }

  countUsable () {
    let counter: number = 0;
    this.sharpies.forEach(sharpieElement => {
      if (sharpieElement.inkAmount > 0) {
        counter++;
      }
    });
    return `${counter} sharpies can be used from the list.`;  
  }

  removeTrash () {
    let useableSharpiesArray = [];
    this.sharpies.forEach(sharpieElement => {
      if (sharpieElement.inkAmount !== 0) {
        useableSharpiesArray.push(sharpieElement);
      }
  });
  return useableSharpiesArray;
  }
}


let listOfSharpies = new SharpieSet(initializeSharpies());

function initializeSharpies (): Sharpie[] {
  let sharpiesInFunction = [];
  sharpiesInFunction.push(new Sharpie("pink", 1.6, 20));
  sharpiesInFunction.push(new Sharpie("red", 1.1, 3));
  sharpiesInFunction.push(new Sharpie("black", 2.00, 1));
  sharpiesInFunction.push(new Sharpie("green", 3.4, 5));
  sharpiesInFunction.push(new Sharpie("yellow", 5.5, 2));
  return sharpiesInFunction;
} 

listOfSharpies.sharpies.forEach(element => {
  element.use();
  element.use();
  element.use();
});

console.log(listOfSharpies);
console.log(listOfSharpies.countUsable());
console.log(listOfSharpies.removeTrash());
