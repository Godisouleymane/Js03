// Créer un objet personne avec des propriétés suivant : son nom Mariam 
// et 30ans d'âge, et écrire une fonction qui affiche ces informations

let personne = {
    "Nom" : "Mariam",
    "Age" : 30,
}
function displayPersonInfo () {
    console.log(`Nom: ${personne.Nom}`);
    console.log(`Age: ${personne.Age}`);
}

displayPersonInfo();