let httpRequest = new XMLHttpRequest();
httpRequest.open('GET', 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=apollo11&api-key=gX8Wu3NmIWZA8wpfGfTdK4PXJgkBWC9K', true);

httpRequest.onload = () => {
  let content = JSON.parse(httpRequest.responseText);
  let body = document.getElementsByTagName('body')[0];

  
  for (let i = 0; i < content.response.docs.length; i++) {
    let article = document.createElement('article');
    let titleOfArticle = document.createElement('h1');
    let snippet = document.createElement('p');
    let link = document.createElement('a');
    let date = document.createElement('p');

    titleOfArticle.textContent = content.response.docs[i].headline.main;
    snippet.textContent = content.response.docs[i].snippet;
    link.href = content.response.docs[i].web_url;
    link.textContent = 'Click here to read the article';
    date.textContent = content.response.docs[i].pub_date;

    article.appendChild(titleOfArticle);
    article.appendChild(snippet);
    article.appendChild(link);
    article.appendChild(date);
    body.appendChild(article);
  }


  console.log(content.response.docs[0].pub_date);


}

httpRequest.send();