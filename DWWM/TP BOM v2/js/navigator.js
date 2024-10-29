const textResult1 = document.getElementById("textResult1");
const textResult2 = document.getElementById("textResult2");

navigator.geolocation.getCurrentPosition(
    (pos) => {
        // success
        textResult1.textContent = `accuracy: (+-)${pos.coords.accuracy}m | longitude: ${pos.coords.longitude} | latitude: ${pos.coords.latitude}`
    },
    (posErr) => {
        textResult1.textContent = "Location is not supported on your browser, or access has been denied."
    }
);

if (navigator.connection == undefined)
    textResult2.textContent = "No 'navigator.connection'.";
else
    textResult2.textContent = navigator.connection.type;