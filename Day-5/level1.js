//1. Declare an empty array;
let myArray = [];


//2. Declare an array with more than 5 number of elements
let yourArray = Array(7);


//3. Find the length of your array
console.log(`Length of previous array: ${yourArray.length}`);


//4. Get the first item, the middle item and the last item of the array
console.log(`First item of the array: ${yourArray[0]}`);
console.log(`Middle item of the array: ${yourArray[(yourArray.length - 1) / 2]}`);
console.log(`First item of the array: ${yourArray[yourArray.length - 1]}`);


//5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array.
let mixedDataTypes = ["Myname", 23, 3.14, null, -10, true];
console.log(`Length of the array: ${mixedDataTypes.length}`);


//6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let companies = "Facebook,Google,Microsoft,Apple,IBM,Oracle,Amazon";
let itCompanies = companies.split(",");


//7. Print the number of companies in the array
console.log(`IT companies: ${itCompanies.length}`);


//8. Print the first company, middle and last company
console.log(`First company of the array: ${itCompanies[0]}`);
console.log(`Middle company of the array: ${itCompanies[(itCompanies.length - 1)/ 2]}`);
console.log(`First company of the array: ${itCompanies[itCompanies.length - 1]}`);


//10. Print out each company
for (let i of itCompanies) {
  console.log(`Company name: ${i}`);
}


//11. Change each company name to uppercase one by one and print them out
for (let i of itCompanies) {
  console.log(`Company name: ${i.toUpperCase()}`);
}


//12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
let companiesSentence = "";
for (let i=0; i<itCompanies.length - 1; i++){
  companiesSentence += itCompanies[i] + ","; 
}
console.log(`${companiesSentence} and ${itCompanies[itCompanies.length - 1]} are big IT companies.`);


//13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
let myCompany = "TCS";
if (itCompanies.includes(myCompany)) {
  console.log (myCompany);
} else {
  console.log("Company is not found.");
}


//14. Filter out companies which have more than one 'o' without the filter method