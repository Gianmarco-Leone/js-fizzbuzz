// TRACCIA
//
// Scrivi un programma che stampi in console i numeri da 1 a 100,
// ma che per i multipli di 3 stampi in console "Fizz" al posto del numero e  per i multipli di 5 stampi "Buzz".
// Per i numeri che sono sia multipli di 3 che di 5 stampi in console "FizzBuzz".
//
// BONUS 1:
// Crea un container nel DOM, aggiungendo(attraverso la funzione`append()`) un elemento html con il numero o la stringa corretta da mostrare.
//
//     BONUS 2:
// Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.


// SVOLGIMENTO:
const listEl = document.getElementById("list");
// CREARE CICLO CON NUMERI DA 1 A 100
// DENTRO IL CICLO DEVO GENERARE NUMERI DA 1 A 100
for (let i = 1; i <= 100; i++) {
    // STAMPO NUMERI IN CONSOLE
    let myNumber = i;

    // SE n MULTIPLO SIA DI 3 CHE DI 5 STAMPO "FIZZBUZZ" AL POSTO DI n
    if (i % 15 == 0) {
        myNumber = "FizzBuzz";
        console.log(myNumber);

        // SE n MULTIPLO DI 5 STAMPO "BUZZ" AL POSTO DI n
    } else if (i % 5 == 0) {
        myNumber = "Buzz";
        console.log(myNumber);

        // SE n MULTIPLO DI 3 STAMPO "FIZZ" AL POSTO DEL n
    } else if (i % 3 == 0) {
        myNumber = "Fizz";
        console.log(myNumber);

    } else {
        console.log(myNumber);
    }

};