'use sctrict';

export { Aircraft, F16, F35 };

class Aircraft {
  type: string;
  ammo: number;
  maxAmmo: number;
  baseDamage: number;
  allDamage: number;
  hasPriority: boolean;

  fight() {
    this.allDamage = this.baseDamage * this.ammo;
    this.ammo = 0;
    return this.allDamage;
  }

  refill(amount: number) {
    let ammoNeed = this.maxAmmo - this.ammo;
    let inputAmmo = amount;
    
    //can't get more ammo than what's coming from the parameter 
    if (ammoNeed > inputAmmo) {
      this.ammo += inputAmmo;
    } else {
      this.ammo += ammoNeed;
    }
    
    //can't get more ammo than the max ammo of the aircraft
    if (this.ammo > this.maxAmmo) {
      this.ammo = this.maxAmmo;
    }
    
    inputAmmo = inputAmmo - ammoNeed;
    if (inputAmmo < 0) {
      inputAmmo = 0;
    }

    return inputAmmo;
  }

  getType() {
    return `The type of this aircraft is ${this.type}.`;
  }

  getStatus() {
    return `Type ${this.type}, Ammo: ${this.ammo}, Base Damage: ${this.baseDamage}, All Damage: ${this.allDamage}`;
  }

  isPriority() {
    if (this.hasPriority === true) {
      return `This aircraft has priority in the ammo fill queue.`;
    } else {
      return `This aircraft has NO priority in the ammo fill queue.`;
    }
  }

}


class F16 extends Aircraft {
  type: string = 'F16';
  ammo: number = 0;
  maxAmmo: number = 8;
  baseDamage: number = 30;
  allDamage: number = 0;
  hasPriority: boolean = false;
}


class F35 extends Aircraft {
  type: string = 'F35';
  ammo: number = 0;
  maxAmmo: number = 12;
  baseDamage: number = 50;
  allDamage: number = 0;
  hasPriority: boolean = true;
}
