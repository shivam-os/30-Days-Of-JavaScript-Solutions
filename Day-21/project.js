//1. The year color is changing every 1 second
let rgbValues = () => {
  let num = Math.floor(Math.random() * 256);
  return num;
};

let year = document.getElementById("year");
setInterval(() => year.style.color = `rgb(${rgbValues()}, ${rgbValues()}, ${rgbValues()})`, 1000);


//2. The date and time background color is changing every on seconds
let today = new Date();
let date = document.getElementById("date");
console.log(date);
date.innerHTML = today;
setInterval(() => date.style.backgroundColor = `rgb(${rgbValues()}, ${rgbValues()}, ${rgbValues()})`, 1000);

/*
3. Completed challenge has background green
4. Ongoing challenge has background yellow
5. Coming challenges have background red
*/
let list = document.querySelectorAll("li");
list.forEach((element) => {
  if (element.innerText.includes("Done")) {
    element.style.backgroundColor = "#21bf73";
  }

  if (element.innerText.includes("Ongoing")) {
    element.style.backgroundColor = "#fddb3a";
  }

  if (element.innerText.includes("Coming")) {
    element.style.backgroundColor = "#fd5e53";
  }

})