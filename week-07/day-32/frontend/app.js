'use strict';

const express = require('express');
const app = express();
const PORT = 8080;
const path = require('path');

app.use(express.json());
app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});


app.get('/doubling', (req, res) => {
  res.writeHead(200, {'Content-Type': 'application/json'});
  let response = {
    received: req.query.input,
    result: req.query.input * 2
  }

  if (req.query.input === undefined) {
    res.end(JSON.stringify({error: "Please provide an input!"}));
  } else {
    res.end(JSON.stringify(response));
  }

  /*res.json({
    received: req.query.input,
    result: req.query.input * 2
  });*/
});


app.get('/greeter', (req, res) => {
  let message = {};

  if (req.query.name === undefined && req.query.title === undefined) {
    message = {
      "error": "Please provide a name and a title!"
    }
  } else if (req.query.name === undefined) {
    message = {
      "error": "Please provide a name!"
    }
  } else if (req.query.title === undefined) {
    message = {
      "error": "Please provide a title!"
    }
  } 
  else {
    message = {
      'welcome_message': `Oh, hi there ${req.query.name}, my dear ${req.query.title}!` 
    }
  }
  res.json(message);
});



app.get('/appenda/:inputWord', (req, res) => {
  res.writeHead(200, {'Content-Type': 'application/json'});

  let response = {
    'appended': req.params.inputWord + 'a'
  }

  if (req.params === null) {
    res.end(JSON.stringify({error: "Please provide an input!"}));
  } else {
    res.end(JSON.stringify(response));
  }
});



app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});