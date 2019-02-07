'use strict'

export function countLetters (word: string): object {
  let splittedWord: string[] = word.split('');

  let sortedLetters: string[] = splittedWord.sort();
  let joinedSortedLetters: string = sortedLetters.join('');
  
  let dictionary: object = {};

  joinedSortedLetters.split('').forEach(oneLetter => {
    let numberOfLetters = joinedSortedLetters.split(oneLetter).length - 1;
    dictionary[oneLetter] = numberOfLetters;
  });

  return dictionary;
}
