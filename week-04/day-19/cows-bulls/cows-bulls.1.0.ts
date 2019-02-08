'use strict';


class CAB {
  fourDigitNumber: number = Math.floor(Math.random()*10000);
  guessedNumber: number;
  state: string;
  counter: number = 1;

  constructor(inputGuessedNumber: number) {
    this.guessedNumber = inputGuessedNumber;
  }


  guess() {
    let result = '';
    let randomNumberToString = String(this.fourDigitNumber).split('');
    let guessedNumberToString = String(this.guessedNumber).split('');

    console.log(randomNumberToString);
    console.log(guessedNumberToString);

    for (let i: number = 0; i < 4; i++) {
      if (randomNumberToString[i] === guessedNumberToString[i]) {
        result = result + 'cow ';
      } else if (randomNumberToString[i] !== guessedNumberToString[i]
                  && 
                  randomNumberToString.some(oneDigit => oneDigit === guessedNumberToString[i])) {
        result = result + 'bull ';
      }
    }

    return result;
  }
  
};

let guess1 = new CAB(2568);

console.log(guess1.guess());

