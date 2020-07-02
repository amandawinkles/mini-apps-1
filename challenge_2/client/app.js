//submit JSON data to the server, receive a response containing a CSV-formatted result (the way this is done will vary depending on where you are in the challenge)

//The form submission process should use the default browser action/behavior. DO NOT use jQuery/AJAX functions in the submission process.

//When the user clicks submit, POST the form data to the server.

const App = {
  init: function() {
    //call view.init to intialize view
  },

  getData: function(callback = () => {}) {
    httpRequests.readCSV((data) => {
      console.log('data from post request', data);
      //create render func in view file then call here to render incoming data
      callback();
    });
  }
};

