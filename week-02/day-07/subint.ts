'use strict';
//  Create a function that takes a number and a list of numbers as a parameter
//  Returns the indeces of the numbers in the list where the first number is part of
//  Returns an empty list if the number is not part any of the numbers in the list


function subint(number: number, array: number[]): any {
  const findThis = number;
  const findThisStr = findThis.toString();
  const arrayString: string[] = array.map(function (element): string {
    return element.toString();
  });

  const result = [];

  arrayString.forEach(function (element: string, index: number) {
    if (element.indexOf(findThisStr) > -1) {
      result.push(index);
    }
  });

  return result;
}


console.log(subint(1, [1, 11, 34, 52, 61]));
console.log(subint(9, [1, 11, 34, 52, 61]));