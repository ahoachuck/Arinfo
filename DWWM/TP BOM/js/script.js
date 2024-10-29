const wndOpen = document.getElementById("wndOpen");
const wndResizeBy = document.getElementById("wndResizeBy");
const wndResizeTo = document.getElementById("wndResizeTo");
const wndClose = document.getElementById("wndClose");
const wndGps = document.getElementById("wndGps");

let wnd = null;
let gps = null;

function btnOpen() {
    if (wnd) return;

    wnd = window.open("/popup.html", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,width=200,height=100");
}
wndOpen.addEventListener('click', btnOpen);

function btnResizeBy() {
    if (!wnd) return;

    wnd.resizeBy(50, 50);
}
wndResizeBy.addEventListener('click', btnResizeBy);

function btnResizeTo() {
    if (!wnd) return;

    wnd.resizeTo(320, 320);
}
wndResizeTo.addEventListener('click', btnResizeTo);

function btnClose() {
    if (!wnd) return;

    wnd.close();
    wnd = null;
}
wndClose.addEventListener('click', btnClose);

function btnGps() {
    if (gps) {
        gps.close();
        gps = null;
    }
    gps = window.open("/gps.html", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,width=400,height=300");
}
wndGps.addEventListener('click', btnGps);