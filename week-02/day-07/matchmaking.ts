'use strict';
// Write a function that joins two array by matching one girl with one boy in a new array
// If someone has no pair, he/she should be the element of the array too
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]

let girls: string[] = ['Eve', 'Ashley', 'Claire', 'Kat', 'Jane'];
let boys: string[] = ['Joe', 'Fred', 'Tom'];



function makingMatches(array1: string[], array2: string[]) {

  let resultArray: string[] = [];

  if (array1.length > array2.length) {

    let finalIndex = 0;

    for (let i: number = 0; i < array2.length; i++) {
      resultArray.push(array1[i]);
      resultArray.push(array2[i]);
      finalIndex = i;
    }
    let remainingElements = array1.length - finalIndex;
    for (let counter = array2.length; counter < ((array2.length + remainingElements) - 1); counter++) {
      resultArray.push(array1[counter]);
    }
  }


  else if (array2.length > array1.length) {

    let finalIndex = 0;

    for (let i: number = 0; i < array1.length; i++) {
      resultArray.push(array1[i]);
      resultArray.push(array2[i]);
      finalIndex = i;
    }
    let remainingElements = array2.length - finalIndex;
    for (let counter = array1.length; counter < ((array1.length + remainingElements) - 1); counter++) {
      resultArray.push(array2[counter]);
    }
  }

  return resultArray;
}

console.log(makingMatches(girls, boys));