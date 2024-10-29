const x = parseFloat(prompt("Valeur de x"));
const y = parseFloat(prompt("Valeur de y"));

console.log(
    (x > y) ? 
        "x est plus grand que y." :
        (x < y) ?
            "x est plus petit que y." :
            "x est égal à y."
);