class Animal {
    nom;
    espèce;

    constructor(pNom = "", pEspece = "") {
        this.nom = pNom;
        this.espèce = pEspece;
    }

    afficher() {
        console.log(`L'animal s'appelle ${this.nom} et est de l'espèce ${this.espèce}.`);
    }
}