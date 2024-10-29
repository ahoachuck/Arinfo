const longueur = prompt("Quel est la longueur de votre rectangle?");
const largeur = prompt("Quel est la largeur de votre rectangle?");
const surface = parseFloat(longueur) * parseFloat(largeur);
console.log(`le rectangle de longueur ${longueur}cm et de largeur ${largeur}cm a pour surface ${surface} cm²`)