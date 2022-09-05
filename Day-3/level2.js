//1. Write a script that prompt the user to enter base and height of the triangle and calculate an area
let base = Number(prompt("Enter base: "));
let height = Number(prompt("Enter height: "));
let triangleArea = 0.5 * base * height;
console.log(`Triange area is: ${triangleArea}`);


//2. Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
let sideA = Number(prompt("Enter side a: "));
let sideB = Number(prompt("Enter side b: "));
let sideC = Number(prompt("Enter side c: "));
let trianglePerimeter = sideA + sideB + sideC;
console.log(`Triange perimeter is: ${trianglePerimeter}`);


//3. Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
let length = Number(prompt("Enter length of rectangle: "));
let width = Number(prompt("Enter width of rectangle: "));
let rectangleArea = length * width;
let rectanglePerimeter = 2 * (length + width);
console.log(`Rectangle area is: ${rectangleArea}`);
console.log(`Rectangle perimeter is: ${rectanglePerimeter}`);


//4. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
const pi = 3.14;
let radius = Number(prompt("Enter length of radius: "));
let circleArea = pi * radius * radius;
let circleCircumference = 2 * pi * radius;
console.log(`Circle area is: ${circleArea}`);
console.log(`Circumference of circle is: ${circleCircumference}`);


//5. Calculate the slope, x-intercept and y-intercept of y = 2x -2
let equation = "y = 2x - 2";
let slope1 = equation[4];

//for intercepts, put other axis' value as 0
let xIntercept = (2 + 0) / 2;
let yIntercept = (2 * 0) - 2;

console.log(`Slope of ${equation} is: ${slope1}`);
console.log(`x-intercept of ${equation} is: ${xIntercept}`);
console.log(`y-intercept of ${equation} is: ${yIntercept}`);


//6. Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
let slope2 = (10 - 2) / (6 - 2);
console.log(`Slope b/w points (2, 2) & (6, 10) is : ${slope2}`);


//7. Compare the slope of above two questions.
console.log(`Is slope 1 greater than slope 2 : ${slope1 > slope2}`);


//8. Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
let yValue = 9;
let xValue = ((0 - 9) / 6) ** 0.5;
console.log(`The value of y at x = 0 is : ${yValue}`);
console.log(`The value of x at y = 0 is : ${xValue}`);


//9. Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
let workHours = Number(prompt("Enter work hours : "));
let hourlyRate = Number(prompt("Enter the hourly rate : "));
console.log(`Your weekly earning is : ${workHours * hourlyRate}`);


//10. If the length of your name is greater than 7 say, your name is long else say your name is short.
let userName = prompt("Enter your name : ");
let nameLength = (userName.length > 7) ? "long" : "short";
console.log(`Your name is : ${nameLength}`);


//11. Compare your first name length and your family name length and you should get this output.
let firstName = "Sourav";
let lastName = "Kumar";
let compareName = (firstName.length > lastName.length) ? "longer" : "shorter";
console.log(`Your first name, ${firstName} is ${compareName} than your family name, ${lastName}`);


//12. Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
let myAge = 250;
let yourAge = 25;
console.log(`I am ${myAge - yourAge} older than you.`);


//13. Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
let birthYear = Number(prompt("Enter birth year : "));
const today = new Date();
let currentAge = today.getFullYear() - birthYear;
if (currentAge >= 18){
  console.log(`Your are ${currentAge}. You are old enough to drive.`);
} else {
  console.log(`You are ${currentAge}. You will be allowed to drive after ${18 - currentAge} years.`);
}


//14. Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
let yearsLived = Number(prompt("Enter the number of years you lived : "));
let secondsLived = yearsLived * 365 * 24 * 60 * 60;
console.log(`You lived ${secondsLived} seconds.`);


//15. Create a human readable time format using the Date time object
let currentYear = today.getFullYear();
let currentMonth = today.getMonth() + 1;
let currentDate = today.getDate();
let currentHour = today.getHours();
let currentMinutes = today.getMinutes();

//i. YYYY-MM-DD HH:mm
console.log(`YYYY-MM-DD HH:mm = ${currentYear}-${currentMonth}-${currentDate} ${currentHour}:${currentMinutes}`);

//ii. DD-MM-YYYY HH:mm
console.log(`DD-MM-YYYY HH:mm = ${currentDate}-${currentMonth}-${currentYear} ${currentHour}:${currentMinutes}`);

//iii. DD/MM/YYYY HH:mm
console.log(`DD/MM/YYYY HH:mm = ${currentDate}/${currentMonth}/${currentYear} ${currentHour}:${currentMinutes}`);