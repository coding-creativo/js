// ***** esempio 1 - funzione somma

function sum(num1,num2){
    return num1 + num2;

    // equivale a usare una variabile
    // let risultato = num1 + num2;
    // return risultato;
}

const somma = sum(6,7);
console.log(somma);

const x = parseInt(prompt('inserisci un numero'));
const y = parseInt(prompt('inserisci un numero'));

const somma2 = sum(x,y);
console.log(somma2);


//***** esempio 2 - funzione che determini se un numero è pari oppure dispari

// function isEven(number){
//     if(number % 2 == 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// function isEven(number){
//     if(number % 2 == 0) {
//         return 'pari';
//     } 
    
//     return 'dispari';
// }

// const numeroUtente = parseInt(prompt('inserisci un numero'));
// const pariDispari = isEven(numeroUtente);
// console.log(pariDispari);

// document.querySelector('.even').innerHTML = pariDispari;


//***** esempio 2 - variante

// function isEven(number){
//     if(number % 2 == 0) {
//         return true;
//     } 
    
//     return false;
// }

// const numeroUtente = parseInt(prompt('inserisci un numero'));

// let pariDispari = '';

// if(isEven(numeroUtente)) {
//     pariDispari = 'pari';
// } else {
//     pariDispari = 'dispari';
// }


// console.log(pariDispari);

// document.querySelector('.even').innerHTML = pariDispari;


//esempio 3 - dire se una mail è presente in un array utilizzando una funzione
// email = ['pippo@gmail.com',.....] 


function searchMail(array, elemento) {
    for(let i = 0; i < array.length; i++){
        if(elemento == array[i]){
            return true;
        }
    }

    return false;
}

const email = ['pippo','pluto','paperino'];
const mailUtente = prompt('inserisci una mail');

if(searchMail(email,mailUtente)) {
    console.log('mail trovata');
} else {
    console.log('mail non trovata');
}

