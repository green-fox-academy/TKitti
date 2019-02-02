'use strict'


export class Pirate {
  pirateName: string;
  alcoholLevel: number;
  newAlcoholLevel: number;
  isSleep: boolean = false;
  isDead: boolean = false;
 
  constructor (inputName: string, inputAlcoholLevel: number) {
    this.pirateName = inputName;
    this.alcoholLevel = inputAlcoholLevel;
  }

  drinkSomeRum() {
    if (this.isDead === false) {
      if (this.newAlcoholLevel > 0) {
        return this.newAlcoholLevel += 1;
      } else {
        this.newAlcoholLevel = this.alcoholLevel + 1;
        return this.newAlcoholLevel;
      }
    } else {
      return 'He\'s dead...';
    }
  }

  howsItGoingMate() {
    if (this.isDead === false) {
      if ((this.newAlcoholLevel - this.alcoholLevel) <= 4) {
        console.log('Pour me anudder!');
      } else {
        console.log('Arghh, I\'ma Pirate. How d\'ya d\'ink its goin?');
        this.isSleep = true;
      }
    } else {
      return 'He\'s dead...';
    }
  }

  die() {
    this.isDead = true;
  }

  brawl(otherPirate: Pirate) {
    if (this.isDead === false && otherPirate.isDead === false) {

      let caseNumber: number = Math.floor(Math.random() * 3);
      if (caseNumber === 0) {
        this.isDead = true;
        return `Pirate ${this.pirateName} died! :(`;
      } else if (caseNumber === 1) {
        otherPirate.isDead = true;
        return `Pirate ${otherPirate.pirateName} died! :(`;
      } else if (caseNumber === 2) {
        this.isSleep = true;
        otherPirate.isSleep = true;
        return `It\'s a draw but both pirates fell asleep.`;
      }

    } else {
      return 'Only live pirates can fight!';
    }
  }
}
