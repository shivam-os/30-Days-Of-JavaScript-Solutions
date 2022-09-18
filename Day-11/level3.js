//1. Destructure the countries object print name, capital, population and languages of all countries
const {data} = require("./countries_data.js")

for (let country of data){
  let {name, capital, population, languages} = country;
  console.log(`Name: ${name}`);
  console.log(`Capital: ${capital}`);
  console.log(`Population: ${population}`);
  console.log(`Languages: ${languages}`);
  console.log("--------");
}


/*
2. A junior developer structure student name, skills and score in array of arrays which may not easy to read. Destructure the following array name to name, skills array to skills, scores array to scores, JavaScript score to jsScore and React score to reactScore variable in one line.
*/
const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]];
let [name, skills, [, , jsScores, reactScore]] = student;
console.log(`Name: ${name}`);
console.log(`Skills: ${skills}`);
console.log(`JS Score: ${jsScores}`);
console.log(`React Score: ${reactScore}`);
