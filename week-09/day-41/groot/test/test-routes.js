'use strict';
const test = require('tape');
const request = require('supertest');
const app = require('../routes');
test('groot endpoint with message', (t) => {
  request(app)
    .get('/groot?message=hello+again')
    .expect("Content-Type", /json/)
    .expect(200)
    .expect({
      "received": "hello again",
      "translated": "I am Groot!"
    })
    .end(function (err, res) {
      t.error(err);
      t.end();
    });
});

test('groot endpoint without message', (t) => {
  request(app)
    .get('/groot')
    //.expect("Content-Type", /json/)
    .expect(400)
    .expect({"error": "I am groot"})
    .end(function (err, res) {
      t.error(err);
      t.end();
    });
});