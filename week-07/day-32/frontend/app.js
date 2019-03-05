'use strict';

const express = require('express');
const app = express();
const PORT = 8080;
const path = require('path');

app.use(express.json()); //middleware
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

  res.end(JSON.stringify(response));
});

app.get('/appenda', (req, res) => {
  res.status(404).send();
});




app.post('/dountil/:action', (req, res) => {
  let output = {};
  let data = req.body;

  
  if (req.params.action === 'sum') {
    let startSum = 0;
    for (let i = 0; i <= data.until; i++) {
      startSum += i;
    }
    output = {result: startSum};
    
  } else if (req.params.action === 'factor') {
    let startFactor = 1;
    for (let i = 1; i <= data.until; i++) {
      startFactor *= i;
    }
    output = {result: startFactor};
  }
  
  console.log(output);
  res.json(output);
});


app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});