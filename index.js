/*
const str ="Créez votre premier site web"
console.log("nombre de caractére " ,str.length)
*/

/*
const str = "Créez votre premier site web";
const mots = str.split(" ");
const nombreDeMots = mots.length;
console.log(nombreDeMots);
*/


var phrase = "Créez votre premier site web";
var nombreDeVoyelles = 0;
const voyelles = ['a', 'e', 'i', 'o', 'u', 'y'];

for (let i = 0; i < phrase.length; i++) {
    if (voyelles.includes(phrase[i])) {
        nombreDeVoyelles++;
    }
}

console.log("Le nombre de voyelles dans la phrase est: " + nombreDeVoyelles);




