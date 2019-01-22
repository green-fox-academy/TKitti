'use strict';

export{}

const students: any[] = [
    { name: 'Mark', age: 9.5, candies: 2 },
    { name: 'Paul', age: 12, candies: 5 },
    { name: 'Clark', age: 7, candies: 3 },
    { name: 'Pierce', age: 12, candies: 7 },
    { name: 'Sean', age: 10, candies: 1 }
  ];


// create a function that takes a list of students and logs:
// - Who has got more candies than 4 candies

function manyCandies (persons: any) {
    persons.forEach(element => {
        if (element.candies > 4) {
            console.log(element.name);
        }
    });
}

manyCandies(students);


// create a function that takes a list of students and logs: 
//  - how many candies they have on average

function averageCandies (persons: any) {
    let candiesArray = [];
    
    //pushing every candies-value to an empty array
    persons.forEach(element => {
        candiesArray.push(element.candies);
    })
    
    //using reduce method to sum up the values in the newly created array
    let sum = candiesArray.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    });

    //to get the average of the elements in an array,
    //we divide the sum of the elements by the number of elements
    console.log(sum / candiesArray.length);
}

averageCandies(students);