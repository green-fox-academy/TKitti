'use strict';


const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());


app.post('/sith', (req, res) => {
  let inputText = req.body.text;
  let result = {};

  if (inputText === '' || inputText === undefined) {
    result.error = 'Feed me some text you have to. padawan young you are. Hmm.';
  } else {
    let splittedText = inputText.split(/[ ,.]+/);
    let slicedText = []
    if (splittedText[splittedText.length - 1] === '') {
      slicedText = splittedText.slice(0, splittedText.length - 1);
    }

    let resultArray = [];
    let numberOfSplices = slicedText.length / 2;
    for (let i = 0; i < numberOfSplices; i++) {
      let removedTwoWords = slicedText.splice(0, 2);
      resultArray.push(removedTwoWords);
    }
    
    let resultSentence = '';
    for (let i = 0; i < resultArray.length; i++) {
      let firstElement = resultArray[i][0];
      let secondElement = resultArray[i][1];
      resultArray[i] = [secondElement, firstElement];
      resultSentence += `${resultArray[i].join(' ')} `;
    }
    
    let randomWords = ['arrgh', 'uhmm', 'err..', 'pff'];
    let randomNumber = Math.floor(Math.random() * 4);
    resultSentence += randomWords[randomNumber];
    let allSmallLetters = resultSentence.toLowerCase();
    let capitalized = allSmallLetters.charAt(0).toUpperCase() + allSmallLetters.slice(1);

    result.sith_text = capitalized; 
  }
  
  res.json(result);
});


app.listen(PORT, () => {
  console.log(`Server listens to ${PORT}`);
});