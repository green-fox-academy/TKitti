"use strict";

const express = require('express');
const app = express();
const path = require('path');
const mysql = require('mysql');

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "quiz"
});


app.use(express.json());
//app.use(express.urlencoded({ extended: true }));

app.use('/assets', express.static('assets'));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/index.html'));
});

app.get('/questions', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/manage-questions.html'));
});


app.get('/game', (req, res) => {
  let sqlQuery = 'SELECT questions.id, questions.question, answers.question_id, answers.answer, answers.is_correct FROM answers LEFT JOIN questions ON answers.question_id=questions.id';

  conn.query(sqlQuery, (error, rows) => {
    if (error) {
      console.log(error);
      res.status(500).send();
      return;
    }
    res.status(200);
    res.json(rows);
  });
});



app.get('/api/game', (req, res) => {
  conn.query('SELECT * FROM questions;', (error, rows) => {
    if (error) {
      console.log(error);
      res.status(500).send();
      return;
    }
    let numberOfQuestions = rows.length;
    let index = randomNumberGenerator(numberOfQuestions);

    let randomQuestion = {};
    randomQuestion.id = rows[index].id;
    randomQuestion.question = rows[index].question;
    randomQuestion.answers = [];

    conn.query(`SELECT * FROM answers WHERE question_id=${rows[index].id};`, (error, rows) => {
      if (error) {
        console.log(error);
        res.status(500).send();
        return;
      }
      for (let i = 0; i < 4; i++) {
        randomQuestion.answers.push(rows[i]);
      }

      res.json(randomQuestion);
    });
  });
});


app.get('/api/questions', (req, res) => {
  conn.query('SELECT * FROM questions;', (error, rows) => {
    if (error) {
      console.log(error);
      res.status(500).send();
      return;
    }
    res.json(rows);
  });
});



app.post('/api/questions', (req, res) => {
  let inputQuestion = req.body.question;
  let inputAnswers = req.body.answers;
  let answerOneName = inputAnswers[0]["answer_1"];
  let answerOneIsCorrect = inputAnswers[0]["is_correct"];
  let answerTwoName = inputAnswers[1]["answer_2"];
  let answerTwoIsCorrect = inputAnswers[1]["is_correct"];
  let answerThreeName = inputAnswers[2]["answer_3"];
  let answerThreeIsCorrect = inputAnswers[2]["is_correct"];
  let answerFourName = inputAnswers[3]["answer_4"];
  let answerFourIsCorrect = inputAnswers[3]["is_correct"];

  conn.query(`INSERT INTO questions (question) VALUES ('${inputQuestion}');`, (error, rows) => {
    if (error) {
      console.log(error);
      res.status(500).send();
      return;
    }
    conn.query('SELECT * FROM questions;', (error, rows) => {
      if (error) {
        console.log(error);
        res.status(500).send();
        return;
      }
      let newQuestionId = rows[rows.length - 1].id;

      conn.query(`INSERT INTO answers (question_id, answer, is_correct) VALUES (${newQuestionId}, '${answerOneName}', ${answerOneIsCorrect});`);
      conn.query(`INSERT INTO answers (question_id, answer, is_correct) VALUES (${newQuestionId}, '${answerTwoName}', ${answerTwoIsCorrect});`);
      conn.query(`INSERT INTO answers (question_id, answer, is_correct) VALUES (${newQuestionId}, '${answerThreeName}', ${answerThreeIsCorrect});`);
      conn.query(`INSERT INTO answers (question_id, answer, is_correct) VALUES (${newQuestionId}, '${answerFourName}', ${answerFourIsCorrect});`);
      
      res.status(200);
      res.json({"status": "ok"});
    });
  });
});



app.delete('/api/questions/:id', (req, res) => {
  let inputId = req.params.id;

  conn.query(`DELETE FROM questions WHERE id=${inputId};`, (error, rows) => {
    if (error) {
      console.log(error);
      res.status(500).send();
      return;
    }
    conn.query(`DELETE FROM answers WHERE question_id=${inputId};`, (error, rows) => {
      if (error) {
        console.log(error);
        res.status(500).send();
        return;
      }
      res.status(200);
      res.json({"message": "delete was succesful"});
    });
  });
});


function randomNumberGenerator (num) {
  return Math.floor((Math.random() * num) + 1);
}



module.exports = app;