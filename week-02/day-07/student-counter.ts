'use strict';

export{}

const students: any[] = [
    {name: 'Theodor', age: 3, candies: 2},
    {name: 'Paul', age: 9.5, candies: 2},
    {name: 'Mark', age: 12, candies: 5},
    {name: 'Peter', age: 7, candies: 3},
    {name: 'Olaf', age: 12, candies: 7},
    {name: 'George', age: 10, candies: 1}
  ];

function candies (persons: any) {
    let candiesArray = [];

    persons.forEach(element => {
        candiesArray.push(element.candies)
    });

    let numberOfCandies = candiesArray.reduce(function(accumulator, currentValue) {
        return accumulator + currentValue;
    });

    console.log(numberOfCandies);
}

candies(students);


function sumAge (persons: any) {
    let age = 0;

    persons.forEach(element => {
        if (element.candies < 5) {
            age = age + element.age;
        }
    })
    console.log(age);
}

sumAge(students);