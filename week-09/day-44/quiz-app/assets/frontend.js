'use strict';


let httpRequest = new XMLHttpRequest();
httpRequest.open('GET', '/game', true);
httpRequest.setRequestHeader('Content-Type', 'application/json');
httpRequest.onload = () => {
  let content = JSON.parse(httpRequest.responseText);
  let multiArray = pushingQuestionsAnswersToMultiArray(content);
  let i = 1;
  showNextQuestion(multiArray, i);
  addEventsToAnswers();
};
httpRequest.send();


function pushingQuestionsAnswersToMultiArray (content) {
  let a = 0;
  let b = 1;
  let c = 2;
  let d = 3;
  let questionsAnswersMultiArray = [];

  for (let i = 0; i < (content.length / 4); i++) {
    let oneArray = [];
    oneArray.push(content[a]);
    oneArray.push(content[b]);
    oneArray.push(content[c]);
    oneArray.push(content[d]);
    questionsAnswersMultiArray.push(oneArray);
    a += 4;
    b += 4;
    c += 4;
    d += 4;
  }
  return questionsAnswersMultiArray;
}


function displayNewQuestion (indexOfMultiArray) {
  let questionElement = document.getElementsByClassName('question')[0];
  questionElement.textContent = indexOfMultiArray[0].question;
  let answerContainerElement = document.getElementsByClassName('answer-container')[0];
  for (let i = 0; i < 4; i++) {
    answerContainerElement.children[i].textContent = indexOfMultiArray[i].answer;
  }
}



function countingDown (multiArray, i) {
  let timeLeft = 5;
  
  let timerForTime = setInterval(() => {
    let timeNumberElement = document.getElementsByClassName('time-number')[0];
    timeNumberElement.textContent = timeLeft;
    timeLeft -= 1;
    
    if (timeLeft < 0) {
      clearInterval(timerForTime);
      
    }
  }, 1000);
}


function showNextQuestion (multiArray, i) {
  displayNewQuestion(multiArray[0]);
  countingDown(multiArray, 0);

  let timerForQuestion = setInterval(() => {
    displayNewQuestion(multiArray[i]);
    countingDown(multiArray, i);
    i++;

    if (i === multiArray.length - 1) {
      clearInterval(timerForQuestion);
    }
   
  }, 6000);
}


function addEventsToAnswers () {
  let answerContainerElement = document.getElementsByClassName('answer-container')[0];
  for (let i = 0; i < 4; i++) {
    answerContainerElement.children[i].addEventListener('mouseenter', colorToDarkBlue);
    answerContainerElement.children[i].addEventListener('mouseleave', colorToBlue);
    answerContainerElement.children[i].addEventListener('click', processOnButtonClick);
  }
}

function colorToDarkBlue(event) {
  event.currentTarget.classList.add('darkblue');
}

function colorToBlue(event) {
  event.currentTarget.classList.remove('darkblue');
}

function processOnButtonClick (event) {
  event.currentTarget.classList.add('selected');
}