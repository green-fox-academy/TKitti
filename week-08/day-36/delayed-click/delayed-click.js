'use strcit';

let body = document.getElementsByTagName('body')[0];
let button = document.getElementsByTagName('button')[0];
let textElement = document.createElement('p');
body.appendChild(textElement);

let delayingTextDisplay = (event) => {
  textElement.textContent = '2 seconds ellapsed';
};

const timeoutFunction = () => {
  setTimeout(delayingTextDisplay, 2000);
};

button.addEventListener('click', timeoutFunction);