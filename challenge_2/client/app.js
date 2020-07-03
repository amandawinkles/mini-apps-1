//submit JSON data to the server, receive a response containing a CSV-formatted result (the way this is done will vary depending on where you are in the challenge)
//The form submission process should use the default browser action/behavior. DO NOT use jQuery/AJAX functions in the submission process.
//When the user clicks submit, POST the form data to the server.

//add event listener to form for submit click--> get json data
const form = document.getElementById('send-JSON-form');
const userInput = document.getElementById('user-input');
//const inputButton = document.getElementById('submit-button');

form.addEventListener("submit", function() {
  let jsonInput = userInput.value;
  //send jsonInput to type converter file
    //from type conversion, post to server
});

// function getJsonData(event) {
//   event.preventDefault();
//   //get json data .value
//   const input = document.getElementById('user-input');
//   //send json data w/post func
//   //sendJsonData(input);
// };

//post func called with form data
// function sendJsonData(input) {
//   console.log('input from client', input);
//   //input = document.getElementById('user-input');
//   //POST
//   let response = fetch('http://127.0.0.1:5501/challenge_2/client/index.html', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'text/plain'
//     },
//     data: input
//   });
// };

//'Content-Type': 'application/json;charset=utf-8'
//body: JSON.stringify(input);







