create database reddit;

use reddit;

create table posts (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR (30) NOT NULL,
  url VARCHAR (100) NOT NULL,
  timestamp timestamp,
  score INT UNSIGNED);


ALTER TABLE posts
  drop column timestamp;

ALTER TABLE posts
  add column timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP;


INSERT INTO posts (title, url, score) VALUES ('Dear JavaScript', 'http://9gag.com', '791');
INSERT INTO posts (title, url, score) VALUES ('Crockford', 'http://9gag.com', '567');