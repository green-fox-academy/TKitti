'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');
const mysql = require('mysql');

app.use(express.json());
app.use('/assets', express.static('assets'));

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '/assets/index.html'));
// });


const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});



app.get('/posts', (req, res) => {
  conn.query('SELECT * FROM posts;', (error, rows) => {
    if (error) {
      console.log(error);
      res.status(500).send();
      return;
    }

    res.send(rows);
  });
});


//post method for creating new posts on reddit and saving into the database
app.post('/posts', (req, res) => {
  let inputData = req.body;
  let inputTitle = req.body.title;
  let inputUrl = req.body.url;

  conn.query(`INSERT INTO posts (title, url) VALUES ('${inputTitle}', '${inputUrl}');`, (error, rows) => {
    if (error) {
      console.log(error);
      res.status(500).send();
      return;
    }

  res.send(rows);
  });
});


app.post('/posts/:id/upvote', (req, res) => {
  let post_id = req.params.id;

  conn.query(`UPDATE posts SET score = score + 1 WHERE id = ${post_id};`, (error, rows) => {
    if (error) {
      console.log(error);
      res.status(500).send();
      return;
    }

  res.send(rows);
  });
});


app.post('/posts/:id/downvote', (req, res) => {
  let post_id = req.params.id;

  conn.query(`UPDATE posts SET score = score - 1 WHERE id = ${post_id};`, (error, rows) => {
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
