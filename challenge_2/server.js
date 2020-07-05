//The response from the server should contain the CSV report along with the form so the user can keep submitting indefinitely, without having to go back to the "form page". DO NOT USE jQuery/AJAX.

const express = require('express');
const bodyParser = require('body-parser');
const static = require('express-static');
const jsonToCsv = require('./model/jsonToCsv');
const path = require('path');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
//app.use('/static', express.static('public'))
app.use(express.static(path.join(__dirname, './client')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Use Express to serve up an index.html file and its associated assets
app.get('/', (req, res) => res.render('index'));

//POST the form data to the server using a get operation with the serialized form data
//parse json in post request
app.post('/jsonToCsv', (req, res) => { //add endpoint for type converter file, then add that same endpoint to html form action
  console.log('req.body', req.body);
  //JSON.parse() form data
  let parsedJson = JSON.parse(req.body);
  //send data returned from type converter file passing in parsed form data
  let convertedData = jsonToCsvConverter(parsedJson);
  res.send(convertedData);
  res.end();
});
//dynamically insert the result of the data processing step into the HTML of the response


app.listen(port, () => console.log(`App listening at http://localhost:${port}`));

module.exports = app;

//app.get('/', (req, res) => res.send('Hello World!'));

// app.post('/jsonToCsv', (req, res, next) => { //add endpoint for type converter file, then add that same endpoint to html form action
//   console.log('req.body', req.body);
//   //JSON.parse()
//   let parsedJson = JSON.parse(req.body);
//   //send data returned from type converter file passing in parsed req.body
//   let convertedData = jsonToCsvConverter(parsedJson);
//   res.send(convertedData);
//   res.end();
//   next();
// });

// app.get('/', (req, res, next) => {
//   console.log('req.params', req.params);
//   res.sendFile('/jsonToCsv');
//   res.end();
// });