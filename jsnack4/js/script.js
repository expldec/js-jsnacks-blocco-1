// jsnack4. Chiedi un numero di 4 cifre all'utente
// e calcola la somma di tutte le cifre che compongono il numero.


// dichiaro una stringa vuota
let quattroCifre = "";

// uso un do-while per assicurarmi che sia un numero intero di esattamente quattro cifre
do {
    quattroCifre = prompt("inserisci un numero di 4 cifre");
    // se una di queste due condizioni è vera (per cui ho usato l'operatore OR ||), ripeti il loop.
} while (quattroCifre.length != 4 || isNaN(parseInt(quattroCifre)))

let somma = 0;

//itero l'array e sommo i suoi componenti.
for (let i = 0; i < quattroCifre.length; i++) {
    somma += parseInt(quattroCifre[i])
}

console.log(`il numero che hai scelto è ${quattroCifre}. La somma delle sue cifre (${quattroCifre.split("")}) è ${somma}.`);