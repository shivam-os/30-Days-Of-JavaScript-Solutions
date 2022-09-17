let isPrime = (num) => {
  for (let i = 2; i * i <= num; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
};

function generateNumbers(num) {
  const container = document.querySelector(".container");
  for (let i = 1; i<= num; i++) {
    let numberBox = document.createElement("div");
    numberBox.className = "container--box";
    numberBox.textContent = i;

    if (isPrime(i)) {
      numberBox.style.backgroundColor = "#eb695b"; //red
    } else if (i % 2 == 0) {
      numberBox.style.backgroundColor = "#5bbc7a"; //green
    } else {
      numberBox.style.backgroundColor = "#f7dc5c"; //yellow
    }
    container.appendChild(numberBox);
  } 
}

const button = document.getElementById("generateButton");
button.addEventListener("click", event => {
  const userInput = document.getElementById("userNumber");
  let userNum = userInput.value;
  generateNumbers(userNum);
});