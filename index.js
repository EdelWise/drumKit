"use strict";
// const w = document.querySelector(".w");
// const a = document.querySelector(".a");
// const s = document.querySelector(".s");
// const d = document.querySelector(".d");
// const j = document.querySelector(".j");
// const k = document.querySelector(".k");
// const l = document.querySelector(".l");

// function handleClick() {
//   alert("I got clicked!");
// }

// w.addEventListener("click", handleClick);

const drumQuery = document.querySelectorAll(".drum");

for (let i = 0; i < drumQuery.length; i++)
  drumQuery[i].addEventListener("click", function () {
    const buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);

    // this.style.color = "white";
    // const playSound = new Audio("sounds/tom-2.mp3");
    // playSound.play();
  });

document.addEventListener("keydown", function (event) {
  makeSound(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      const tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      const tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      const tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      const tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      const crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "k":
      const kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case "l":
      const snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    default:
      console.log("default");
  }
}
