//1. Write a program which tells the number of days in a month.
let userMonth = prompt("Enter a month: ").toLowerCase();
let totalDays;

if (userMonth == "april" || userMonth == "june" || userMonth ==  "september" || userMonth == "november") {
  totalDays = 30;
} else if (userMonth == "february") {
  totalDays = 28;
} else {
  totalDays = 31;
}

console.log(`${userMonth} has ${totalDays} days.`);

