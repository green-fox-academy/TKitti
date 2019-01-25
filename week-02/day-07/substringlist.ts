'use strict';
//  Create a function that takes a string and a list of string as a parameter
//  Returns the index of the string in the list where the first string is part of
//  Only need to find the first occurence and return the index of that
//  Returns `-1` if the string is not part any of the strings in the list



function substrlist(string: string, arrayOfStrings: string[]): any {
  let result: number = -1;

  arrayOfStrings.forEach(function (element, index) {
    if (element.indexOf(string) > -1) {
      result = index;
    }
  });
  return result;
}

console.log(substrlist('ching', ['this', 'is', 'what', 'I\'m', 'searching', 'in']));
console.log(substrlist('not', ['this', 'is', 'what', 'I\'m', 'searching', 'in']));
