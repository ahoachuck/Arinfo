const textNigga = document.getElementById("textNigga");

const success = (pos) => {
    textNigga.textContent = `accuracy: ${pos.coords.accuracy} | latitude: ${pos.coords.latitude} | longitude: ${pos.coords.longitude} | `;
}

const error = (posErr) => {
    textNigga.textContent = posErr.message;
}

navigator.geolocation.getCurrentPosition(
    success, error
);