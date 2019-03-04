'use strict';

import { getPossibleWords, anagramCheck } from './anagramkata';
import { test } from 'tape';

const fs = require('fs');



test('checks if external file is read completely', function(t) {
  let fileContent = fs.readFileSync('test-words.txt', 'utf-8');
  let allWordsArray = fileContent.split('\r\n');
    
  t.deepEqual(getPossibleWords('test-words.txt'), allWordsArray);
  t.end();
});


test('checks if word(s) is included in the external file', function(t) {
  let fileContent = fs.readFileSync('test-words.txt', 'utf-8');
  let allWordsArray = fileContent.split('\r\n');
  let permutations = ['not', 'ton', 'ont', 'otn', 'tno', 'nto'];
  let possibleWords = ['ont', 'not'];
  console.log(allWordsArray);
  console.log(anagramCheck(permutations, possibleWords)[0]);
  
  t.equal(allWordsArray.some(oneWord => oneWord === anagramCheck(permutations, possibleWords)[0]), true);
  t.end();
});