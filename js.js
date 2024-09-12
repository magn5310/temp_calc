"use strict";

const button = document.querySelector("button");
const amount = document.querySelector("#amount");
const from = document.querySelector("#from");
const to = document.querySelector("#to");
const h2 = document.querySelector("h2");

button.addEventListener("click", function (e) {
  e.preventDefault();
  h2.innerText = "";
  if (from.value === "celsius" && to.value === "fahrenheit") {
    const facit = +amount.value * (9 / 5) + 32;
    h2.append(facit);
  }
  if (from.value === "fahrenheit" && to.value === "celsius") {
    const facit = ((+amount.value - 32) / 9) * 5;
    h2.append(facit);
  }
  if (from.value === "celsius" && to.value === "kelvin") {
    const facit = +amount.value + 273.15;
    h2.append(facit);
  }
  if (from.value === "fahrenheit" && to.value === "kelvin") {
    const facit = (+amount.value - 32) * (5 / 9) + 273.15;
    h2.append(facit);
  }
  if (from.value === "kelvin" && to.value === "celsius") {
    const facit = +amount.value - 273.15;
    h2.append(facit);
  }
  if (from.value === "kelvin" && to.value === "fahrenheit") {
    const facit = (+amount.value - 273.15) * 1.8 + 32;
    h2.append(facit);
  }
  if (from.value === to.value) {
    const facit = +amount.value;
    h2.append(facit);
  }
});
