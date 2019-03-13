'use strict';

let form = document.forms[0];
let dog = document.getElementById('dog');
let cat = document.getElementById('cat');
let fish = document.getElementById('fish');
let yes = document.getElementById('yes');
let no = document.getElementById('no');
let loveCatsButton = document.getElementById('love-cats-button');
let signUpButton = document.getElementById('sign-up-button');

function checkClicksOnForm () {
  if (dog.checked === true || cat.checked === true) {
    signUpButton.style.color = 'white';
    signUpButton['disabled'] = false;
  } else {
    signUpButton.style.color = 'grey';
    signUpButton['disabled'] = true;
  }

  if (yes.checked === true && cat.checked === true) {
    loveCatsButton['disabled'] = false;
    loveCatsButton.style.color = 'white';
  } else {
    loveCatsButton['disabled'] = true;
    loveCatsButton.style.color = 'grey';
  }

  if (fish.checked === true && no.checked === true) {
    signUpButton.style.color = 'white';
    signUpButton['disabled'] = false;
  } else {
    signUpButton.style.color = 'grey';
    signUpButton['disabled'] = true;
  }
}

function alertForCats () {
  alert('Thank you, you\'ve successfully signed up for cat facts');
}

function alertForSignUp () {
  alert('Sigh, we still added you to the cat facts list');
}

form.addEventListener('click', checkClicksOnForm);
loveCatsButton.addEventListener('click', alertForCats);
signUpButton.addEventListener('click', alertForSignUp);