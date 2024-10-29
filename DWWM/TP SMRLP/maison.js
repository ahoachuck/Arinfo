class Maison {
    numeroRue;
    typeVoie;
    nomVoie;
    codePostal;
    ville;

    constructor(pNumeroRue = 1, pTypeVoie = "", pNomVoie = "", pCodePostal = 100000, pVille = "") {
        this.numeroRue = pNumeroRue;
        this.typeVoie = pTypeVoie;
        this.nomVoie = pNomVoie;
        this.codePostal = pCodePostal;
        this.ville = pVille;
    }

    afficher() {
        console.log(`Le logement se situe ${this.numeroRue} ${this.typeVoie} ${this.nomVoie} - ${this.codePostal} ${this.ville}`);
    }
}