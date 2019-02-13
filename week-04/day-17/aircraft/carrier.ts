'use strict';

import { Aircraft, F16, F35 } from './aircraft';


class Carrier {
  listOfAircrafts: Aircraft[] = [];
  storeOfAmmo: number;
  healthPoint: number;

  constructor (inputAmmo: number, inputHealthPoint: number) {
    this.storeOfAmmo = inputAmmo;
    this.healthPoint = inputHealthPoint;
  }

  add(newAircraft: Aircraft) {
    this.listOfAircrafts.push(newAircraft);
  }

  fill() {
    let allAmmoNeeded: number = 0;

    this.listOfAircrafts.forEach(oneAircraft => {
      allAmmoNeeded += (oneAircraft.maxAmmo - oneAircraft.ammo);
    });

    try {
      if (this.storeOfAmmo === 0) {
        throw new Error('There is no ammo at all!');
      } 
      
      else if (this.storeOfAmmo < allAmmoNeeded) {
        this.listOfAircrafts.sort(function(a,b): any {
          return (a.hasPriority === b.hasPriority)? 0 : a.hasPriority? -1 : 1;
        });

        this.listOfAircrafts.forEach(oneAircraft => {
          oneAircraft.refill(this.storeOfAmmo);
          this.storeOfAmmo = this.storeOfAmmo - oneAircraft.ammo;
        });
      } 
      
      else {
        this.listOfAircrafts.forEach(oneAircraft => {
          oneAircraft.refill(this.storeOfAmmo);
          this.storeOfAmmo = this.storeOfAmmo - oneAircraft.ammo;
        });
      }

    } catch(error) {
      console.log(error.message);
    }
  }


  getAllDamage () {
    let allDamageCarrier = 0;
    this.listOfAircrafts.forEach(oneAircraft => {
      allDamageCarrier += oneAircraft.allDamage;
    });
    return allDamageCarrier;
  }


  fight (otherCarrier: Carrier) {
    this.listOfAircrafts.forEach(oneAircraft => {
      oneAircraft.fight();
    });

    otherCarrier.listOfAircrafts.forEach(oneAircraft => {
      oneAircraft.fight();
    });

    this.healthPoint -= otherCarrier.getAllDamage();
    otherCarrier.healthPoint -= this.getAllDamage();
  }


  getStatus() {
    if (this.healthPoint <= 0) {
      console.log('It\'s dead Jim :(');
    } else {
      console.log(`HP: ${this.healthPoint}, Aircraft count: ${this.listOfAircrafts.length}, Ammo Storage: ${this.storeOfAmmo}, Total damage: ${this.getAllDamage()}`);
      console.log('Aircrafts:');

      this.listOfAircrafts.forEach(oneAircraft => {
        console.log(`Type ${oneAircraft.type}, Ammo: ${oneAircraft.ammo}, Base Damage: ${oneAircraft.baseDamage}, All Damage: ${oneAircraft.allDamage}`);
      });
    }
  }
}
