//The response from the server should contain the CSV report along with the form so the user can keep submitting indefinitely, without having to go back to the "form page". DO NOT USE jQuery/AJAX.

const express = require('express');
const bodyParser = require('body-parser');
const static = require('express-static');
const path = require('path');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
//app.use(express.static('client')
//app.use(express.static(path.join(__dirname, './client')));
app.use(express.static('./client'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Use Express to serve up an index.html file and its associated assets
//POST the form data to the server using a get operation with the serialized form data
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
app.post('/', (req, res, next) => { //add endpoint for type converter file, then add that same endpoint to html form action
  //console.log('req.body', req.body);
  res.render(); //render type converter file
  res.end();
  next();
});




app.listen(port, () => console.log(`App listening at http://localhost:${port}`));

module.exports = app;

//app.get('/', (req, res) => res.send('Hello World!'));