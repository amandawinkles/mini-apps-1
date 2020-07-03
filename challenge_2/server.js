//Use Express to serve up an index.html file and its associated assets

//Implement all the report generation logic on the server.

//The response from the server should contain the CSV report along with the form so the user can keep submitting indefinitely, without having to go back to the "form page". DO NOT USE jQuery/AJAX. You may use the supplied examples of JSON and CSV for testing and verification

//server must flatten the JSON hierarchy, mapping each item/object in the JSON to a single line of CSV report
//keys of the JSON objects will be the columns of the CSV report
//all sibling records at a particular level of the hierarchy will have the same set of properties, but child objects might not contain the same properties. In all cases, every property you encounter must be present in the final CSV output
//child records in the JSON will always be in a property called `children`

const express = require('express');
const bodyParser = require('body-parser');
const static = require('express-static');
const path = require('path');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, './client')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Use Express to serve up an index.html file and its associated assets
app.get('/', (req, res, next) => {
  let options = {
    setHeaders:  function(res, path, stat) {
      res.set()
    }
  }
  //res.sendFile();
});

app.get('/', (req, res) => res.render('index'));

//parse json in post request
app.post('/', (req, res, next) => { //add endpoint for type converter file
  //console.log('req.body', req.body);
  res.render(); //render type converter file
  res.end();
  next();
});




app.listen(port, () => console.log(`App listening at http://localhost:${port}`));

module.exports = app;

//app.get('/', (req, res) => res.send('Hello World!'));