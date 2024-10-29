const navAfter = document.getElementById("navAfter");
const navBefore = document.getElementById("navBefore");
const navNew = document.getElementById("navNew");

navAfter.addEventListener('click', () => {
    history.forward();
});

navBefore.addEventListener('click', () => {
    history.back();
});

navNew.addEventListener('click', () => {
    history.pushState({ page: 1 }, "NIGGA !!!!!", "?nigga=true");
});