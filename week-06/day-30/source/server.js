'use strict';

const express = require('express');
const app = express();
const PORT = 3000;


app.set('view engine', 'ejs');
app.use('/static', express.static('static'));




let listOfImgSources = [
  {source: '../static/images/pic1.jpg', altText: 'Freiburg', imgTitle: 'Freiburg', imgText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
  {source: '../static/images/pic2.jpg', altText: 'Houses of Freiburg', imgTitle: 'Houses of Freiburg', imgText: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
  {source: '../static/images/pic3.jpg', altText: 'Freiburg', imgTitle: 'Freiburg', imgText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
];


let activeImage = listOfImgSources[0];


app.get('/', (req, res) => {
  res.render('index', {activeImage});
});


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});