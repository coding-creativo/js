


// //esempio 1 con and
// // let x = 3, y = 4;
// let x = parseInt(prompt('Inserisci un numero positivo'));
// let y = parseInt(prompt('Inserisci un numero positivo'));


// // se entrambi positivi stampare sono entrambi positivi altrimenti non sono entrambi positivi 
// if (x > 0 && y > 0) {
//     document.getElementById('numeri').innerHTML = 'sono entrambi positivi';
//     console.log('entrambi positivi');
// } else {
//     document.getElementById('numeri').innerHTML = 'non sono entrambi positivi';
//     console.log('non entrambi positivi');
// }

//esempio 2 con or

// let x = parseInt(prompt('Inserisci un numero positivo'));
// let y = parseInt(prompt('Inserisci un numero positivo'));


// // se almeno uno dei due è positivo stampare ok altrimenti no
// if (x > 0 || y > 0) {
//     document.getElementById('numeri').innerHTML = 'ok';
//     console.log('ok');
// } else {
//     document.getElementById('numeri').innerHTML = 'no';
//     console.log('no');
// }

//esempio 3 con not

// const a = 3;
// const b = 5;

// if (a <= b) {
//     console.log('a è minore o uguale di b');
// }

// // se voglio usare not si traduce in
// if (!(a > b)) {
//     console.log('a è minore o uguale di b');
// }

//esempio 4 con not

const a = 3;
const b = 5;

if (a < b) {
    console.log('a è minore di b ' + a + ' ' + b);
} else {
    console.log('a non è minore di b ' + a + ' ' + b);
}

// se voglio usare not si traduce in

if (!(a >= b)) {
    console.log('a è minore di b ' + a + ' ' + b);
} else {
    console.log('a non è minore di b ' + a + ' ' + b);
}




