'use strict';

let button = document.getElementsByTagName('button')[0];
let body = document.getElementsByTagName('body')[0];
let date = document.createElement('p');
body.appendChild(date);

//solution one
/*const displayTime = (event) => {
  date.textContent = new Date();
  button.disabled = 'false';
};

button.addEventListener('click', displayTime);*/

//solution two
const displayTime = () => {
  date.textContent = new Date();
  button.removeEventListener('click', displayTime);
};

button.addEventListener('click', displayTime);