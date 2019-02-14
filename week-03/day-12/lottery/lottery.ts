'use strict'
export {}


const fs = require('fs');

function getLotteryNumbers (filename: string) {
  let fileContent = fs.readFileSync(filename, 'utf-8');
  let splittedContent = fileContent.toString().split('\r\n');

  let splittedBySemiColon = splittedContent.map(function (element) {
    return element.split(';');
  });

  let lotteryNumbersArray: number[] = [];

  for (let outerArrayCounter: number = 0;
        outerArrayCounter < splittedBySemiColon.length;
        outerArrayCounter++) {

          for (let innerArrayCounter: number = 11;
                innerArrayCounter < 16;
                innerArrayCounter++) {
                  lotteryNumbersArray.push(
                    splittedBySemiColon[outerArrayCounter][innerArrayCounter]);
                }
  }

  return lotteryNumbersArray;

}



function most5FrequentNumbers (listOfNumbers: number[]) {
  /* need these 2 variables if we only want to get the most frequent number
  let element = 0;
  let count = 0;
*/

  let lotteryObject = {};
  
  //giving the keys (1-90) to the object and setting every value to 0
  for (let i: number = 1; i <= 90; i++) {
    lotteryObject[i] = 0;
  }


  for (let j = 0; j < listOfNumbers.length; j++) {
    let tempElement = listOfNumbers[j];
    let tempCount = 0;

    for (let p = 0; p < listOfNumbers.length; p++) {
      if (listOfNumbers[p] === tempElement) {
        tempCount++;
      }
    }

    //to get the most frequent element:
    /*
    if (tempCount > count) {
      element = tempElement;
      count = tempCount;
    }
    */  

    lotteryObject[tempElement] = tempCount;
  }


  //pushing key-value pairs into multiarray
  let lotteryNumbersInArray: number[][] = [];
  for (let number in lotteryObject) {
    lotteryNumbersInArray.push([number, lotteryObject[number]]);
  }

  //sorting multi array by frequency number
  lotteryNumbersInArray.sort(function(a,b) {
    return b[1] - a[1];
  });

  let result: number[] = [];
  result.push(lotteryNumbersInArray[0][0]);
  result.push(lotteryNumbersInArray[1][0]);
  result.push(lotteryNumbersInArray[2][0]);
  result.push(lotteryNumbersInArray[3][0]);
  result.push(lotteryNumbersInArray[4][0]);

  return result;
}

console.log(most5FrequentNumbers(getLotteryNumbers('lottery-source-file.txt')));