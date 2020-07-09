//The response from the server should contain the CSV report along with the form so the user can keep submitting indefinitely, without having to go back to the "form page". DO NOT USE jQuery/AJAX.

const express = require('express');
const bodyParser = require('body-parser');
const static = require('express-static');
const jsonToCsv = require('./model/jsonToCsv');
const path = require('path');
const ejs = require('ejs');
// const multer  = require('multer');
// const upload = multer({ dest: 'uploads/' });
//const fileReader = require('./client/app');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, './client')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'ejs');

//Use Express to serve up an index.html file and its associated assets
app.get('/', (req, res) => res.render('index'));

//POST the form data to the server using a get operation with the serialized form data
//parse json in post request
app.post('/jsonToCsv', (req, res, next) => {
  // console.log('req.file', req.file);
  // console.log('req.body', req.body);
  //JSON.parse() form data
  let parsedJson = JSON.parse(req.body);
  let convertedData = jsonToCsvConverter(parsedJson);
  let stringJson = JSON.stringify(parsedJson);
  let templates = htmlTemplate(stringJson, convertedData);
  res.send(templates);
  res.end();
  next();
});

app.post('/', (req, res, next) => {
  console.log('req.file', req.file); //undefined
  console.log('req.body', req.body);
  //fileContents from fileReader
  //let fileName = req.file.fileName;
  //res.render(fileName);
  let incomingJson = req.body;
  let convertedData = jsonToCsv(incomingJson);
  //let html = ejs.render();
  res.render('index', { convertedData });
});


// app.post('/upload', upload.single('json-upload'), (req, res, next) => {
//   console.log('req.file', req.file);
//   let fileName = req.file.fileName;
//   //readFile //call fileReader?
// });

//dynamically insert the result of the data processing step into the HTML of the response
const htmlTemplate = function(incoming, converted) {
  return `
  <!DOCTYPE html>
<html>
  <head>
    <title>JSON to CSV Mini App</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  </head>
  <body>
    <div class="container">
      <h1 class="title">JSON --> CSV</h1>
      <form action="/jsonToCsv" id="send-JSON-form" method="post">
        <label for="json">JSON:</label>
        <textarea id="user-input" required></textarea>
        <input class="submit-button" type="submit" value="submit">
      </form>
    </div>
    <div>
      <script src="app.js"></script>
    </div>
  </body>
</html>
  `};



app.listen(port, () => console.log(`App listening at http://localhost:${port}`));

module.exports = app;

//send html to templating file with pug/ejs
//render csv object .render(), 202 status


//put script in html
//add download link on html, so file not going to browser, but sending link


//app.get('/', (req, res) => res.send('Hello World!'));

// app.post('/jsonToCsv', (req, res) => { //add endpoint for type converter file, then add that same endpoint to html form action
//   console.log('req.body', req.body);
//   //JSON.parse() form data
//   let parsedJson = JSON.parse(req.body);
//   //send data returned from type converter file passing in parsed form data
//   let convertedData = jsonToCsvConverter(parsedJson);
//   res.send(convertedData);
//   res.end();
// });

// app.get('/', (req, res, next) => {
//   console.log('req.params', req.params);
//   res.sendFile('/jsonToCsv');
//   res.end();
// });


//app.use('/static', express.static('public'))