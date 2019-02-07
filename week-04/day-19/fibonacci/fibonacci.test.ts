'use strict'

import { computesFibonacciNumber } from './fibonacci';

let test = require('tape');

test('show the x index of fibonacci sequence', t => {
  t.equal(computesFibonacciNumber(4), 3);
  t.equal(computesFibonacciNumber(null), 0);
  t.equal(computesFibonacciNumber(0), 0);
  t.equal(computesFibonacciNumber('hello'), 'Invalid type.');
  t.end();
});