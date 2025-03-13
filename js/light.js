"use strict";

let redButton = document.getElementById("red");
let yellowButton = document.getElementById("yellow");
let greenButton = document.getElementById("green");
let redLight = document.getElementById("redLight");
let yellowLight = document.getElementById("yellowLight");
let greenLight = document.getElementById("greenLight");

redButton.oneclick = function () {
  redLight.style.display = "block";
};
yellowButton.oneclick = function () {
  yellowLight.style.display = "block";
};
greenButton.oneclick = function () {
  greenLight.style.display = "block";
};
