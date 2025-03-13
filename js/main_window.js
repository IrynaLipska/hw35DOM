"use strict";

let openButton = document.getElementById("openModal");
let modal = document.getElementById("myModal");
let closeButton = document.getElementById("closeModal");

openButton.onclick = function () {
  modal.style.display = "block";
};

closeButton.onclick = function () {
  modal.style.display = "none";
};
