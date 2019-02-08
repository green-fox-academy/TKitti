'use strict';

import { CAB } from './cows-bulls-2.0';

let test = require('tape');

test('show cows and bulls on the basis of how many digits are guessed correctly', t => {
  let newGame = new CAB([1,2,3,4]);
  t.equal(newGame.guess(5,6,7,8), '');
  t.end();
});

test('show cows and bulls on the basis of how many digits are guessed correctly', t => {
  let newGame = new CAB([1,2,3,4]);
  t.deepEqual(newGame.guess(5,1,2,8), 'bull bull ');
  t.end();
});

test('show cows and bulls on the basis of how many digits are guessed correctly', t => {
  let newGame = new CAB([1,2,3,4]);
  t.equal(newGame.guess(1,6,7,8), 'cow ');
  t.end();
});

test('show cows and bulls on the basis of how many digits are guessed correctly', t => {
  let newGame = new CAB([1,2,3,4]);
  t.equal(newGame.guess(1,3,7,8), 'cow bull ');
  t.end();
});

test('show cows and bulls on the basis of how many digits are guessed correctly', t => {
  let newGame = new CAB([1,2,3,4]);
  t.equal(newGame.guess(1,2,3,8), 'cow cow cow ');
  t.end();
});

test('show cows and bulls on the basis of how many digits are guessed correctly', t => {
  let newGame = new CAB([1,2,3,4]);
  t.equal(newGame.guess(1,2,3,4), 'cow cow cow cow ');
  t.end();
});