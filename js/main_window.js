"use strict";

let openButton = document.getElementById("openModal");
let modal = document.getElementById("myModal");
let closeButton = document.getElementById("closeModal");

openButton.addEventListener("click", function () {
  modal.style.display = "block";
});

// openButton.onclick = function () {
//   modal.style.display = "block";
// };

closeButton.addEventListener("click", function () {
  modal.style.display = "none";
});
