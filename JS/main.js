"use strict";

const circleSVG = document.getElementById("cursor-svg");
const buttonHover = document.querySelectorAll(".button");
console.log(buttonHover);
let mouseX = 0;
let mouseY = 0;

circleSVG.style.opacity = 0;
document.addEventListener('mousemove', Event => {

    mouseY = Event.pageY;
    mouseX = Event.pageX;
    circleSVG.style.opacity = 1;
});


const mouseMove = () => {
    circleSVG.style.top = mouseY;
    circleSVG.style.left = mouseX;

    window.requestAnimationFrame(mouseMove);
}

mouseMove();

