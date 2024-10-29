const tempCelsius = prompt("Quel est la température en Celsius?");
const tempKelvin = parseFloat(tempCelsius) + 273.15;
console.log(`la temperature de ${tempCelsius}°C vaut ${tempKelvin} Kelvin`)