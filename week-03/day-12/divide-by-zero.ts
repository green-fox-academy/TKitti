'use strict'
export { }


function divideByZero(number: number) {
  if (number === 0) {
    console.log('fail');
  } else {
    console.log(10 / number);
  }
}

divideByZero(12);
divideByZero(0);
