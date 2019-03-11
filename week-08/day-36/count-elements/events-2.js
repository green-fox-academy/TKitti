'use strict';

let button = document.getElementsByTagName('button')[0];
let result = document.getElementsByClassName('result')[0];

button.addEventListener('click', function (event) {
  let counter = event.currentTarget.previousElementSibling.childElementCount;
  result.textContent = counter;
});