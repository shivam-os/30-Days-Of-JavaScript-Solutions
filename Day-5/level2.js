//2. First remove all the punctuations and change the string to array and count the number of words in the array
let text = "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python."
let cleanText = text.replace(/[,.]/g, "");
let arrayText = cleanText.split(" ");
console.log(`Text after removing punctuation: ${arrayText}`);
console.log(`Length of array: ${arrayText.length}`);


//3. In the following shopping cart add, remove, edit items
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

//i. add 'Meat' in the beginning of your shopping cart if it has not been already added
if (shoppingCart[0] != "Meat") {
  shoppingCart.unshift("Meat");
}

//ii. add Sugar at the end of you shopping cart if it has not been already added
if (shoppingCart[shoppingCart.length - 1] != "Sugar") {
  shoppingCart.push("Sugar");
}

//iii. remove 'Honey' if you are allergic to honey
shoppingCart.splice(shoppingCart.length - 2, 1);

//iv. modify Tea to 'Green Tea'
shoppingCart[3] = "Green Tea";

console.log(`Final array: ${shoppingCart}`);


//6. Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node','Express', 'MongoDB'];
let fullStack = frontEnd.concat(backEnd);

console.log(`Full stack array: ${fullStack}`);