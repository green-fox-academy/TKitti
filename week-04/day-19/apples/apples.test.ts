'use strict'

import { Apples } from './apples';

let test = require('tape');

test('get number of apples', t => {
  let myApples = new Apples(5);
  t.equal(myApples.getApple(), `You have 5 number of apples`);
  t.end();
});