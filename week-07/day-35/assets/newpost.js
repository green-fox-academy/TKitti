'use strict';

import { showPosts } from "./homepage.js";


const submitNewPost = () => {
  let submitNewButton = document.getElementById('submit-new-button');
  submitNewButton.addEventListener('click', function() {
    getNewpostSubpage();
  });
};


function getNewpostSubpage () {
  let httpRequest = new XMLHttpRequest();
  httpRequest.open('GET', '/newpost', true);
  //here 'application/json' or this??
  httpRequest.setRequestHeader('Content-Type', 'text/html; charset=UTF-8');
  httpRequest.send();
  httpRequest.onload = () => {
    window.location.replace('http://localhost:3000/newpost');

    let data = {
      title: '',
      url: '',
      user_id: 0
    }

    let submit = document.getElementById('submit');
    submit.addEventListener('click', function (event) {
      let titleInput = document.getElementById('title').value;
      let urlInput = document.getElementById('url').value;
      let userIdInput = document.getElementById('user_id').value;


      data.title = titleInput;
      data.url = urlInput;
      data[user_id] = Number(userIdInput);

      postNewPost(data);
      showPostsAgain();

    });
  };
}


function postNewPost (inputData) {
  let httpRequest = new XMLHttpRequest();
  httpRequest.open('POST', '/posts', true);
  httpRequest.setRequestHeader('Content-Type', 'application/json');
  httpRequest.send(JSON.stringify(inputData));
  httpRequest.onload = () => {};
}

function showPostsAgain () {
  let httpRequest = new XMLHttpRequest();
  httpRequest.open('GET', '/posts', true);
  httpRequest.setRequestHeader('Content-Type', 'application/json');
  httpRequest.send();
  httpRequest.onload = () => {};
}


export {submitNewPost};
