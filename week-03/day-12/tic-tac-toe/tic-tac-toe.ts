'use strict';
export { }


const fs = require('fs');

function ticTacResult(filename: string) {
  let fileContent = fs.readFileSync(filename, 'utf-8');
  let lines: string[] = fileContent.toString().split('\r\n');
  let winner = 'Draw';

  //column cases
  for (let i: number = 0; i < 3; i++) {
    if (lines[0][i] === lines[1][i] && lines[0][i] === lines[2][i]) {
      winner = lines[0][i];
    }
  }

  //row cases
  for (let i: number = 0; i < 3; i++) {
    if (lines[i][0] === lines[i][1] && lines[i][0] === lines[i][2]) {
      winner = lines[i][0];
    }
  }

  //diagonal cases
  if (lines[0][2] === lines[1][1] && lines[0][2] === lines[2][0]) {
    winner = lines[0][2];
  }

  if (lines[0][0] === lines[1][1] && lines[0][0] === lines[2][2]) {
    winner = lines[0][0];
  }

  return winner;
}


console.log(ticTacResult('win-o.txt'))
console.log(ticTacResult('win-x.txt'))
console.log(ticTacResult('draw.txt'))
