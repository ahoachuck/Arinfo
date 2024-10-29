class Personne {
    nom;
    prénom;

    constructor(pPrenom="", pNom="") {
        this.nom = pNom;
        this.prénom = pPrenom;
    }

    afficher() {
        console.log(`La personne s'appelle ${this.prénom} ${this.nom}`);
    }
}