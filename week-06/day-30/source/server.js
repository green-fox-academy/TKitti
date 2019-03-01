'use strict';

const express = require('express');
const app = express();
const PORT = 3000;


app.set('view engine', 'ejs');
app.use('/static', express.static('static'));



let listOfImgSources = [
  '../static/images/pic1.jpg',
  '../static/images/pic2.jpg',
  '../static/images/pic3.jpg'
];



app.get('/', (req, res) => {
  res.render('index', {listOfImgSources});
});


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});