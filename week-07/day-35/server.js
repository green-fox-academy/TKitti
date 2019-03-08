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











app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
