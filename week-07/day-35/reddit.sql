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


ALTER TABLE posts
  CHANGE id post_id INT;


CREATE TABLE users (
  user_id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR (15));

ALTER TABLE users AUTO_INCREMENT = 101;

INSERT INTO users (name) VALUES ('Pistike'), ('Jozsika'), ('Piroska');


UPDATE posts SET user_id=101 WHERE post_id=1 OR post_id=2;
UPDATE posts SET user_id=102 WHERE post_id=4;


ALTER TABLE posts
  DROP score;

ALTER TABLE posts
  ADD score INT DEFAULT(0) AFTER url;