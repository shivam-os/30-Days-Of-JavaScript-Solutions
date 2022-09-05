//1. Write a code which can give grades to students according to theirs scores: 
let studentGrade;
let studentScore = Number(prompt("Enter your score: "));
if (studentScore <= 100 && studentScore >= 90)  {
  studentGrade = "A";
} else if (studentScore <= 89 && studentScore >= 70)  {
  studentGrade = "B";
} else if (studentScore <= 69 && studentScore >= 60)  {
  studentGrade = "C";
} else if (studentScore <= 59 && studentScore >= 40)  {
  studentGrade = "D";
} else if (studentScore <= 39 && studentScore >= 0)  {
  studentGrade = "F";
} else {
  studentGrade = "Invalid score.";
}


//2. Check if the season is Autumn, Winter, Spring or Summer.
let userMonth = prompt("Enter the month: ");
switch (userMonth) {
  case ("September" || "October" || "November"):
    console.log("Current season is Autumn.");
    break;
  
  case ("December" || "January" || "February"):
    console.log("Current season is Winter.");
    break;

  case ("March" || "April" || "May"):
    console.log("Current season is Spring.");
    break;

  case ("June" || "July" || "August"):
    console.log("Current season is Summer.");
    break;

  default:
    console.log("Invalid month.");
}


//3. Check if a day is weekend day or a working day. Your script will take day as an input.
let userDay = prompt("Enter the day: ");

if (userDay == "Saturday" || userDay == "Sunday") {
  console.log(`${userDay} is a weekend.`);
} else {
  console.log(`${userDay} is a working day.`);
}