const express = require('express')
const app = express()
const port = 3001
const mongoose = require('mongoose')
const db = require('../database/index.js')
const bodyParser = require('body-parser')
const path = require('path');

app.use(bodyParser.json())

app.use('/', express.static(path.join(__dirname, '../client/dist')))

app.post('/api/addresses', (req, res) => {
  db.save(req.body, (err, data) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send();
    }
  });
});

app.get('/api/addresses/:id', (req, res) => {
  const { id } = req.params;
  db.retrieve(id, (err, data) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3004');
      res.status(200).send(data);
    }
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})