'use strict';


function showPosts () {
  let httpRequest = new XMLHttpRequest();
  httpRequest.open('GET', '/posts', true);
  httpRequest.setRequestHeader('Content-Type', 'application/json');
  httpRequest.send();
  httpRequest.onload = () => {
    let content = JSON.parse(httpRequest.responseText);
    let articlesContainer = document.getElementById('articles-container');

    for (let i = 0; i < content.length; i++) {
      let article = document.createElement('article');

      let voting = document.createElement('div');
      voting.classList.add('voting');
      let upIcon = document.createElement('i');
      upIcon.setAttribute('class', 'fas fa-chevron-circle-up upicon');
      let vote = document.createElement('p');
      vote.classList.add('vote');
      vote.textContent = content[i].score;
      let downIcon = document.createElement('i');
      downIcon.setAttribute('class', 'fas fa-chevron-circle-down downicon');

      voting.appendChild(upIcon);
      voting.appendChild(vote);
      voting.appendChild(downIcon);

      
      let post = document.createElement('div');
      let text = document.createElement('p');
      text.classList.add('text');
      text.textContent = content[i].title;
      let date = document.createElement('p');
      date.classList.add('date');
      date.textContent = content[i].timestamp;

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

   
    console.log(content);
  }
}
}

showPosts();