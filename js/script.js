// Chiedi all'utente il numero di chilometri che vuole percorrere
const userKm = parseInt(prompt("Quanti chilometri vuoi percorrere?"));
console.log(userKm);

// Chiedi all'utente l'età del passeggero
const userAge = parseInt(prompt("Quanti anni ha il passeggero?"));
console.log(userAge);

// Calcola il prezzo del biglietto (0,21 euro al km)

let initPrice = userKm * 0.21;
console.log(initPrice);

// Se l'età del passeggero è minore di 18 anni si applica uno sconto del 20%
// Se l'età del passeggero è maggiore di 65 anni si applica uno sconto del 40%

let userDiscount;
if (userAge < 18) {
    userDiscount = (initPrice * 20) / 100;
}
else if (userAge > 65) {
    userDiscount = (initPrice * 40) / 100;
}
else {
    userDiscount = 0;
}

console.log(userDiscount);


// Sottrai al prezzo del biglietto lo sconto da applicare

let userPrice = initPrice - userDiscount;

console.log(userPrice, typeof(userPrice));

// Approssima il costo del biglietto a due decimali

let resultPrice = userPrice;
resultPrice = resultPrice.toFixed(2);

console.log(resultPrice);

// Stampa l'output

document.getElementById('price').innerHTML = resultPrice;