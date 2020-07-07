const jsonReport = require('../samples/sales_report');

module.exports = function jsonToCsvConverter(jsonReport) {
  //firstName,lastName,county,city,role,sales
  //[Joshie,Wyattson,San Mateo,San Mateo,Broker,1000000]
  let csvDataArray = [];
  let finalString = '';
  //get keys, minus 'children' set to variable //Object.keys(obj)
  let jsonKeysArr = Object.keys(jsonReport);
  //pop children off keys array
  jsonKeysArr.pop();
  //join each key as is join()
  //firstName,lastName,county,city,role,sales
  let columnNames = jsonKeysArr.join();
  //push string into csvArray //this will be first row of csv report
  //csvColumnsArray.push(columnNames);
  let jsonValuesArr = Object.values(jsonReport);
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


//Implement all the report generation logic on the server.
// You may use the supplied examples of JSON and CSV for testing and verification

//server must flatten the JSON hierarchy, mapping each item/object in the JSON to a single line of CSV report
//keys of the JSON objects will be the columns of the CSV report
//all sibling records at a particular level of the hierarchy will have the same set of properties, but child objects might not contain the same properties. In all cases, every property you encounter must be present in the final CSV output
//child records in the JSON will always be in a property called `children`