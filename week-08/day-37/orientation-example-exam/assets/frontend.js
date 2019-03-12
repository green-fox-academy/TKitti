'use strict';

let data = {
  url: '',
  alias: '',
  secretCode: generateRandomNumber()
}

const button = document.getElementsByTagName('button')[0];
button.addEventListener('click', function (event) {
  event.preventDefault();
  const addAlias = document.forms['add-alias'];
  let urlInput = addAlias.querySelectorAll('input[type="text"]')[0].value;
  let aliasInput = addAlias.querySelectorAll('input[type="text"]')[1].value;
  data.url = urlInput;
  data.alias = aliasInput;
    
  postNewLink();

  clearInputField();
});


function generateRandomNumber () {
  return Math.floor(Math.random() * 10000);
}

function clearInputField () {
  const addAlias = document.forms['add-alias'];
  addAlias.querySelectorAll('input[type="text"]')[0].value = '';
  addAlias.querySelectorAll('input[type="text"]')[1].value = '';
}


function postNewLink () {
  let httpRequest = new XMLHttpRequest();
  httpRequest.open('POST', '/api/links', true);
  httpRequest.setRequestHeader('Content-Type', 'application/json');  
  httpRequest.send(JSON.stringify(data));
  httpRequest.onload = () => {};
}
