
// **** esempio 1 
// const nomi = ["pippo", "pluto", "paperino"];
// console.log('stampa tutto l\'array' + nomi);

// // non è molto utile stamparlo in questo modo
// document.getElementById('nomi').innerHTML = nomi;

// **** esempio 2
// const nomi = ["pippo", "pluto", "paperino"];
// console.log(nomi[0]);
// console.log(nomi[1]);
// console.log(nomi[2]);
// console.log(nomi[3]); //mi restituisce undefined perchè non c'è

// document.getElementById('first').innerHTML = nomi[0];
// document.getElementById('second').innerHTML = nomi[1];

// **** esempio 3

// calcoliamo la lunghezza dell'array

// const nomi = ["pippo", "pluto", "paperino"];

// let ln = nomi.length; //3
// console.log('lunghezza array ' + ln);

// const container = document.querySelector('.container');

// for (let i = 0; i < ln; i++){
//     container.innerHTML += `<div>elemento: indice ${i} - valore ${nomi[i]}</div>`;
//     console.log('l\'elemento di indice ' + i + ' é ' + nomi[i]);
// }

// oppure
// const nomi = ["pippo", "pluto", "paperino"];
// const container = document.querySelector('.container');

// for (let i = 0; i < nomi.length; i++){
//     container.innerHTML += `<div>elemento: indice ${i} - valore ${nomi[i]}</div>`;
//     console.log('l\'elemento di indice ' + i + ' é ' + nomi[i]);
// }


// **** esempio 4 - stampiamo l'array al contrario
const nomi = ["pippo", "pluto", "paperino"];

for (let i = nomi.length - 1; i >= 0; i--){
    console.log('l\'elemento di indice ' + i + ' é ' + nomi[i]);
}

