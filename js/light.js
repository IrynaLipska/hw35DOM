"use strict";

let lights = document.querySelectorAll(".light");
let currentIndex = 0;
console.log(lights);

document.getElementById("changeLight").addEventListener("click", function () {
  lights.forEach((light) => light.classList.remove("active"));

  lights[currentIndex].classList.add("active");

  currentIndex = (currentIndex + 1) % lights.length;
});
