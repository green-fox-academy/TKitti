'use strict';

let sectionElement = document.getElementsByTagName('section')[0];
console.log(sectionElement);

function generateOneDiv (num) {
  let oneDiv = document.createElement('div');
  oneDiv.textContent = num;
  sectionElement.appendChild(oneDiv);
}

function generate100Divs () {
  for (let i = 2; i <= 100; i++) {
    generateOneDiv(i);
  }
}

generate100Divs();


function changeBackgroundColor (element) {
  if (isPrime(element.textContent) === true) {
    element.classList.add('prime');
  } else {
    element.classList.add('not-prime');
    console.log(isPrime(element.textContent));
  }
}


const isPrime = num => {
  for(let i = 2; i < num; i++)
    if(num % i === 0) return false;
  return num > 1;
}


for (let i = 0; i < 100; i++) {
  setTimeout(() => {
    changeBackgroundColor(sectionElement.children[i]);
  }, i*100);
}