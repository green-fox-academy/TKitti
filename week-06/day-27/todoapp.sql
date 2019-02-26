CREATE DATABASE todoapp

CREATE TABLE todos (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  todo TEXT,
  date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  state VARCHAR(11) NOT NULL CHECK (state IN ("todo", "in progress", "done"))
);

-- show all of the table names in my database
SHOW TABLES;

-- shows the fields, types, null, key, default, extra in the current table
DESCRIBE todos;

-- add new row to the table
INSERT INTO todos(id, todo, state) VALUES (1, "buy milk", "todo");
INSERT INTO todos(todo) VALUES ("go running");
INSERT INTO todos(todo) VALUES ("cook dinner");


-- show all rows in the table
SELECT * FROM todos;

-- removing a specific column from the table
ALTER TABLE todos
  DROP state;


-- add the same column but with default value
ALTER TABLE todos
  ADD state VARCHAR(11) NOT NULL DEFAULT "todo" CHECK (state IN ("todo", "in progress", "done"));


-- changing the VALUES
UPDATE todos SET state = "in progress" WHERE id = 3;

-- deleting a row in the table
DELETE FROM todos WHERE id = 2;