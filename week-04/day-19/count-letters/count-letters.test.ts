'use strict';

import { countLetters } from './count-letters';


let test = require('tape');

test('count the number of the same letters', t => {
  t.deepEqual(countLetters('fekete'), {e: 3, f: 1, k: 1, t: 1});
  t.end();
});