'use strict';

let body = document.getElementsByTagName('body')[0];
let button = document.getElementsByTagName('button')[0];
let textElement = document.createElement('p');
body.appendChild(textElement);

let counter = 0;

const increaseCounter = () => {
  counter++;
};

const timeoutFunction = () => {
  button.addEventListener('click', increaseCounter);

  setTimeout(() => {
    if (counter >= 3) {
      textElement.textContent = '5 seconds elapsed and clicked 3 times';
    }
    console.log('5s passed');
  }, 5000);
}

document.addEventListener("DOMContentLoaded", timeoutFunction);