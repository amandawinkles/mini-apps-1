//submit JSON data to the server, receive a response containing a CSV-formatted result (the way this is done will vary depending on where you are in the challenge)
//The form submission process should use the default browser action/behavior. DO NOT use jQuery/AJAX functions in the submission process.
//When the user clicks submit, POST the form data to the server using a get operation with the serialized form data


//add event listener to form for submit click--> get json data
const form = document.getElementById('send-JSON-form');
const userInput = document.getElementById('user-input');
const fileUploadData = document.getElementById('json-file');
let url = 'http://localhost:3000/jsonToCsv';

$(form).on('submit', function(e) {
  e.preventDefault();
  let jsonInput = userInput.value;
  let selectedFile = fileUploadData.files[0];
  let inputData = new Object();
  inputData.jsonInput = jsonInput;
  inputData.selectedFile = selectedFile;
  sendFile(inputData);
});

const sendFile = function(file) {
  $.ajax({
    type: 'POST',
    url: url,
    data: file,
    dataType: 'json',
    cache: false,
    contentType: false,
    processData: false,
    success: (data) => {
      console.log('upload successful');
      //data rendered as csv
    },
    error: (err) => {
      console.log('error uploading file', err);
    }
  });
};






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





