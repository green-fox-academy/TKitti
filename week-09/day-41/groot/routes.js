'use strict';

const express = require('express');
const app = express();

app.get('/groot', (req, res) => {
  let inputQuery =  req.query.message;
  let response = {}

  if (typeof inputQuery === "undefined") {
    response["error"] = 'I am groot';
    res.status(400);
  } else {
    response["received"] = inputQuery;
    response["translated"] = "I am Groot!";
  }

  res.json(response);
});

module.exports = app;