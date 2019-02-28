'use strict';

const express = require('express');
const app = express();
const PORT = 3000;

const path = require('path');


app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});


app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});