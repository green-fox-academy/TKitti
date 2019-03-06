'use strict';

let display = document.getElementsByClassName('display')[0];
let button = document.getElementsByTagName('button')[0];

let nums = [10,9,8,7,6,5,4,3,2,1,0];
let counter = 0;

function updateSeconds () {
  if (nums[counter] === 0) {
    display.textContent = "Bomb exploded";
  } else if (nums[counter] <= 10) {
    display.textContent = nums[counter];
    counter++;
  }
}

let timeout = setInterval(updateSeconds, 1000);

button.onclick = function () {
  clearInterval(timeout);
  display.textContent = 'Bomb defused';
}