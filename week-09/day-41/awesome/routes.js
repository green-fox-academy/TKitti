"use strict";

const express = require('express');
const app = express();
const path = require('path');
const mysql = require('mysql');

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "songmix"
});

app.use(express.json());
//app.use(express.urlencoded({ extended: true }));

app.use('/assets', express.static('assets'));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/index.html'));
});


app.get('/awesome', (req, res) => {
  conn.query(`SELECT * FROM songs;`, (error, rows) => {
    if (error) {
      console.log(error);
      res.status(500).send();
      return;
    }
    res.status(200);
    res.json(rows);
  });
});


app.post('/add', (req, res) => {
  let inputAuthor = req.body.author;
  let inputTitle = req.body.title;
  let inputGenre = req.body.genre;
  let inputYear = req.body.year || 0;
  let inputRating = req.body.rating || 0;

  conn.query(`INSERT INTO songs (author, title, genre, year, rating) VALUES ('${inputAuthor}', '${inputTitle}', '${inputGenre}', ${inputYear}, ${inputRating});`, (error, rows) => {
    if (error) {
      console.log(error);
      res.status(500).send();
      return;
    }
    
    conn.query(`SELECT * FROM songs;`, (error, rows) => {
      if (error) {
        console.log(error);
        res.status(500).send();
        return;
      }
      res.json(rows[rows.length - 1]);
    });
  });
});



app.delete('/deletesong', (req, res) => {
  let inputId = req.body.id;

  conn.query(`DELETE FROM songs WHERE id=${inputId};`, (error, rows) => {
    if (error) {
      console.log(error);
      res.status(500).send();
      return;
    }
    res.status(200).send();
  });
});



module.exports = app;