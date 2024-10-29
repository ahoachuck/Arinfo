//let personne = new Personne();
//let animal = new Animal();
//let véhicule = new Véhicule();
//let maison = new Maison();

//personne.nom = prompt("Nom ?");
//personne.prénom = prompt("Prénom ?");
//console.log(personne);

//animal.nom = prompt("Nom animal ?");
//animal.espèce = prompt("Espèce animal ?");
//console.log(animal);

//véhicule.marque = prompt("Marque voiture ?");
//véhicule.modèle = prompt("Modèle voiture ?");
//véhicule.nombrePlaces = parseInt(prompt("Nombre de places dans véhicule ?"));
//console.log(véhicule);

//maison.codePostal = parseInt(prompt("Code postal ?"));
//maison.nomVoie = prompt("Nom de la voie ?");
//maison.numeroRue = parseInt(prompt("Numéro de la rue ?"));
//maison.typeVoie = prompt("Type de voie ?");
//maison.ville = prompt("Ville ?");
//console.log(maison);

let formateur = new Personne('DESVAUX', 'Brendon');
let chatFormateur = new Animal('Chaussette', 'chat');
let vehiculeFormateur = new Véhicule('Tesla', 'Model X', '7');
let domicileFormateur = new Maison(1, 'rue', 'du paradis', '18999', 'Las Angelos');

formateur.afficher();
chatFormateur.afficher();
vehiculeFormateur.afficher();
domicileFormateur.afficher();

let width = parseFloat(prompt("Longueur du rectangle ?"));
let height = parseFloat(prompt("Hauteur du rectangle ?"));
let rect = new Rectangle(width, height);
alert(`Périmètre: ${rect.perimeter()} | Surface: ${rect.surface()}`);

const rayon = parseFloat(prompt("Rayon du cercle ?"));
const cercle = new Cercle(rayon);

const surface = cercle.surface().toFixed(2);
const perimetre = cercle.perimeter().toFixed(2);

alert(`Le cercle de rayon ${rayon} cm a une surface de ${surface} cm² et un périmètre de ${perimetre} cm.`);