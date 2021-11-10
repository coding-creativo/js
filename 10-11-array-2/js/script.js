
// **** esempio 1 
// popoliamo un array di numeri
// const numeri = [5,11,6,4,15];

// for (let i = 0; i < numeri.length; i++){
//     console.log(numeri[i]);
// }


// **** esempio 2
//cerchiamo un numero nell'array, se lo troviamo allora stampiamo numero trovato, altrimenti stampiamo numero non trovato(

// const numeroUtente = parseInt(prompt('Inserisci un numero'));
// console.log(numeroUtente);

// const numeri = [5,11,6,4,15];

// for (let i = 0; i < numeri.length; i++){
//     //ogni numero dell'array si deve confrontare con il numero inserito dall'utente
//     if(numeri[i] == numeroUtente) {
//         console.log('trovato');
//     } else { //è sottointeso numeri[i] != numeroUtente
//         console.log('non trovato');
//     }
// }

// questa soluzione presenta un problema


// soluzione 2 - si stampa dopo il ciclo for
const numeroUtente = parseInt(prompt('Inserisci un numero'));
console.log(numeroUtente);

const numeri = [5,11,6,4,15];

let sentinella = false;

// mettendo una seconda condizione si esce fuori dal ciclo non appena trova l'elemento
for (let i = 0; i < numeri.length; i++){
    //ogni numero dell'array si deve confrontare con il numero inserito dall'utente
    if(numeri[i] == numeroUtente) {
        sentinella = true;
    } 
}

if (sentinella) {
    console.log('trovato');
} else {
    console.log('non trovato');
}

// soluzione 3 - si stampa dopo il ciclo for e si risparmia il numero di cicli

// const numeroUtente = parseInt(prompt('Inserisci un numero'));
// console.log(numeroUtente);

// const numeri = [5,11,6,4,15];

// let sentinella = false;

// // mettendo una seconda condizione si esce fuori dal ciclo non appena trova l'elemento
// for (let i = 0; i < numeri.length && sentinella == false; i++){
//     //ogni numero dell'array si deve confrontare con il numero inserito dall'utente
//     if(numeri[i] == numeroUtente) {
//         sentinella = true;
//     } else { //è sottointeso numeri[i] != numeroUtente
//         sentinella = false;
//     }
// }

// if (sentinella) {
//     console.log('trovato');
// } else {
//     console.log('non trovato');
// }