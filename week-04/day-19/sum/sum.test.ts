'use strict'

import { Sum } from './sum';

let test = require('tape');

test('sum of numbers', t => {
  let sum1 = new Sum([8,2,10]);
  t.equal(sum1.sum(), 20);

  let sum3 = new Sum([8]);
  t.equal(sum3.sum(), 8);
  
  let sum4 = new Sum([8,2,10,2]);
  t.equal(sum4.sum(), 22);

  let sum2 = new Sum([]);
  t.equal(sum2.sum(), 0);
  
  let sum5 = new Sum(null);
  t.equal(sum5.sum(), 0);
  t.end();

  // let sum6 = new Sum(['hello']);
  // t.equal(sum1.sum(), undefined);
  // t.end();
});