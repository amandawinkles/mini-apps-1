//Implement all the report generation logic on the server.
// You may use the supplied examples of JSON and CSV for testing and verification

//server must flatten the JSON hierarchy, mapping each item/object in the JSON to a single line of CSV report
//keys of the JSON objects will be the columns of the CSV report
//all sibling records at a particular level of the hierarchy will have the same set of properties, but child objects might not contain the same properties. In all cases, every property you encounter must be present in the final CSV output
//child records in the JSON will always be in a property called `children`

//firstName,lastName,county,city,role,sales

//loop through obj
  //get keys, minus 'children' set to variable //Object.keys(obj)
    //pop children off keys array
    //join each key as is join() //this will be first row of csv report
  //if type of obj[key] is a string or a num
    //push into array
    //join each element w/join() //make sure each is on a new line \n of csv report
  //if type of obj === obj, but is not an array //if (!Array.isArray(obj))
    //loop through obj (recurse)
  //else if Array.isArray
    //loop through array
      //if type of obj === obj, but is not an array
        //loop through obj (recurse)