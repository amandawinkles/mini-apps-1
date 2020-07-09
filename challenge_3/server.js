const express = require('express');
const app = express();
const path = require('path');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const port = process.env.PORT || 4568;

app.get('/', function (req, res) {
  res.send('hello world')
});

app.get('/', (req, res) => res.render('index'));

app.listen(port, () => console.log(`app listening at http://localhost:${port}`));

module.exports = app;

