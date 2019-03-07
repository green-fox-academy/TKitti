'use strict';

let httpRequest = new XMLHttpRequest();
httpRequest.open('GET', '/books', true);

httpRequest.onload = () => {
  let content = JSON.parse(httpRequest.responseText);
  let body = document.getElementsByTagName('body')[0];
  let h2Element = document.createElement('h2');
  h2Element.textContent = 'Book titles';
  body.appendChild(h2Element);

  for (let i = 0; i < content.length; i++) {
    let listElement = document.createElement('li');
    listElement.textContent = content[i];
    body.appendChild(listElement);
  }
};

httpRequest.send();