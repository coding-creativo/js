// Chiedere N all'utente, generare n array con 10 elementi random e stamparli

// const n = parseInt(prompt('inserisci il numero di array che vuoi generare'));

// for(let i = 0; i < n; i++){
//     console.log(i);

//     let arrayNumber = [];
//     for(let k = 0; k <10; k++) {
//         // console.log('i vale: ' + i + ' k vale: ' + k);
//         const randomNumber = getRandomNumber(100,1000); //invocazione della funzione
//         arrayNumber.push(randomNumber);
//     }

//     console.log(arrayNumber);

// }


// function getRandomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) ) + min;
// }

//**** variazione esercizi */


for(let i = 0; i < getRandomNumber(1,5); i++){
    console.log(i);

    let arrayNumber = [];
    for(let k = 0; k <10; k++) {
        // console.log('i vale: ' + i + ' k vale: ' + k);
        const randomNumber = getRandomNumber(100,1000); //invocazione della funzione
        arrayNumber.push(randomNumber);
    }

    console.log(arrayNumber);

}

//** funzioni */

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}