//Use Express to serve up an index.html file and its associated assets

//Implement all the report generation logic on the server.

//The response from the server should contain the CSV report along with the form so the user can keep submitting indefinitely, without having to go back to the "form page". DO NOT USE jQuery/AJAX. You may use the supplied examples of JSON and CSV for testing and verification

//server must flatten the JSON hierarchy, mapping each item/object in the JSON to a single line of CSV report
//keys of the JSON objects will be the columns of the CSV report
//all sibling records at a particular level of the hierarchy will have the same set of properties, but child objects might not contain the same properties. In all cases, every property you encounter must be present in the final CSV output
//child records in the JSON will always be in a property called `children`

const express = require('express');
const app = express();