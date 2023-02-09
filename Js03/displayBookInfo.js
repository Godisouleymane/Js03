// Créer un objet book représentant le livre L'Enfant Noir de Camara Laye 
// publié en 1953, et écrire une fonction qui affiche ces informations

let book = {
    "Titre" : "L'Enfant Noir",
    "Auteur" : "Camara Laye",
    "Annee" : 1953
}
function displayBookInfo() {
    console.log(`Titre: ${book.Titre}`);
    console.log(`Auteur: ${book.Auteur}`);
    console.log(`Annee: ${book.Annee}`);
}

displayBookInfo();