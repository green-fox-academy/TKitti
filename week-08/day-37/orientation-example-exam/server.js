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
  host: 'local',
  user: 'root',
  password: 'password',
  database: 'urls'
});


app.listen(PORT, () => {
  console.log('Server listens to port ${PORT}');
});