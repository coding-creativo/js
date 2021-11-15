// vogliamo inserire solo numeri positivi
let number = parseInt(prompt('Inserisci un numero'));
console.log(number);

// // se il number è positivo non deve fare nulla
// // se è number è negativo oppure nullo allora deve richiedere il numero

// // controllo dell'input
while (number <= 0){
    number = parseInt(prompt('Attenzione, devi inserire un numero positivo'));
    console.log(number);
}

// console.log('ciao');


// ********* soluzione con il do while
// vogliamo inserire solo numeri positivi, se negativo lo deve richiedere

// let number;

// do {

//     number = parseInt(prompt('Attenzione! Inserisci un numero'));
//     console.log(number);

// } while(number <= 0);


// console.log('ciao');