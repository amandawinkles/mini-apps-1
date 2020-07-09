//submit JSON data to the server, receive a response containing a CSV-formatted result (the way this is done will vary depending on where you are in the challenge)
//The form submission process should use the default browser action/behavior. DO NOT use jQuery/AJAX functions in the submission process.
//When the user clicks submit, POST the form data to the server using a get operation with the serialized form data

//const jsonToCsv = require('../model/jsonToCsv');

//add event listener to form for submit click--> get json data
const form = document.getElementById('send-JSON-form');
//const userInput = document.getElementById('user-input');
const fileUploadData = document.getElementById('json-file');
// let url = 'http://localhost:3000/jsonToCsv';

$(document).ready(function() {
  $(form).on('submit', fileReader);
});

//read file as obj, send to server w/ajax
//server-side, convert to csv, render
function fileReader(event) {
  event.preventDefault();
  let selectedFile = fileUploadData.files[0];
  //console.log('selectedFile', selectedFile);
  let reader = new FileReader();

  reader.onload = function(event) {
    let fileContents = reader.result;
    console.log('fileContents upon load', fileContents);
    let converted = jsonToCsvConverter(fileContents);
    let stringCsv = JSON.stringify(converted);
    $('#result-area').val(stringCsv);
    //send file contents to server
    sendFile(fileContents);
  };

  //fire onload event
  reader.readAsText(selectedFile);
};

const sendFile = function(file) {
  $.ajax({
    type: 'POST',
    url: '/',
    data: file,
    // dataType: 'html',
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


function jsonToCsvConverter(fileContents) {
  //firstName,lastName,county,city,role,sales
  //[Joshie,Wyattson,San Mateo,San Mateo,Broker,1000000]
  let csvDataArray = [];
  let finalString = '';
  //get keys, minus 'children' set to variable //Object.keys(obj)
  let jsonKeysArr = Object.keys(fileContents);
  //pop children off keys array
  jsonKeysArr.pop();
  //join each key as is join()
  //firstName,lastName,county,city,role,sales
  let columnNames = jsonKeysArr.join();
  //push string into csvArray //this will be first row of csv report
  //csvColumnsArray.push(columnNames);
  let jsonValuesArr = Object.values(fileContents);
  //pop off last one again, since it's the children arr -> set to var so can loop through
  let childrenArray = jsonValuesArr.pop();
  csvDataArray.push(jsonValuesArr);

  //have columns & data except children in arrays
  //recurse through childrenArray and store that data in csvDataArray
  const convertReportData = function(childrenArray) {
    //stop condition //when childrenArray is empty
    if (childrenArray.length !== 0) {
      //loop through childrenArray
      for (let i = 0; i < childrenArray.length; i++) {
        //if type of childrenArray[i] is an obj, but not an array //if (!Array.isArray(childrenArray[i]))
        if ((typeof childrenArray[i] === 'object') && (!Array.isArray(childrenArray[i]))) {
          //Object.values(childrenArray[i]) set to arr var
          let childValuesArr = Object.values(childrenArray[i]);
          //pop last value out of arr set to var to recurse
          let childrensChildrenArray = childValuesArr.pop();
          //join values arr into string
          //childValuesArr.join();
          csvDataArray.push(childValuesArr);
          //recurse popped value/child arr
          convertReportData(childrensChildrenArray);
        }
      }
    } else {
      return;
    }
  };
  convertReportData(childrenArray);

  let dataStrings = '';
  dataStrings += csvDataArray.join('\n');
  //concatenate csvColumnsArray joined w/finalString
  finalString += columnNames + '\n';
  //concatenate csvDataArray joined w/finalString
  finalString += dataStrings;
  //return final string w/new lines
  return finalString;
};


//module.exports = { sendFile, fileReader };

//send in readable format- string
//browser will read data from file, then send to server
//use fileReader on client side
//store as var while reading
//use multer to reconstruct file?
//will save work inside server
//file picker- read file- convert to json- send json contents to server
//send this middleware to server



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

// function fileReader(event) {
//   event.preventDefault();
//   let selectedFile = fileUploadData.files[0];
//   //console.log('selectedFile', selectedFile);
//   let convertedToCsv;
//   let reader = new FileReader();

//   reader.onload = function(event) {
//     let fileContents = reader.result;
//     console.log('fileContents upon load', fileContents);
//     //convert to string
//     convertedToCsv = jsonToCsvConverter(fileContents);
//     console.log('converted ---> csv', convertedToCsv);
//     $('#result-area').val(convertedToCsv);
//   };

//   //fire onload event
//   reader.readAsText(selectedFile);
//   //send file contents to server
//   sendFile(convertedToCsv);
// };

// const sendFile = function(file) {
//   $.ajax({
//     type: 'POST',
//     url: url,
//     data: file,
//     dataType: 'html',
//     // cache: false,
//     contentType: 'application/json',
//     success: (data) => {
//       console.log('upload successful', data);
//     },
//     error: (err) => {
//       console.log('error uploading file', err);
//     }
//   });
// };


// firstName,lastName,county,city,role,sales
// Joshie,Wyattson,San Mateo,San Mateo,Broker,1000000
// Beth Jr.,Johnson,San Mateo,Pacifica,Manager,2900000
// Smitty,Won,San Mateo,Redwood City,Sales Person,4800000
// Allen,Price,San Mateo,Burlingame,Sales Person,2500000
// Beth,Johnson,San Francisco,San Francisco,Broker/Sales Person,7500000



