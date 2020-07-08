//submit JSON data to the server, receive a response containing a CSV-formatted result (the way this is done will vary depending on where you are in the challenge)
//The form submission process should use the default browser action/behavior. DO NOT use jQuery/AJAX functions in the submission process.
//When the user clicks submit, POST the form data to the server using a get operation with the serialized form data

//const jsonToCsv = require('../model/jsonToCsv');

//console.log('jsonToCsv func', jsonToCsv);

//add event listener to form for submit click--> get json data
const form = document.getElementById('send-JSON-form');
//const userInput = document.getElementById('user-input');
const fileUploadData = document.getElementById('json-file');
let url = 'http://localhost:3000/jsonToCsv';

$(document).ready(function() {
  $(form).on('submit', fileReader);
});

function fileReader(event) {
  event.preventDefault();
  let selectedFile = fileUploadData.files[0];
  //console.log('selectedFile', selectedFile);
  let reader = new FileReader();

  reader.onload = function(event) {
    let fileContents = reader.result;
    //convert to string, then pass in here:
    //call jsonToCsv(fileContents)
    $('#result-area').val(fileContents);
  };

  //fire onload event
  reader.readAsText(selectedFile);
};

const sendFile = function(file) {
  $.ajax({
    type: 'POST',
    url: url,
    data: file,
    dataType: 'html',
    // cache: false,
    contentType: 'application/json',
    success: (data) => {
      console.log('upload successful', data);
    },
    error: (err) => {
      console.log('error uploading file', err);
    }
  });
};

//send this middleware to server

//module.exports = { sendFile, fileReader };

//form, fileUploadData

//send in readable format- string
//not sending data from inside file to server, only sending file, not data from inside
//browser will read data from file, then send to server
//use fileReader on client side
//store as var while reading
//use multer to reconstruct file?
//will save work inside server
//file picker- read file- convert to json- send json contents to server





// const jsonToCsv = require('../model/jsonToCsv');

// //add event listener to form for submit click--> get json data
// const form = document.getElementById('send-JSON-form');
// const userInput = document.getElementById('user-input');
// //const inputButton = document.getElementById('submit-button');

// const submitForm = form.addEventListener("submit", function(e) {
//   e.preventDefault();
//   let jsonInput = userInput.value;
//   //send jsonInput to type converter file
//   jsonToCsvConverter(jsonInput);
//   //let url = 'http://localhost:3000/jsonToCsv';
// });

// module.exports = submitForm;

//const inputButton = document.getElementById('submit-button');

// function getFile(e) {
//   e.preventDefault();
//   let jsonInput = userInput.value;
//   let selectedFile = fileUploadData.files[0];
//   let inputData = new InputData();
//   inputData.append('jsonInput', jsonInput);
//   inputData.append('selectedFile', selectedFile);
//   sendFile(inputData);
// };

// const sendFile = function(file) {
//   $.ajax({
//     type: 'POST',
//     url: url,
//     data: file,
//     dataType: 'json',
//     cache: false,
//     contentType: false,
//     processData: false,
//     success: (data) => {
//       console.log('upload successful');
//       //data rendered as csv
//     }
//   });
// };

// $(form).on('submit', function(e) {
//   e.preventDefault();
//   //let jsonInput = userInput.value;
//   let selectedFile = fileUploadData.files[0];
//   //console.log('selectedFile', selectedFile);

//   reader.readAsText(selectedFile);
//   let result = reader.result;
//   // reader.onload = function() {
//   //   console.log(result);
//   // };
//   //let inputData = new Object();
//   //inputData.jsonInput = jsonInput;
//   //inputData.selectedFile = selectedFile;
//   //console.log('sending', inputData);
//   sendFile(result);
// });





