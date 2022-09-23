//1. Change skills array to JSON using JSON.stringify()
const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python'];
let sillsJSON = JSON.stringify(skills, undefined, 2);
//console.log(sillsJSON);


//2. Stringify the age variable
let age = 250;
let ageJSON = JSON.stringify(age);
console.log(typeof ageJSON);


//3. Stringify the isMarried variable
let isMarried = true;
let isMarriedJSON = JSON.stringify(isMarried);
console.log(isMarriedJSON);


//4. Stringify the student object
const student = {
  firstName:'Asabeneh',
  lastName:'Yetayehe',
  age:250,
  isMarried:true,
  skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
}
let studentJSON = JSON.stringify(student, undefined, 4);
console.log(studentJSON);