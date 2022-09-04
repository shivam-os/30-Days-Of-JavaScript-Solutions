//1. Declare these variables and assign valu and use the typeof operator to check different data types.
let firstName = "Sourav";
let lastName = "Rana";
let country = "India";
let city = "New Delhi";
let age = 23;
let isMarried = false;
let year = 2022;

console.log(`Type of first name: ${typeof firstName}`);
console.log(`Type of last name: ${typeof lastName}`);
console.log(`Type of country: ${typeof country}`);
console.log(`Type of city: ${typeof city}`);
console.log(`Type of age: ${typeof age}`);
console.log(`Type of isMarried: ${typeof isMarried}`);
console.log(`Type of year: ${typeof year}`);


//2. Check if type of '10' is equal to 10
console.log(`Are "10" & 10 same: ${"10" === 10}`);


//3. Check if parseInt('9.8') is equal to 10
console.log(`Is parseInt('9.8') equal to 10: ${parseInt("9.8") == 10}`);


//4.i Write three JavaScript statement which provide truthy value.
console.log(Boolean("JavaScript"));
console.log(15 > 8);
console.log(Boolean(" "));


//4.ii Write three JavaScript statement which provide falsy value.
console.log(Boolean(0));
console.log(0 > 4);
console.log(Boolean(""));


//5.xii Find the length of python and jargon and make a falsy comparison statement.
let word1 = "python";
let word2 = "jargon";
console.log(word1.length > word2.length);


//6.xi There is no 'on' in both dragon and python.
console.log(!(word1.includes("on") && word2.includes("on")));


//7. Use the Date object to do the following activities
const today = new Date();

console.log(`What is the year today? : ${today.getFullYear()}`);
console.log(`What is the month today as a number? : ${today.getMonth() + 1}`);
console.log(`What is the date today? : ${today.getDate()}`);
console.log(`What is the day today as a number? : ${today.getDay() + 1}`);
console.log(`What is the hours now? : ${today.getHours()}`);
console.log(`What is the minutes now? : ${today.getMinutes()}`);

//1 second = 1000 miliseconds
let secondsElapsed = Math.round(today.getTime() / 1000);
console.log(`Find out the numbers of seconds elapsed from January 1, 1970 to now : ${secondsElapsed}`);
