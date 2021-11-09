// ******* Esercizio 1

// stampiamo i numeri pari da 0 a 100

// prima soluzione
// for(let i = 0; i <= 100; i++){
//     if(i % 2 == 0){
//         console.log(i);
//     }
// }

// seconda soluzione
// i = i + 2 equivale a scrivere i +=2
for(let i = 0; i <= 100; i += 2){
    console.log(i);
}


// ******* Esercizio 2

// se il numero è pari stampare che è pari, altrimenti stampare dispari

for (let i = 0; i <= 100; i++){
    if(i % 2 == 0) {
        console.log(i + ' - numero pari');
    } else {
        console.log(i + ' - numero dispari');
    }
}

// ******* Esercizio 3

// stampare i numeri dispari da 1 a 99
for (let i = 1; i < 100; i += 2){
    console.log(i);
}


// ******* Esercizio 4
// stampare i multipli di 3
for (let i = 0; i <= 100; i++){
    if(i % 3 == 0) {
        console.log(i + ' - multiplo di 3');
    } else {
        console.log(i + ' - non multiplo di 3');
    }
}

// oppure 
let risultato; 

for (let i = 0; i <= 100; i++){
    risultato = i + ' - non multiplo di 3';

    if(i % 3 == 0) {
        risultato = i + ' - multiplo di 3';
    } 

}

console.log(risultato);

// oppure quando mi serve stampare solo i multipli di 3
for (let i = 0; i <= 100; i += 3){
    console.log(i);
}