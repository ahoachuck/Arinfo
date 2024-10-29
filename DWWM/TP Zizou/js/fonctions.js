// Tout d'abord, récupérons les éléments principaux de notre page
const mainImage = document.getElementById("main-img");
const mainText = document.getElementById("main-text");
const resetButton = document.getElementById("reset-btn");
if (!mainImage || !mainText || !resetButton) {
    // Le code s'arrête ici si il ne trouve aucun des 3 éléments
    console.error("nigga what");
}

// Nous devons garder en mémoire l'état de base de nos éléments,
// afin de les retrouver au moment de la réinitialisation.
const originalImage = mainImage.getAttribute("src");
const originalText = mainText.textContent;

// Nous définissons un tableau JSON, avec comme format:
// key (Clé): nom de l'animal
// value (Valeur): description de l'animal
const animals = {
    dog: "un chien tah les oufs !!!",
    pig: "un cochon tout rose tout cochon (c'est un véritable cochon)",
    monkey: "un singe! (je ne ferais pas cette blague (cf. 4 février 1794))",
    rat: "un Remote Administration Tool!",
    squirrel: "Squirrel is a high level imperative, object-oriented programming language, designed to be a light-weight scripting language that fits in the size, memory bandwidth, and real-time requirements of applications like video games.",
    cheetah: "un chat sous big zipette",
}

// Cette fonction permet de réinitialiser nos éléments principaux
// à leur état d'origine.
function onReset() {
    // Réinitialisation de l'image
    mainImage.setAttribute("src", originalImage);
    // Réinitialisation du texte
    mainText.textContent = originalText;
}

// Cette fonction permet d'inscrire les évènements suivants:
// image: 'mouseenter'
// button: 'click'
// Afin de changer à l'image et au texte correspondant au moment de l'appel.
function register(animalName, animalDesc) {
    // Pour commencer, nous avons besoin de chercher
    // l'image et le bouton correspondant.
    const btn = document.getElementById(animalName + "-btn")
    if (!btn) {
        // On s'arrête ici et on retourne 'false' pour notifier notre boucle de l'erreur.
        return false;
    }
    const img = document.getElementById(animalName + "-img");
    if (!img) {
        // Idem.
        return false;
    }

    // Ensuite, on définit la fonction à appeler
    // lors du déclenchement des évènements.
    const event = () => {
        const newSrc = img.getAttribute('src');
        const newText = animalDesc;

        mainImage.setAttribute("src", newSrc);
        mainText.textContent = newText;
        console.log(`Switched to ${animalName} !`);
    }

    // Enfin, on enregistre nos évènements, et on retourne 'true'
    // pour notifier la boucle du succès de notre méthode.
    btn.addEventListener('click', event);
    img.addEventListener('mouseenter', event);
    img.addEventListener('mouseleave', onReset);

    return true;
}

// Pour chaque nom d'animal dans le tableau 'animals' ...
for(const animalName in animals) {
    // Nous récupérons la description
    const animalDesc = animals[animalName];

    // On enregistre les évènements pour le bouton et l'image correspondante
    const res = register(animalName, animalDesc);

    // Si l'enregistrement s'est terminée correctement ...
    if (res === true) console.log(`Animal '${animalName}' registered.`)
    // Sinon...
    else console.error(`Failed to register animal '${animalName}': not a valid animal.`);
}

// Enfin, on enregistre l'évènement 'click' pour le bouton de réinitialisation.
resetButton.addEventListener('click', onReset)