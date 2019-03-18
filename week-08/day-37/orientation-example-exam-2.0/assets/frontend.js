'use strict';


let submitButton = document.getElementById('submit');
submitButton.addEventListener('click', function (event) {
  event.preventDefault();
  let urlValue = document.getElementById('url').value;
  let aliasValue = document.getElementById('alias').value;


  let data = {
    "url": urlValue,
    "alias": aliasValue,
    "secretCode":  randomNumberGenerator()
  }

  postNewAlias(data);
});


function randomNumberGenerator () {
  return Math.floor((Math.random() * 9000) + 1000);
}

function clearInputField() {
  let url = document.getElementById('url');
  let alias = document.getElementById('alias');
  url.value = '';
  alias.value = '';
}


function postNewAlias (inputData) {
  let message = document.getElementById('message');

  let httpRequest = new XMLHttpRequest();
  httpRequest.open('POST', '/api/links', true);
  httpRequest.setRequestHeader('Content-Type', 'application/json');
  httpRequest.send(JSON.stringify(inputData));

  //this version works also:
  /*
  httpRequest.onreadystatechange = function () {
    if (httpRequest.readyState === 4) {
      if (httpRequest.status === 400) {
        message.textContent = 'Your alias is already in use!';
        message.style.color = 'red';
      } else {
        let content = JSON.parse(httpRequest.responseText);
        message.textContent = `Your URL is aliased to ${content[0].alias} and your secret code is ${content[0].secretcode}.`;
      }
    }
  }
  */

  httpRequest.onload = () => {
    let message = document.getElementById('message');
    
    if (httpRequest.status === 400) {
      message.textContent = 'Your alias is already in use!';
    } else {
      let content = JSON.parse(httpRequest.responseText);
      message.textContent = `Your URL is aliased to ${content[0].alias} and your secret code is ${content[0].secretcode}.`;
      clearInputField();
    }
  }
}


//here in the frontend I can only call a specific url by writing the alias after the a/
//to make it "general", I would need an event on the frontend (e.g. by clicking a button, it redirects to the website)
//by this version in the backend I have to write: res.json(rows);  (instead of this: res.redirect(rows[0].url);)

/*function redirectToAliasLink () {
  let httpRequest = new XMLHttpRequest();
  httpRequest.open('GET', '/a/alias', true);
  httpRequest.setRequestHeader('Content-Type', 'application/json');
  httpRequest.send();
  httpRequest.onload = () => {
    let content = JSON.parse(httpRequest.responseText);
    console.log(content);

    if (content !== undefined) {
      window.location = `${content[0].url}`;
    }
  }
}

redirectToAliasLink();
*/


function getLinks () {
  let httpRequest = new XMLHttpRequest();
  httpRequest.open('GET', '/api/links', true);
  httpRequest.setRequestHeader('Content-Type', 'application/json');
  httpRequest.send();
  httpRequest.onload = () => {};
}

getLinks();
