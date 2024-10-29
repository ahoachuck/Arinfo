class Véhicule {
    marque;
    modèle;
    nombrePlaces;

    constructor(pMarque = "", pModele = "", pNbPlaces = 4) {
        this.marque = pMarque;
        this.modèle = pModele;
        this.nombrePlaces = pNbPlaces;
    }

    afficher() {
        console.log(`Le véhicule est de la marque ${this.marque} et du modèle ${this.modèle}. Il peut transporter ${this.nombrePlaces} personne(s).`);
    }
}