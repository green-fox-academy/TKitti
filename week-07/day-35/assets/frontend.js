'use strict';

function showPosts () {
  let httpRequest = new XMLHttpRequest();
  httpRequest.open('GET', '/posts', true);
  httpRequest.setRequestHeader('Content-Type', 'application/json');
  httpRequest.send();
  httpRequest.onload = () => {
    let content = JSON.parse(httpRequest.responseText);
    let articlesContainer = document.getElementById('articles-container');

    //creating article elements based on how many rows are in the sql table
    for (let i = 0; i < content.length; i++) {
      let article = document.createElement('article');

      //voting
      let voting = document.createElement('div');
      voting.classList.add('voting');
      let upIcon = document.createElement('i');
      upIcon.dataset.id = i+1;
      upIcon.setAttribute('class', 'fas fa-chevron-circle-up upicon');
      upvote(upIcon);
      let vote = document.createElement('p');
      vote.classList.add('vote');
      vote.textContent = content[i].score;
      let downIcon = document.createElement('i');
      downIcon.dataset.id = i+1;
      downIcon.setAttribute('class', 'fas fa-chevron-circle-down downicon');
      downvote(downIcon);

      voting.appendChild(upIcon);
      voting.appendChild(vote);
      voting.appendChild(downIcon);

      //the post
      let post = document.createElement('div');
      let text = document.createElement('p');
      text.classList.add('text');
      text.textContent = content[i].title;
      let date = document.createElement('p');
      date.classList.add('date');
      date.textContent = content[i].timestamp;
      //modify and remove buttons
      let buttonsContainer = document.createElement('div');
      buttonsContainer.classList.add('buttons-container');
      let updateButton = document.createElement('p');
      updateButton.classList.add('update');
      updateButton.textContent = 'modify';
      let deleteButton = document.createElement('p');
      deleteButton.classList.add('delete');
      deleteButton.textContent = 'remove';
      buttonsContainer.appendChild(updateButton);
      buttonsContainer.appendChild(deleteButton);

      post.appendChild(text);
      post.appendChild(date);
      post.appendChild(buttonsContainer);

      article.appendChild(voting);
      article.appendChild(post);

      articlesContainer.appendChild(article);
    }
  }
}

showPosts();


//upvoting
function upvote (icon) {
  icon.addEventListener('click', function () {
    let actualIcon = event.currentTarget;
    upvoteRequest(actualIcon.dataset.id, actualIcon);
  });
}

function upvoteRequest (inputId, inputIcon) {
  let id = inputId;

  let httpRequest = new XMLHttpRequest();
  httpRequest.open('PUT', `/posts/${id}/upvote`)
  httpRequest.setRequestHeader('Content-Type', 'application/json');
  httpRequest.send();
  httpRequest.onload = () => {
    let content = JSON.parse(httpRequest.responseText);
    inputIcon.nextElementSibling.textContent = content[0].score;
  }
}



//downvoting
function downvote (icon) {
  icon.addEventListener('click', function () {
    let actualIcon = event.currentTarget;
    downvoteRequest(actualIcon.dataset.id, actualIcon);
  });
}

function downvoteRequest (inputId, inputIcon) {
  let id = inputId;

  let httpRequest = new XMLHttpRequest();
  httpRequest.open('PUT', `/posts/${id}/downvote`)
  httpRequest.setRequestHeader('Content-Type', 'application/json');
  httpRequest.send();
  httpRequest.onload = () => {
    let content = JSON.parse(httpRequest.responseText);
    inputIcon.previousElementSibling.textContent = content[0].score;
  }
}