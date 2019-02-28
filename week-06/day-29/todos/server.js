'use strict';

const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

const todos = [
  'get up',
  'survive',
  'go back to bed',
  'set up servers'
];

app.get('/', (req, res) => {
  res.render('home', {
    todosKey: todos
  }
  //or {todos} -> the render() method accepts only objects ez a second parameter
  //this automatically be interpreted as this: {todos:todos}
  );
});


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});