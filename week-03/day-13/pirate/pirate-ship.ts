'use strict'

import { Pirate } from './pirate';


class PirateShip {
  crewOfShip: Pirate[] = [];
  captain: Pirate;

  fillShip() {
    let numberOfPirates: number = (Math.floor(Math.random() * 17) + 4);   //maximum 20 pirates + 1 captain
    let randomAlcoholLevel: number = Math.floor(Math.random() * 11);

    this.captain = new Pirate('Pirate Nr.1 alias Captain', randomAlcoholLevel);
    this.crewOfShip.push(this.captain);

    for (let i: number = 2; i < numberOfPirates; i++) {
      this.crewOfShip.push(new Pirate(`Pirate${i}`, randomAlcoholLevel));
    }
  }

  showNumberOfAliveCrew() {
    let numberOfLivePirates: number = 0;
    this.crewOfShip.forEach(function (onePirate) {
      if (onePirate.isDead === false) {
        numberOfLivePirates++;
      }
    });
    return numberOfLivePirates;
  }

  battle(otherShip: PirateShip) {
    //calculate score: Number of Alive pirates in the crew - Number of consumed rum by the captain

    //if there were no drinkSome() before the battle, the alcoholLevel of the captain will taken into consideration
    //otherwise calculations are done with the value of newAlcoholLevel
    let scoreOfThisShip: number = 
    this.showNumberOfAliveCrew() - (this.captain.newAlcoholLevel === undefined ? this.captain.alcoholLevel : this.captain.newAlcoholLevel);

    let scoreOfOtherShip: number = 
    otherShip.showNumberOfAliveCrew() - (otherShip.captain.newAlcoholLevel === undefined ? otherShip.captain.alcoholLevel : otherShip.captain.newAlcoholLevel);

    let randomNumberOfDeathsInThisShip: number = Math.floor(Math.random() * this.showNumberOfAliveCrew());
    let randomNumberOfDeathsInOtherShip: number = Math.floor(Math.random() * otherShip.showNumberOfAliveCrew());


    if (scoreOfThisShip > scoreOfOtherShip) {
        for (let i: number = 1; i < randomNumberOfDeathsInOtherShip; i++) {
          //i starts from 1 because captain never dies
          otherShip.crewOfShip[i].isDead = true;
        }

        this.crewOfShip.forEach(function (onePirate) {
          if (onePirate.isDead === false) {
            for (let i: number = 0; i < (Math.floor(Math.random()*5)); i++) {
              onePirate.drinkSomeRum();
            }
          }
        });

        return true;
    }

    else if (scoreOfThisShip < scoreOfOtherShip) {
        for (let i: number = 1; i < randomNumberOfDeathsInThisShip; i++) {
          //i starts from 1 because captain never dies
          this.crewOfShip[i].isDead = true;
        }

        otherShip.crewOfShip.forEach(function (onePirate) {
          if (onePirate.isDead === false) {
            for (let i: number = 0; i < (Math.floor(Math.random()*8)); i++) {
              onePirate.drinkSomeRum();
            }
          }
        });

        return 'You lost the battle!';
    }

    else if (scoreOfThisShip === scoreOfOtherShip) {
        return 'Every pirate is still alive, try again to battle the other ship!'
    }
  }

}
