//******* assegnare un valore

let x = 5;

//******* confrontare due grandezze

if(x == 5){ //il doppio uguale in questo caso equivale a scrivere x è uguale a 5 in forma umana
    //scrivo il codice
}

let frase = 'ciao';

if (frase == 'ciao') {
    //scrivo codice qui
}


// ****** esempio 1

let numero = 13456147;

// operatore modulo % è il resto della divisione
// Nel caso dei numeri pari abbiamo solo 2 resti o 0 oppure 1

// ad esempio
// 10 % 2 = il resto della divisone di 10 / 2 

// 16 : 2 = 8  resto 0 - divisione intera
// 8 : 2 = 4   resto 0 - divisione intera

// 7 : 2 = 3 resto 1 - divisione non intera
// 5 : 2 = 2 resto 1 - divisione non intera

console.log('resto della divisiore ' + numero % 2);
console.log('risultato della divisone ' + numero / 2);


// se numero % 2 è zero allora il numero è pari, 
// altrimenti è dispari


if(numero % 2 == 0) {
    console.log('numero pari');
} else {
    console.log('numero dispari');
}


// non si fa
// if(numero % 2 == 1) {
//     console.log('numero dispari');
// } else {
//     console.log('numero pari');
// }

// meglio scrivere così
if(numero % 2 != 0) {
    console.log('numero dispari');
} else {
    console.log('numero pari');
}

