'use strict';


//printing fruit after every 2s, but apple doesn't appear immediately
/*
let i = 0;

let printAnimals = function () {
  let listOfAnimals = ['apple', 'pear', 'melon', 'grapes'];
  console.log(listOfAnimals[i]);
  //counter += 2000;
  if (i > 2) {
    clearInterval(timeoutID);
  } else {
    i++;
  }
}

let timeoutID = setInterval(printAnimals, 2000);
timeoutID;
*/



//apple appears immediately, pear appears after 1s, then every fruit appears 2s later
let listOfAnimals = ['apple', 'pear', 'melon', 'grapes'];

const printing = () => {
  console.log(listOfAnimals[0]);
  let counter = 1000;
  
  for (let i = 1; i < listOfAnimals.length; i++) {
    setTimeout(() => { console.log(listOfAnimals[i]) }, counter);
    counter += 2000;
  }
}

printing();