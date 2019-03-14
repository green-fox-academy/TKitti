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
  res.sendFile(path.join(__dirname, 'views/index.html'));
});


const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});



app.get('/posts', (req, res) => {
  conn.query('SELECT posts.title, posts.url, posts.timestamp, posts.score, users.name FROM posts LEFT JOIN users ON posts.user_id=users.user_id;', (error, rows) => {
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


app.put('/posts/:id/upvote', (req, res) => {
  let post_id = req.params.id;

  conn.query(`UPDATE posts SET score = score + 1 WHERE post_id = ${post_id};`, (error, row) => {
    if (error) {
      console.log(error);
      res.status(500).send();
      return;
    }
    conn.query(
      `SELECT score FROM posts WHERE post_id=${post_id};`,
      (error, rows) => {
        if (error) {
          console.log(error);
          res.status(500).send();
          return;
        }
        res.json(rows);
      }
    );
  });
});


app.put('/posts/:id/downvote', (req, res) => {
  let post_id = req.params.id;

  conn.query(`UPDATE posts SET score = score - 1 WHERE post_id = ${post_id};`, (error, rows) => {
    if (error) {
      console.log(error);
      res.status(500).send();
      return;
    }
    conn.query(
      `SELECT score FROM posts WHERE post_id=${post_id};`,
      (error, rows) => {
        if (error) {
          console.log(error);
          res.status(500).send();
          return;
        }
        res.json(rows);
      }
    );
  });
});


app.put('/posts/:id', (req, res) => {
  let postIDinUrl = req.params.id;
  let inputTitle = req.body.title;
  let inputUrl = req.body.url;
  let userIDinHead = Number(req.headers.username);

  conn.query(`SELECT user_id FROM posts WHERE posts.post_id=${postIDinUrl};`, (error, rows) => {
    if (error) {
            console.log(error);
            res.status(500).send();
            return;
          }

    let userIDinSql = rows[0].user_id;
    
    let updates = [];

    if (userIDinHead == userIDinSql  && inputTitle !== undefined) {
      updates.push(`title='${inputTitle}'`); 
    }

    if (userIDinHead === userIDinSql && inputUrl !== undefined) {
      updates.push(`url='${inputUrl}'`); 
    }

    let sql = `UPDATE posts SET ${updates[0]}, ${updates[1]} WHERE post_id=${postIDinUrl};`;
    conn.query(sql, (error, rows) => {});
    res.send(rows);
  });
});



app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
