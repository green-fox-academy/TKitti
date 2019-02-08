'use strict';
export {}
let prompt = require('prompt');
let fs = require('fs');


function firstPrompt () {
  let schema = {
    properties: {
      todo: {
        description: 'Enter your todo!',
        type: 'string'
      }
    }
  }

  prompt.start();
  console.log('Welcome to my todo app!');

  prompt.get(schema, function (err, result) {
    
    if (result.todo === '') {
      console.log(`Command Line Todo application
    =============================
    
    Command line arguments:
    -l   Lists all the tasks
    -a   Adds a new task
    -r   Removes a task
    -c   Completes a task`);

    } else if (result.todo !== '') {
      let todoItem = result.todo;
      let newLinedTodoItem = `- ${todoItem}\r\n`
      fs.writeFileSync('todos.txt', newLinedTodoItem);
    }

    prompt.stop();
  });

  let schema2 = {
    properties: {
      todo: {
        description: 'Enter a command!',
        type: 'string'
      }
    }
  }
  
  
  prompt.get(schema2, function (err, result) {
    
    if (result.todo[0] === '-' && result.todo[1] === 'a') {
      let todoItem = result.todo;
      let splittedTodo = todoItem.split('-a ');
      let actualTodoText = `- ${splittedTodo[1]}\r\n`;
      fs.writeFileSync('todos.txt', actualTodoText);
    } 
  
    prompt.stop();
  });
}

firstPrompt();

/*
function secondPrompt () {
  let schema2 = {
    properties: {
      todo: {
        description: 'Enter a command!',
        type: 'string'
      }
    }
  }
  prompt.start();
  
  prompt.get(schema2, function (err, result) {
    
    if (result.todo[0] === '-' && result.todo[1] === 'a') {
      let todoItem = result.todo;
      let splittedTodo = todoItem.split('-a ');
      let actualTodoText = `- ${splittedTodo[1]}\r\n`;
      fs.writeFileSync('todos.txt', actualTodoText);
    } 
  
    prompt.stop();
  });
}

secondPrompt();
*/




