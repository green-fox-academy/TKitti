'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');
const mysql = require('mysql');

app.use(express.json());
app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/assets/index.html'));
});


const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});


app.get('/books', (req, res) => {
  conn.query('SELECT * FROM book_mast;', (error, rows) => {
    if (error) {
      console.log(error);
      res.status(500).send();
      return;
    }

    let bookNames = rows.map(oneBook => {
      return oneBook.book_name;
    });
    
    res.send(bookNames);
  });
});


app.get('/books_long', (req, res) => {
  let queryString = req.query;
  let sqlQuery = 'SELECT book_mast.book_name, author.aut_name, category.cate_descrip, publisher.pub_name, book_mast.book_price FROM author LEFT JOIN book_mast ON author.aut_id=book_mast.aut_id LEFT JOIN category ON category.cate_id=book_mast.cate_id LEFT JOIN publisher ON publisher.pub_id=book_mast.pub_id';

  if (Object.entries(queryString).length !== 0) {
    sqlQuery += ' WHERE';

    if (queryString.category !== undefined) {
      sqlQuery = sqlQuery.concat(` cate_descrip = '${queryString.category}'`)
    }
    if (queryString.publisher !== undefined) {
      sqlQuery = sqlQuery.concat(` pub_name = '${queryString.publisher}'`);
    }
    
    if (queryString.price !== undefined) {
      sqlQuery = sqlQuery.concat(` book_price > '${queryString.price}' AND book_price <= '${queryString.price}'`);
    }
  }


  conn.query(sqlQuery, (error, rows) => {
    if (error) {
      console.log(error);
      res.status(500).send();
      return;
    }
    
    res.send(rows);
  });

  
});


app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});