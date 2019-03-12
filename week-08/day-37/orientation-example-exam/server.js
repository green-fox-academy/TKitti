'use strict';

const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');
const mysql = require('mysql');

app.use('/', express.static('assets'));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/assets/index.html'));
});

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'urls'
});


app.post('/api/links', (req, res) => {
  let urlInput = req.body.url;
  let aliasInput = req.body.alias;
  let secretCode = req.body.secretCode;

  connection.query(`INSERT INTO links (url, alias, hitCount, secretCode) VALUES ('${urlInput}', '${aliasInput}', 0, '${secretCode}');`, (error, rows) => {
    if (error) {
      console.log(error);
      res.status(500).send();
      return;
    }
    res.send(rows);
  });
});


app.listen(PORT, () => {
  console.log(`Server listens to port ${PORT}`);
});