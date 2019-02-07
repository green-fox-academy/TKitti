'use strict'


export function anagram (word1: string, word2: string) {
  let splittedWord1 = word1.split('').filter(oneLetter => oneLetter !== ' ');
  let splittedWord2 = word2.split('').filter(oneLetter => oneLetter !== ' ');

  //push every same letter of the splitterWord to an array
  //check if the length of these "subarrays" are equal
  return splittedWord1.every((oneLetter, index, array) => {
    return array.filter(element => element === oneLetter).length === splittedWord2.filter(element => element === oneLetter).length
  }) && splittedWord1.length === splittedWord2.length;
}