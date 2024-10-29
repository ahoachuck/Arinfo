function s0ex1() {
    let nom = "Martin";
    let anneeNaissance = 2000;

    let cur = new Date();


    console.log(`Bonjour Mr ${nom} vous avez ${cur.getUTCFullYear() - anneeNaissance}`);
}

function s0ex2() {
    let note_maths = 15;
    let note_français = 12;
    let note_HG = 9;
    console.log(`La moyenne est de ${(note_maths + note_français + note_HG) / 3}/20.`);
}

function s0ex3(_sexe) {
    let sexe = _sexe;
    if (sexe == "Homme") {
        console.log("Vous êtes un homme!");
    } else if (sexe == "Femme") {
        console.log("Vous êtes une femme!");
    } else {
        console.log("Mais nan un char d'assaut");
    }
}

function s0ex4(x) {
    if (x < 0 || x > 24)
        console.error("t con w'Allah");

    let heure = x;
    if (x > 6 && x < 12) {
        console.log("Nous sommes le matin.");
    } else if(x >= 12 && x < 18) {
        console.log("Nous sommes l'après-midi!");
    }
    else {
        console.log("Nous sommes la nuit >///<");
    }
}

function s0ex5() {
    let x = 2;
    switch(x) {
        case 1: {
            console.log("Insérer");
            break;
        }

        case 2: {
            console.log("Supprimer");
            break;
        }

        case 3: {
            console.log("Afficher");
            break;
        }

        case 4: {
            console.log("Ce choix n'existe pas");
            break;
        }
    }
}

function s0ex6() {
    let isMult = (x) => {
        return ((x % 3) == 0) && ((x % 5) == 0);
    } 

    console.log(isMult(15));
}

function s1ex1() {
    let prenom = "Amoy";
    let age = 20;

    age += 1;

    console.log(`Je m'appelle ${prenom} et j'ai ${age} ans l'année prochaine !`);
}

function s1ex2() {
    let longueur = 10.0;
    let largeur = 5.0;
    let surface = longueur * largeur;
    console.log(`Le rectangle de longueur ${longueur}cm et de largeur ${largeur}cm a pour surfance ${surface}cm².`);
}

function s1ex3() {
    let tempCelsius = 0.0;
    let tempKelvin = tempCelsius + 273.15;
    console.log(`la temperature de ${tempCelsius} °Celsius vaut ${tempKelvin} en Kelvin`)
}

function s1ex4() {
    let nombre = (Math.random()*100).toFixed(0);
    console.log(nombre);
}

function s1ex5() {
    let r = 10.0;
    let surface = Math.PI * Math.pow(r, 2.0);
    console.log(`Le cercle de rayon ${r}cm a pour surfance ${surface}cm².`);
}

