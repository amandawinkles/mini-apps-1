const express = require('express');
const app = express();
const path = require('path');
const React = require('react');
const ReactDOM = require('react-dom');
const ReactDOMServer = require('react-dom/server');
const bodyParser = require('body-parser');
const port = process.env.PORT || 4568;
//const components = require('./client/app');

//app.use('/', components);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function (req, res) {
  //get components
  res.send('hello world')
});

app.get('/', (req, res) => res.render('index'));

app.post('/', (req, res) => {
  console.log('req.body', req.body);
});

app.listen(port, () => console.log(`app listening at http://localhost:${port}`));

module.exports = app;