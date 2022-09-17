const body = document.body;
const container = document.querySelector(".container");
const keyInfo = document.querySelector(".key--info");
const keyNum = document.querySelector(".key--code");
const keySpan = document.querySelector(".key--entered");

body.addEventListener("keydown", (event) => {
  const keySpan = document.createElement("span");

  keyInfo.innerHTML = `You pressed <span class="key--entered">${event.key}</span>`;
  keyNum.textContent = event.keyCode;
});