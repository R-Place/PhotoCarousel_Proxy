const express = require('express');

const app = express();
const port = 3006;
const db = require('../database/index.js');

app.use(express.static('client/dist'));

app.get('/api/similarHomes', (req, res) => {
  db.getAllHomes((err, homes) => {
    if (err) {
      res.status(400).send();
    } else {
      res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3004');
      res.status(200).send(homes);
    }
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
