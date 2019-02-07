'use strict';

export function computesFibonacciNumber (index: any): any {
  let fibArray = [0, 1];

  for (let counter: number = 0; counter < index; counter++) {
    fibArray.push(fibArray[counter] + fibArray[counter+1]);
  }

  if (index === null) {
    return 0;
  } else if (typeof index !== "number") {
    return 'Invalid type.';
  }
  
  else {
    return fibArray[index];
  }
}

console.log(computesFibonacciNumber(59));