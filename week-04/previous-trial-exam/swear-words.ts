'use strict';

import { readFileSync } from "fs";

let fs = require('fs');

let offensiveWords: string[] = ['fuck', 'bloody', 'cock', 'shit', 'fucker', 'fuckstick', 'asshole', 'dick', 'piss'];


function familyFriendlizer(inputFile: string, inputArray: string[]) {
  let fileContent: string = fs.readFileSync(inputFile, 'utf-8').toLowerCase();
  let splitted: string[] = fileContent.split(' ');
  let counter: number = 0;

  for (let i: number = 0; i < splitted.length; i++) {
    for (let j: number = 0; j < offensiveWords.length; j++) {
      if (splitted[i].split(".").join("").split(",").join("") === offensiveWords[j]) {
        counter++;
      }
    }
  }
  return counter;


  // let newArray = [];
  // for (let i: number = 0; i < offensiveWords.length; i++) {
  //   if (offensiveWords[i] === 'fucker' || offensiveWords[i] === 'fuckstick') {
  //     continue;
  //   } else {
  //     splitted.forEach(oneWord => {
  //       if (oneWord.indexOf(offensiveWords[i]) > -1) {
  //         newArray.push(offensiveWords[i]);
  //         counter++;
  //       }
  //     });
  //   }
  // }
}

console.log(familyFriendlizer("content.txt", offensiveWords));