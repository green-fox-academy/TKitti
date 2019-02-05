'use strict'

import { Person } from './person';


class Mentor extends Person {
  name: string;
  age: number;
  gender: string;
  level: string;

  constructor (
    name: string = 'Jane Doe',
    age: number = 30,
    gender: string = 'female',
    level: string = 'intermediate'
    ) {
      super(name, age, gender);
      this.level = level;
  }

  introduce() {
    console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} ${this.level} mentor.`);
  }

  getGoal() {
    console.log('My goal is: Educate brilliant junior software developers.');
  }

}

export { Mentor };