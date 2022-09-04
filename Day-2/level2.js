console.log(`1. The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.`);

console.log(`2. "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`);


//3. Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
let ten = "10";
let intTen = Number(ten);
console.log((typeof intTen) == (typeof 10));


//4. Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
let exactNum = Math.ceil(parseFloat("9.8"));
console.log(exactNum == 10);


//5. Check if 'on' is found in both python and jargon
let language = "python";
let word = "jargon";
console.log(`Is "on" in python: ${language.includes("on")}`);
console.log(`Is "on" in jargon: ${word.includes("on")}`);


//6. Check if jargon is in the sentence.
let sentence = "I hope this course is not full of jargon.";
console.log(`Is "jargon" in sentence: ${sentence.includes("on")}`);


//7. Generate a random number between 0 and 100 inclusively.
let zeroToHundred = Math.floor(Math.random() * 101);
console.log(`Random number b/w 0 to 100: ${zeroToHundred}`);


/*
8. Generate a random number between 50 and 100 inclusively.

Algorithm for lower bound > 0:
1. Calculate the range b/w numbers
2. Add 1 to get the numbers b/w 0 & range
3. Add the lower range number to final result
*/
let range = 100-50;
let fiftyToHundred = Math.floor(Math.random() * (range + 1)) + 50;
console.log(`Random number b/w 50 to 100: ${fiftyToHundred}`);


//9. Generate a random number between 0 and 255 inclusively.
let zeroToTwoFiftyFive = Math.floor(Math.random() * 256);
console.log(`Random number b/w 0 to 255: ${zeroToTwoFiftyFive}`);


//10. Access the 'JavaScript' string characters using a random number.
let myLanguage = "JavaScript";
let randomNum = Math.floor(Math.random() * myLanguage.length);
console.log(`Random character of "JavaScript": ${myLanguage[randomNum]}`);


//11. Use console.log() and escape characters to print the following pattern.
console.log("Pattern : ");
console.log(`1 1 1 1 1 \n2 1 2 4 8 \n3 1 3 9 27 \n4 1 4 16 64 \n5 1 5 25 125`);


//12. Use substr to slice out the phrase because because because from the following sentence
let becauseSentence = "You cannot end a sentence with because because because is a conjunction";
let firstBecause = becauseSentence.indexOf("because");
let becauseLength = "because".length;
let newSentence = becauseSentence.substr(firstBecause, (becauseLength * 3) + 3);
console.log(`Sliced phrase: ${newSentence}`);