'use strict'
export { }


class Student {
  name: string;

  constructor(inputName: string) {
    this.name = inputName;
  }

  learn() {
  }

  question(teacher: Teacher) {
    teacher.answer();
    return `Can you help me ${teacher.name}?`;
  }
}


class Teacher {
  name: string;

  constructor(inputName: string) {
    this.name = inputName;
  }

  teach(student: Student) {
    student.learn();
    return `Yes, of course, ${student.name}.`;
  }

  answer() {
  }
}

let john = new Student('John');
let teacher1 = new Teacher('Mr. Teacher');

console.log(teacher1.teach(john));
console.log(john.question(teacher1));
