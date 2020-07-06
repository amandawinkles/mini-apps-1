//submit JSON data to the server, receive a response containing a CSV-formatted result (the way this is done will vary depending on where you are in the challenge)
//The form submission process should use the default browser action/behavior. DO NOT use jQuery/AJAX functions in the submission process.
//When the user clicks submit, POST the form data to the server using a get operation with the serialized form data

//const jsonToCsv = require('../model/jsonToCsv');

//add event listener to form for submit click--> get json data
const form = document.getElementById('send-JSON-form');
const userInput = document.getElementById('user-input');
//const inputButton = document.getElementById('submit-button');

form.addEventListener("submit", function(e) {
  e.preventDefault();
  let jsonInput = userInput.value;
  //send jsonInput to type converter file
  jsonToCsvConverter(jsonInput);
  //let url = 'http://localhost:3000/jsonToCsv';
});







