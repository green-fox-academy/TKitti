'use strict';

const fs = require('fs');


function reversedOrder (filename) {
  let fileContent = fs.readFileSync(filename, 'utf-8');

  let splitted = fileContent.split('\r\n');
  let reversedArray = splitted.reverse();
  let reversedText = '';

  reversedArray.forEach(oneLine => {
    reversedText = reversedText + oneLine + '\n';
  });

  return reversedText;
}

console.log(reversedOrder('reversed-order-sourcefile.txt'));