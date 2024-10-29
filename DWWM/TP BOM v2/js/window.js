const spanHeight = document.getElementById("spanHeight");
const spanWidth = document.getElementById("spanWidth");

window.onbeforeunload = () => "u sure nigga?";

setInterval(() => {
    spanHeight.textContent = window.innerHeight;
    spanWidth.textContent = window.innerWidth;
}, 100);