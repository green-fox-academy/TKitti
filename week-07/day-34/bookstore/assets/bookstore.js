'use strict';

let body = document.getElementsByTagName('body')[0];

function listBookTitles () {
  let httpRequest = new XMLHttpRequest();
  httpRequest.open('GET', '/books', true);
  
  httpRequest.onload = () => {
    let content = JSON.parse(httpRequest.responseText);
    let divElement = document.createElement('div');
    let h2Element = document.createElement('h2');
    h2Element.textContent = 'Book titles';
    divElement.appendChild(h2Element);
  
    for (let i = 0; i < content.length; i++) {
      let listElement = document.createElement('li');
      listElement.textContent = content[i];
      divElement.appendChild(listElement);
    }

    body.appendChild(divElement);
  };
  
  httpRequest.send();
}




function listDataInTable () {
  let httpRequest = new XMLHttpRequest();
  httpRequest.open('GET', '/books_long', true);
  
  httpRequest.onload = () => {
    let content = JSON.parse(httpRequest.responseText);

    //creating table
    let table = document.createElement('table');

    //creating table head row
    let keys = ['Title', 'Author', 'Category', 'Publisher', 'Price'];
    let tableRowForHead = document.createElement('tr');
    table.appendChild(tableRowForHead);

    for (let i = 0; i < keys.length; i++) {
      let tableHead = document.createElement('th');
      tableHead.textContent = keys[i];
      tableRowForHead.appendChild(tableHead);
    }

    //creating table rows
    for (let i = 0; i < content.length; i++) {
      let tableRow = document.createElement('tr');
      let tableDataTitle = document.createElement('td');
      let tableDataAuthor = document.createElement('td');
      let tableDataCategory = document.createElement('td');
      let tableDataPublisher = document.createElement('td');
      let tableDataPrice = document.createElement('td');

      tableDataTitle.textContent = content[i].book_name;
      tableDataAuthor.textContent = content[i].aut_name;
      tableDataCategory.textContent = content[i].cate_descrip;
      tableDataPublisher.textContent = content[i].pub_name;
      tableDataPrice.textContent = `$${content[i].book_price}`;

      tableRow.appendChild(tableDataTitle);
      tableRow.appendChild(tableDataAuthor);
      tableRow.appendChild(tableDataCategory);
      tableRow.appendChild(tableDataPublisher);
      tableRow.appendChild(tableDataPrice);

      table.appendChild(tableRow);
    } 

    body.appendChild(table);
  };

  httpRequest.send();
}

listBookTitles();
listDataInTable();