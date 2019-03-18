'use strict';
const test = require('tape');
const request = require('supertest');
const app = require('../routes');
test('speed with parameters', (t) => {
  request(app)
    .get('/yondu?distance=100.0&time=10.0')
    .expect("Content-Type", /json/)
    .expect(200)
    .expect({
      "distance": 100.0,
      "time": 10.0,
      "speed": 10.0
    })
    .end(function (err, res) {
      t.error(err);
      t.end();
    });
});


test('speed with only distance parameter', (t) => {
  request(app)
    .get('/yondu?distance=100.0')
    .expect("Content-Type", /json/)
    .expect(400)
    .expect({error: 'Provide a time!'})
    .end(function (err, res) {
      t.error(err);
      t.end();
    });
});

test('speed with only time parameter', (t) => {
  request(app)
    .get('/yondu?time=10.0')
    .expect("Content-Type", /json/)
    .expect(400)
    .expect({error: 'Provide a distance!'})
    .end(function (err, res) {
      t.error(err);
      t.end();
    });
});

test('speed without parameter', (t) => {
  request(app)
    .get('/yondu')
    .expect("Content-Type", /json/)
    .expect(400)
    .expect({error: 'Please provide distance and time!'})
    .end(function (err, res) {
      t.error(err);
      t.end();
    });
});