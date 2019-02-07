'use strict'

import { anagram } from './anagram';

let test = require('tape');

test('both strings contain the same letters (in different order', t => {
  let string1 = 'por';
  let string2 = 'ropp';
  
  t.equal(anagram(string1, string2), false);
  t.end();
});