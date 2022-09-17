import countries from "./countries.js";

const body = document.body;
//Get the number of countries & add it to the page
const h3 = document.createElement("h3");
h3.textContent = `Total number of countries: ${countries.length}`;
body.appendChild(h3);

//Create container for adding countries
const countryContainer = document.createElement("div");
countryContainer.className = "container";
body.appendChild(countryContainer);

//Create country boxes
for (let item of countries) {
  const country = document.createElement("div");
  country.className = "country";
  country.textContent = item;
  countryContainer.appendChild(country);
}