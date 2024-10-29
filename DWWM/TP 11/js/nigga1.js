function emoteHumain() {
    return "l'ordinateur observe la personne qui approche.";
}
function emoteElfe() {
    return "l'ordinateur observe la personne, totalement subjugé par la grâce elfique.";
}
function emoteOrque() {
    return "l'ordinateur observe la personne difforme et repoussante, plissant le nez.";
}

function emoteRoturier() {
    return "Le garde fait un signe de tête..";
}
function emoteNoblesse() {
    return "Le garde s’incline respectueusement.";
}
function emoteRoyauté() {
    return "Le garde, ainsi que toutes les personnes présentes s’inclinent profondément.";
}

function getNombreClasse() {
    let classes = document.querySelectorAll('.classe:checked');
    return classes.length;
}

function listerLesClasses() {
    let classes = document.querySelectorAll('.classe:checked');
    let message = "<ul>";
    classes.forEach(classe => {
        message += `<li>${classe.name}</li>`;
    });
    return message;
}

function GenererCoucouUwU(event) {
    // bloquer l'événement par défaut, on peut récupérer les informations de l'événement
    // grâce au paramètre event qui est rempli automatiquement par le listener.
    event.preventDefault();
    // récupération de la valeur des champs de saisie.
    let prenom = document.querySelector('#prenom').value;
    let nom = document.querySelector('#nom').value;
    let titre = document.querySelector('#titre').value;
    // construction du message
    let message = "";
    if (prenom.length == 0 && nom.length == 0)
        message = "Bonjour, illustre inconnu(e)";

    else
        message = `Bonjour ${prenom} ${nom}`;
    if (titre.length != 0)
        message += ` (aka ${titre})`;

    return message;
}

function LaConDeTaRace() {
    let race = document.querySelector('#race').value;
    let emote = "";
    switch (race) {
        case 'elf':
            emote = emoteElfe();
            break;
        case 'ork':
            emote = emoteOrque();
            break;
        default:
            emote = emoteHumain();
            break;
    }

    return emote;
}

function RangDeZinz(emote) {
    let rang = document.querySelector('input[name=rank]:checked').value;
    switch (rang) {
        case 'roturier':
            emote = emoteRoturier();
            break;
        case 'noble':
            emote = emoteNoblesse();
            break;
        default:
            emote = emoteRoyauté();
            break;
    }

    return emote;
}

function update_elem_by_id(id, value) {
    let paragrapheClasses = document.querySelector(id);
    paragrapheClasses.innerHTML = value;
}

function saluerSansCasserLesCouilles(event) {
    event.preventDefault();

    // on affiche tout par défaut, et il n'y a pas d'erreur !
    document.querySelector('#error').innerHTML = "";
    document.querySelector('#message').style.display = 'block';
    // vérifier les trois classes
    // test de garde !
    if ((getNombreClasse() == 0) || getNombreClasse() > 3) {
        document.querySelector('#message').style.display = 'none';
        document.querySelector('#classes').innerHTML = "";
        document.querySelector('#emotes').innerHTML = "";
        document.querySelector('#races').innerHTML = "";
        document.querySelector('#error').innerHTML = `Vous ne pouvez pas avoir ${getNombreClasse()}
classe(s): entre 1 et 3 maximum.`;
        return;
    }

    let msg = GenererCoucouUwU(event);
    update_elem_by_id('#salutations', msg);
    let emote = LaConDeTaRace();
    update_elem_by_id('#emotes', emote);
    let rank = RangDeZinz(emote);
    update_elem_by_id('#races', rank);
}

function saluer(event) {
    // bloquer l'événement par défaut, on peut récupérer les informations de l'événement
    // grâce au paramètre event qui est rempli automatiquement par le listener.
    event.preventDefault();
    // récupération de la valeur des champs de saisie.
    let prenom = document.querySelector('#prenom').value;
    let nom = document.querySelector('#nom').value;
    let titre = document.querySelector('#titre').value;
    // construction du message
    let message = "";
    if (prenom.length == 0 && nom.length == 0)
        message = "Bonjour, illustre inconnu(e)";
    else
        message = `Bonjour ${prenom} ${nom}`;
    if (titre.length != 0)
        message += ` (aka ${titre})`;
    //alert("AH UN CLICK SUR LE BOUTON !");
    alert(message);

    let race = document.querySelector('#race').value;
    let emote = "";
    switch (race) {
        case 'elf':
            emote = emoteElfe();
            break;
        case 'ork':
            emote = emoteOrque();
            break;
        default:
            emote = emoteHumain();
            break;
    }
    alert(emote);

    let rang = document.querySelector('input[name=rank]:checked').value;
    switch (rang) {
        case 'roturier':
            emote = emoteRoturier();
            break;
        case 'noble':
            emote = emoteNoblesse();
            break;
        default:
            emote = emoteRoyauté();
            break;
    }
    alert(emote);

    update_elem_by_id('#classes', listerLesClasses());
}