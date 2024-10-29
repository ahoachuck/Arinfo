function ex1() {
    let voiture = {
        marque: "BMW",
        modèle: "E56",
        afficherDetails: function() {
            console.log(`[Voiture] Marque: ${this.marque} | Modèle: ${this.modèle}`)
        }
    };

    voiture.afficherDetails();
}

function ex2() {
    function Voiture(marque, modèle) {
        this.marque = marque;
        this.modèle = modèle;
    }
    Voiture.prototype.afficherDetails = function() {
        console.log(`[Voiture] Marque: ${this.marque} | Modèle: ${this.modèle}`)
    }

    let bm = new Voiture("BMW", "E60");
    bm.afficherDetails();
}

function ex3() {
    function Voiture(marque, modèle) {
        this.marque = marque;
        this.modèle = modèle;
    };
    Voiture.prototype.afficherDetails = function() {
        console.log(`[Voiture] Marque: ${this.marque} | Modèle: ${this.modèle}`)
    }
    Voiture.prototype.démarrer = function() {
        console.log(`[Voiture] La ${this.marque} ${this.modèle} démarre.`);
    };

    let bm = new Voiture("BMW", "E39");
    bm.afficherDetails();
    bm.démarrer();
}

function ex4() {
    function Voiture(marque, modèle) {
        this.marque = marque;
        this.modèle = modèle;
    };
    Voiture.prototype.afficherDetails = function() {
        console.log(`[Voiture] Marque: ${this.marque} | Modèle: ${this.modèle}`)
    }
    Voiture.prototype.démarrer = function() {
        console.log(`[Voiture] La ${this.marque} ${this.modèle} démarre.`);
    };

    function Camion(marque, modèle, poidsMax) {
        Voiture.call(this, marque, modèle);
        this.poidsMax = poidsMax;
    }
}

function ex5() {
    function Voiture(marque, modèle) {
        this.marque = marque;
        this.modèle = modèle;
    };
    Voiture.prototype.afficherDetails = function() {
        console.log(`[Voiture] Marque: ${this.marque} | Modèle: ${this.modèle}`)
    }
    Voiture.prototype.démarrer = function() {
        console.log(`[Voiture] La ${this.marque} ${this.modèle} démarre.`);
    };

    function Camion(marque, modèle, poidsMax) {
        Voiture.call(this, marque, modèle);
        this.poidsMax = poidsMax;
    }
    Camion.prototype = Object.create(Voiture.prototype);
}

function ex6() {
    function Voiture(marque, modèle) {
        this.marque = marque;
        this.modèle = modèle;
    };
    Voiture.prototype.afficherDetails = function() {
        console.log(`[Voiture] Marque: ${this.marque} | Modèle: ${this.modèle}`)
    }
    Voiture.prototype.démarrer = function() {
        console.log(`[Voiture] La ${this.marque} ${this.modèle} démarre.`);
    };

    function Camion(marque, modèle, poidsMax) {
        Voiture.call(this, marque, modèle);
        this.poidsMax = poidsMax;
    }
    Camion.prototype = Object.create(Voiture.prototype);
    Camion.prototype.transportMarchandise = function() {
        console.log(`[Camion] j'transporte ta grosse mere oe oe oe`)
    }
    Camion.prototype.afficherDetails = function() {
        console.log(`[Camion] Marque: ${this.marque} | Modèle: ${this.modèle} | Poids max: ${this.poidsMax}`)
    }
}

function ex7() {
    function Voiture(marque, modèle) {
        this.marque = marque;
        this.modèle = modèle;
    };
    Voiture.prototype.afficherDetails = function() {
        console.log(`[Voiture] Marque: ${this.marque} | Modèle: ${this.modèle}`)
    }
    Voiture.prototype.démarrer = function() {
        console.log(`[Voiture] La ${this.marque} ${this.modèle} démarre.`);
    };

    function Camion(marque, modèle, poidsMax) {
        Voiture.call(this, marque, modèle);
        this.poidsMax = poidsMax;
    }
    Camion.prototype = Object.create(Voiture.prototype);
    Camion.prototype.transportMarchandise = function() {
        console.log(`[Camion] j'transporte ta grosse mere oe oe oe`)
    }
    Camion.prototype.afficherDetails = function() {
        console.log(`[Camion] Marque: ${this.marque} | Modèle: ${this.modèle} | Poids max: ${this.poidsMax}`)
    }
    Camion.prototype.démarrer = function() {
        console.log(`[Camion] Oh bordel jcrois jvais démarrer là *bruit de caca coulant bien liquide*`)
    }
}

function ex8() {
    function Animal(nom) {
        this.nom = nom;
    };
    Animal.prototype.parler = function() {
        console.log(`L'animal parle!`);
    }

    function Chien(nom) {
        Animal.call(this, nom);
    }
    Chien.prototype.parler = function() {
        console.log(`Le chien aboie! (cte chienne)`);
    }
}

function ex9() {
    function Animal(nom) {
        this.nom = nom;
    };
    Animal.prototype.parler = function() {
        console.log(`L'animal parle!`);
    }

    function Chien(nom) {
        Animal.call(this, nom);
    }
    Chien.prototype.parler = function() {
        console.log(`${this.nom} aboie! (cte chienne)`);
    }

    function Chat(nom) {
        Animal.call(this, nom);
    }
    Chat.prototype.parler = function() {
        console.log(`${this.nom} miaule! (cte coquine)`);
    }

    let arr = [];
    for (let i = 0; i < 7; i++) arr.push(new Chat(`Robert N°${i}`));
    for (let i = 0; i < 4; i++) arr.push(new Chien(`Thomas N°${i}`));

    arr.forEach(animal => {
        animal.parler();
    });
}