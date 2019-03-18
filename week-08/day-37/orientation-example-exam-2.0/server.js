'use strict';

const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');
const mysql = require('mysql');


app.use(express.json());
app.use('/assets', express.static('assets'));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/views/index.html'));
});


const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'alias'
});


app.post('/api/links', (req, res) => {
  let inputUrl = req.body.url;
  let inputAlias = req.body.alias;
  let secretCode = req.body.secretCode;


  conn.query(`SELECT alias FROM links;`,  (error, rows) => {
    if (error) {
      console.log(error);
      res.status(500).send();
      return;
    }

    if (rows.some(oneRowObject => oneRowObject.alias === inputAlias) === true) {
      res.status(400).send();
    } else {
      conn.query(`INSERT INTO links (url, alias, secretcode) VALUES ('${inputUrl}', '${inputAlias}', ${secretCode});`, (error, rows) => {
        if (error) {
          console.log(error);
          res.status(500).send();
          return;
        }

        conn.query(`SELECT * FROM links WHERE alias='${inputAlias}';`, (error, rows) => {
          if (error) {
            console.log(error);
            res.status(500).send();
            return;
          }
          res.send(rows);
        });
      });
    }
  });
});



app.get('/a/:alias', (req, res) => {
  let inputAlias = req.params.alias;

  conn.query(`SELECT alias FROM links;`,  (error, rows) => {
    if (error) {
      console.log(error);
      res.status(500).send();
      return;
    }

    if (rows.some(oneRowObject => oneRowObject.alias === inputAlias) === false) {
      res.status(404).send();
    } else {
      conn.query(`UPDATE links SET hitcount = hitcount + 1 WHERE alias = '${inputAlias}';`,  (error, rows) => {
        if (error) {
          console.log(error);
          res.status(500).send();
          return;
        }

        conn.query(`SELECT url FROM links WHERE alias = '${inputAlias}';`, (error, rows) => {
          if (error) {
            console.log(error);
            res.status(500).send();
            return;
          }
          res.redirect(rows[0].url);
        });
      });
    }
  });
});



app.get('/api/links', (req, res) => {
  conn.query(`SELECT id, url, alias, hitcount FROM links;`, (error, rows) => {
    if (error) {
      console.log(error);
      res.status(500).send();
      return;
    }
    res.json(rows);
    });
});



app.delete('/api/links/:id', (req, res) => {
  let inputId = req.params.id;
  let inputSecretCode = req.body.secretCode;


  conn.query(`SELECT * FROM links WHERE id = ${inputId};`, (error, rows) => {
      if (error) {
        console.log(error);
        res.status(500).send();
        return;
      }
      
      if (rows.length < 1) {
        res.status(404).send();
      } else if (rows.length > 0 && rows[0].secretcode !== inputSecretCode) {
        res.status(403).send();
      } else if (rows.length > 0 && rows[0].secretcode === inputSecretCode) {
        conn.query(`DELETE FROM links WHERE id=${inputId};`, (error, rows) => {
          if (error) {
            console.log(error);
            return;
          }
          res.status(204).send();
        });
      } else {
        res.status(500).send();
      }
  });
});


app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});