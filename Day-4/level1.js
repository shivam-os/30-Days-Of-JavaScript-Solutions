//1. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback.
let userAge = Number(prompt("Enter your age: "));

if (userAge >= 18) {
  console.log("You are old enough to drive.");
} else {
  console.log(`You are left with ${18 - userAge} years to drive.`);
}


//2. Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you).
let myAge = 23;
let yourAge = Number(prompt("Enter your age: "));

if (myAge > yourAge) {
  console.log(`I am ${myAge - yourAge} years older than you.`);
} else if (myAge == yourAge) {
  console.log("Our age is same.");
} else {
  console.log(`You are ${yourAge - myAge} years older than me.`);
}


//3. If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways:
//i. Using if-else
let a = 4;
let b = 3;
if (a > b) {
  console.log(`${a} is greater than ${b}.`);
} else {
  console.log(`${a} is less than ${b}.`);
}

//ii. Using ternary operator
(a > b)
 ? console.log(`${a} is greater than ${b}.`)
 : console.log(`${a} is less than ${b}.`);



//4. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
let userNum = Number(prompt("Enter a number : "));

if (userNum % 2 == 0) {
  console.log(`${userNum} is an even number.`);
} else {
  console.log(`${userNum} is an odd number.`)
}