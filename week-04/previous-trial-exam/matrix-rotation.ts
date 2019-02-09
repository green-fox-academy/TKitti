'use strict';


const matrix: number[][] = [
  [1, 2, 3, 11],
  [4, 5, 6, 12],
  [7, 8, 9, 13],
  [16, 15, 17, 18]
];


function rotateMatrix (matrix: number [][]) {
  let newMatrix: number [][] = [];
  for (let i:number = 0; i < matrix.length; i++) {
    newMatrix.push([]);
  }

  for (let i: number = 0; i < matrix.length; i++) {
    for (let j: number = 0; j < matrix.length; j++) {
      newMatrix[i][j] = matrix[matrix.length-j-1][i];
    }
  }
  return newMatrix;
  };

console.log(rotateMatrix(matrix));