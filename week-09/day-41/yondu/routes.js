'use strict';

const express = require('express');
const app = express();

app.get('/yondu', (req, res) => {
  if (req.query.distance === undefined && req.query.time === undefined) {
    res.status(400);
    res.json({error: 'Please provide distance and time!'});
  } else if (typeof req.query.distance === 'undefined') {
    res.status(400);
    res.json({error: 'Provide a distance!'});
  } else if (typeof req.query.time === 'undefined') {
    res.status(400);
    res.json({error: 'Provide a time!'});
  }  else {
    res.status(200);
    res.json({
      "distance": Number(req.query.distance),
      "time": Number(req.query.time),
      "speed": Number(req.query.distance / req.query.time)
    });
  }
});

module.exports = app;