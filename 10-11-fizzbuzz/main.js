/*
 * Fizz Buzz test: 
 * Scrivi un programma che esegua un ciclo da 1 a 100 e a ogni iterazione 
 * appenda un elemento html al container con uno stile differente 
 * a seconda del valore dell'indice per i multipli di 3, per i multipli di 5 
 * e per i valori che sono sia multipli di 3 che di 5.
 * 
*/


// 1 soluzione
// const container = document.getElementById('container');

// for (let i = 1; i <= 100; i++){
//     if (i % 15 == 0) {
//         let text = 'fizzbuzz';
//         container.innerHTML += `<div class="box box--${text}">${text}</div>`;
//         console.log(text);
//     } else if (i % 3 == 0) {
//         let text = 'fizz';
//         container.innerHTML += `<div class="box box--${text}">${text}</div>`;
//         console.log(text);
//     } else if (i % 5 == 0){
//         let text = 'buzz';
//         container.innerHTML += `<div class="box box--${text}">${text}</div>`;
//         console.log(text);
//     } else {
//         let text = i;
//         container.innerHTML += `<div class="box box--${text}">${text}</div>`;
//         console.log(text);
//     }

// }

// 2 soluzione + snella
// const container = document.getElementById('container');

// for (let i = 1; i <= 100; i++){
//     let text;

//     if (i % 15 == 0) {
//         text = 'fizzbuzz';
//     } else if (i % 3 == 0) {
//         text = 'fizz';
//     } else if (i % 5 == 0){
//         text = 'buzz';
//     } else {
//         text = i;
//     }

//    andrebbe fatto magari un if dove verifico se text è un numero non aggiungo la classe box-- altrimenti la aggiungo

//     container.innerHTML += `<div class="box box--${text}">${text}</div>`;
//     console.log(text);

// }



// 3 soluzione con append
const container = document.getElementById('container');

for (let i = 1; i <= 100; i++){
    let text = '';

    if (i % 15 == 0) {
        text = 'fizzbuzz';
    } else if (i % 3 == 0) {
        text = 'fizz';
    } else if (i % 5 == 0){
        text = 'buzz';
    } else {
        text = i;
    }

    // prima preparo l'elemento

    let elemento = document.createElement("div");
    elemento.className = `box box--${text}`; // <div class="box box--${text}"></div>
    elemento.innerHTML = text; // <div class="box box--${text}">${text}</div>

    // dopo aver finito di costruirlo lo aggiungo
    container.append(elemento);

    console.log(text);

}

