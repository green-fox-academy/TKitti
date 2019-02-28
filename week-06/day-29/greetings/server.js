'use strict';

const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home', {qs: req.query});
});


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});