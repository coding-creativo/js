// ****** esempio 1

// let numero = 0;
// if (numero > 0){
//     console.log('numero positivo ' + numero);
// } else { //prende sia se è negativo sia se nullo
//     console.log('non positivo ' + numero);
// }

// console.log('fine');



// ****** esempio 2

// let numero = 10;

// if (numero > 0){
//     console.log('numero positivo ' + numero);
// } else if (numero < 0) { 
//     console.log('numero negativo ' + numero);
// } else {
//     console.log('numero nullo ' + numero);
// }

// console.log('fine');


// ****** esempio 3

// let numero = 10;

// if (numero == 0){ // dentro l'if per il confronto si mette il doppio =
//     console.log('numero nullo ' + numero);
// } else if (numero < 0) { 
//     console.log('numero negativo ' + numero);
// } else {
//     console.log('numero positivo ' + numero);
// }

// console.log('fine');

// ****** esempio 4

// let numero = -10;

// if (numero >= 0){
//     console.log('numero non negativo ' + numero);
// } else {
//     console.log('numero negativo ' + numero);
// }

// console.log('fine');


// ****** esempio 5

// non è la soluzione ottimale in questo caso, ma solo per far vedere gli annidamenti degli if

let numero = -10;

if (numero != 0){
    //if annidati
    if (numero > 0) {
        console.log('numero positivo ' + numero);
    } else {
        console.log('numero negativo ' + numero);
    }
    //end if annidato

} else {

    console.log('numero nullo ' + numero);

}

console.log('fine');