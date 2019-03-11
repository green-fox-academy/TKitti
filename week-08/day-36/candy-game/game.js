'use strict';

let body = document.getElementsByTagName('body')[0];
let message = document.createElement('p');
body.appendChild(message);

let candies = document.querySelector('.candies');
let lollipops = document.querySelector('.lollypops');
let candiesPerSecond = document.querySelector('.speed');

let candiesCounter = 0;
let lolliCounter = 9;
let candiesPerSecondCounter = 0;

let createCandiesButton = document.querySelector('.create-candies');
let buyLollipopsButton = document.querySelector('.buy-lollypops');
let candyRainButton = document.querySelector('.candy-machine');


//functions
function increaseCandyByOne () {
  candiesCounter++;
  candies.textContent = candiesCounter;
}

function increaseLollipopByOne () {
  lollipops.textContent += '🍭' ;
  lolliCounter++;
}

function buyLollipop () {
  if (candiesCounter >= 100) {
    candiesCounter -= 100;
    increaseLollipopByOne();
    changeCandiesPerSecondByOne();
    message.textContent = '';
  } else if (candiesCounter < 100) {
    message.textContent = 'You don\'t have enough candies to buy a lolli. Collect more!';
  }
}

function changeCandiesPerSecondByOne () {
  if (lolliCounter % 10 === 0) {
    candiesPerSecondCounter++;
    candiesPerSecond.textContent = candiesPerSecondCounter;
    setInterval(increaseCandyByOne, 1000);
  }
}

function speedUpIncreasingTenTimes () {
  candiesPerSecondCounter += 10;
  candiesPerSecond.textContent = candiesPerSecondCounter;

  setInterval(() => {
    candiesCounter += 10;
    candies.textContent = candiesCounter;
  }, 1000);
  candyRainButton.disabled = 'true';
}


//event listeners
createCandiesButton.addEventListener('click', increaseCandyByOne);
buyLollipopsButton.addEventListener('click', buyLollipop);
candyRainButton.addEventListener('click', speedUpIncreasingTenTimes);