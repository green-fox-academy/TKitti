'use strict'


class Plant {
  type: string;
  color: string;
  waterAmount: number;
  absorbValue: number;
  
  constructor (
    inputType: string,
    inputColor: string,
    inputWaterAmount: number
    ) {
      this.type = inputType;
      this.color = inputColor;
      this.waterAmount = inputWaterAmount;
    }
}
  
  
class Flower extends Plant {
    type: string;
  absorbValue: number = 0.75;
  
  constructor (
    inputColor: string,
    inputWaterAmount: number
    ) {
      super('flower', inputColor, inputWaterAmount);
  }
}

class Tree extends Plant {
  type: string;
  absorbValue: number = 0.4;
  
  constructor (
    inputColor: string,
    inputWaterAmount: number
    ) {
      super('tree', inputColor, inputWaterAmount);
  }
}



let flowerYellow = new Flower('yellow', 10);
let flowerBlue = new Flower('blue', 2);
let treePurple = new Tree('purple', 5);
let treeOrange = new Tree('orange', 15);


class Garden {
  listOfPlants: Plant[] = [];

  watering() {

    this.listOfPlants.forEach(onePlant => {
      if (onePlant.type === 'flower' && onePlant.waterAmount < 5) {
        console.log(`The ${onePlant.color} ${onePlant.type} needs water`);
      } else if (onePlant.type === 'flower' && onePlant.waterAmount >= 5) {
        console.log(`The ${onePlant.color} ${onePlant.type} doesnt need water`);
      } else if (onePlant.type === 'tree' && onePlant.waterAmount < 10) {
        console.log(`The ${onePlant.color} ${onePlant.type} needs water`);
      } else if (onePlant.type === 'tree' && onePlant.waterAmount >= 10) {
        console.log(`The ${onePlant.color} ${onePlant.type} doesnt need water`);
      }
    });


    let thirstyPlants = [];
    
    this.listOfPlants.forEach(function(onePlant) {
      if (
      onePlant.type === 'flower' && onePlant.waterAmount < 5
      ||
      onePlant.type === 'tree' && onePlant.waterAmount < 10
      ) {
        thirstyPlants.push(onePlant);
      }
    });

    for (let i: number = 40; i <= 70; i=i+30) {
      thirstyPlants.forEach(onePlant => {
        onePlant.waterAmount += ((i / thirstyPlants.length) * onePlant.absorbValue);
      });

      console.log(`Watering with ${i}`);
      this.listOfPlants.forEach(onePlant => {
        if (onePlant.type === 'flower' && onePlant.waterAmount < 5) {
          console.log(`The ${onePlant.color} ${onePlant.type} needs water`);
        } else if (onePlant.type === 'flower' && onePlant.waterAmount >= 5) {
          console.log(`The ${onePlant.color} ${onePlant.type} doesnt need water`);
        } else if (onePlant.type === 'tree' && onePlant.waterAmount < 10) {
          console.log(`The ${onePlant.color} ${onePlant.type} needs water`);
        } else if (onePlant.type === 'tree' && onePlant.waterAmount >= 10) {
          console.log(`The ${onePlant.color} ${onePlant.type} doesnt need water`);
        }
      });
    }
  }
}

let myGarden = new Garden;

myGarden.listOfPlants.push(flowerYellow);
myGarden.listOfPlants.push(flowerBlue);
myGarden.listOfPlants.push(treePurple);
myGarden.listOfPlants.push(treeOrange);

myGarden.watering();
