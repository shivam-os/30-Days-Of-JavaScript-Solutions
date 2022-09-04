//Question numbers in console.log are for reference

let challenge = "30 Days Of JavaScript";

console.log(`2. Original String: ${challenge}`);
console.log(`3. Length: ${challenge.length}`);
console.log(`4. Upper case string: ${challenge.toUpperCase()}`);
console.log(`5. Upper case string: ${challenge.toLowerCase()}`);
console.log(`6.a. First letter using substr: ${challenge.substr(0,1)}`);
console.log(`6.b. First letter using substr: ${challenge.substring(0,1)}`);
console.log(`7. Phrase: ${challenge.substring(2, challenge.length)}`);
console.log(`8. Is "Script" present: ${challenge.includes("Script")}`);
console.log(`9. Split string into array: ${challenge.split("")}`);
console.log(`10. Split string at space: ${challenge.split(" ")}`);
console.log(`12. Change JavaScript: ${challenge.replace("JavaScript", "Python")}`);
console.log(`13. Character at 15 index: ${challenge.charAt(15)}`);
console.log(`14. Character code of "J": ${challenge.charCodeAt(11)}`);
console.log(`15. First occurenece of "a": ${challenge.indexOf("a")}`);
console.log(`16. Last occurenece of "a": ${challenge.lastIndexOf("a")}`);
console.log(`20. Remove whitespaces at start or end: ${challenge.trim()}`);
console.log(`21. Starts with: ${challenge.startsWith("30")}`);
console.log(`22. Ends with: ${challenge.endsWith("Script")}`);
console.log(`23. Times "a" has appeared: ${challenge.match(/a/g)}`);
console.log(`24. Concat strings: ${challenge.concat("30 Days Of", "JavaScript")}`);
console.log(`25. Print string 2 times: ${challenge.repeat(2)}`);

let companiesList = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(`11. Split at comma: ${companiesList.split(",")}`);

let sentence = "You cannot end a sentence with because because because is a conjunction";
console.log(`17. First occurence of "because": ${sentence.indexOf("because")}`);
console.log(`18. Last occurence of "because": ${sentence.lastIndexOf("because")}`);
console.log(`19. First occurence of "because" using search(): ${sentence.search("because")}`);
