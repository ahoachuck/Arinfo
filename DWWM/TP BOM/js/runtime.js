const spanHeight = document.getElementById("spanHeight");
const spanWidth = document.getElementById("spanWidth");

setInterval(() => {
    spanHeight.textContent = window.innerHeight;
    spanWidth.textContent = window.innerWidth;
}, 100);