'use strict';

let h1Element = document.getElementsByTagName('h1')[0];

window.addEventListener('keyup', function(event) {
  h1Element.textContent = `Last pressed key code is: ${event.keyCode}`;
});