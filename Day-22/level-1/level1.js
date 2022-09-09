/*
    Create a div container on HTML document and create 100 to 100 numbers dynamically and append to the container div:
    Even numbers background is green
    Odd numbers background is yellow
    Prime numbers background is red
*/
let isPrime = (num) => {
  for (let i = 2; i * i < num; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
};

let container = document.querySelector(".container");
console.log(container);

for (let i=1; i<101; i++){
  let box = document.createElement("div");
  box.setAttribute("class", "box");
  box.textContent = i;

  if (isPrime(i)) {
    box.style.backgroundColor = "#fd5e53";
  } else if (i % 2 == 0) {
    box.style.backgroundColor = "#21bf73";
  } else {
    box.style.backgroundColor = "#fddb3a";
  }
  
  container.appendChild(box);
}