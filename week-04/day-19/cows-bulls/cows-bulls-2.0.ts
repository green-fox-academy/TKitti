'use strict';


export class CAB {
  fourDigitNumber: number[] = [];
  guessedNumber: number[] = [];
  state: string;
  counter: number;

  constructor(digitsInput: number[] = [Math.floor(Math.random() * 9 + 1),
    Math.floor(Math.random() * 9 + 1), Math.floor(Math.random() * 9 + 1),
    Math.floor(Math.random() * 9 + 1)]) {
      this.state = 'playing'
      this.counter = 0;
      this.fourDigitNumber = digitsInput;
    }
  
  formGuessedNumber (guess1:number, guess2:number, guess3:number, guess4:number) {
    this.guessedNumber.push(guess1);
    this.guessedNumber.push(guess2);
    this.guessedNumber.push(guess3);
    this.guessedNumber.push(guess4);
  }

  guess(guess1:number, guess2:number, guess3:number, guess4:number) {
    this.formGuessedNumber(guess1, guess2, guess3, guess4);

    console.log(this.fourDigitNumber);
    console.log(this.guessedNumber);

    let result = '';

    for (let i: number = 0; i < 4; i++) {
      if (this.fourDigitNumber[i] === this.guessedNumber[i]) {
        result = result + 'cow ';
        this.counter = i+1;
      } else if (this.fourDigitNumber[i] !== this.guessedNumber[i]
                  && 
                  this.fourDigitNumber.some(oneDigit => oneDigit === this.guessedNumber[i])) {
        result = result + 'bull ';
        this.counter = i+1;
      }
    }

    if (result === 'cow cow cow cow') {
      this.state = 'finished';
    }

    console.log(this.state);
    console.log(this.counter);

    return result;
  }
};
