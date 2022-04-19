// jsnack1. L'utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

let word1 = prompt("Inserisci una parola");
let word2 = prompt("Inserisci un'altra parola");

if (word1.length > word2.length) {
    console.log(word2, word1);
} else {
    console.log(word1, word2);
}

