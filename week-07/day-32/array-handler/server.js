'use strict';

const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());


app.post('/arrays', (req, res) => {
  let inputAction = req.body.what;
  let inputNumbers = req.body.numbers;

  let result = {};

  if (inputAction === 'sum' && inputNumbers.length > 0) {
    result.result = inputNumbers.reduce((acc,current) => {
      return acc + current;
    });
  } else if (inputAction === 'multiply') {
    let multiplyResult = 1;
    inputNumbers.forEach(oneNumber => {
      multiplyResult *= oneNumber;
    });
    result.result = multiplyResult;
  } else if (inputAction === 'double') {
    let newArray = inputNumbers.map(oneNumber => {
      return oneNumber * 2;
    });
    result.result = newArray;
  } else if (inputAction === undefined || inputAction === '') {
    result.error = 'Please provide an action!';
  } else if (inputNumbers === undefined || inputNumbers === '' || inputNumbers.length === 0) {
    result.error = 'Please provide numbers!';
  }

  res.json(result);
});


app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});