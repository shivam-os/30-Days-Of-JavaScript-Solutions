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
let slope = equation[4];

//for intercepts, put other axis' value as 0
let xIntercept = (2 + 0) / 2;
let yIntercept = (2 * 0) - 2;

console.log(`Slope of ${equation} is: ${slope}`);
console.log(`x-intercept of ${equation} is: ${xIntercept}`);
console.log(`y-intercept of ${equation} is: ${yIntercept}`);

