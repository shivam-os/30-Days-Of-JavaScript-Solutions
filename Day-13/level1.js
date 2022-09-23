const {data} = require("./countries_data.js");

//1. Display the countries array as a table
const countries = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo']
];
//console.table(countries);


//2. Display the countries object as a table
//console.table(data);


//3. Use console.group() to group logs
console.group("Names");
for (let country of data) {
  console.log(country.name)
}
console.groupEnd();