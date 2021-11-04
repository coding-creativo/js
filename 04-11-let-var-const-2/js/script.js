
// ******** esempio 1
const miaVariabile = 5;
console.log(miaVariabile);

let myVariable;

// ... tante righe dopo
myVariable = 12;
console.log(myVariable);

// ******** esempio 2
let nome;

nome = 'Pippo';
// alert(nome);
console.log(nome);

nome = 'Paperino';
// alert(nome);
console.log(nome);

// ******** esempio 3
let nameOne = 'Qui';
let nameTwo = 'Qua';

console.log(
    `
    ${nameOne} Quo ${nameTwo} 
    andarono al mercato
    `);

// ******** esempio 4
let somma = 4 + 4;
console.log(somma);

let sottrazione = somma - 3;
console.log(sottrazione);

let divisione = sottrazione / 2;
console.log(divisione);

let prodotto = somma * divisione;
console.log(prodotto);

// ******** esempio 5
const myName = prompt('Inserisci il nome');
console.log(myName);

const lastName = prompt('Inserisci il cognome');
console.log(lastName);

const saluto = 'ciao ' +  myName + ' ' + lastName;
document.getElementById('saluto').innerHTML = saluto;
console.log(saluto);

// ******** esempio 6 
// proviamo a sommare dei numeri presi dal prompt
// const firstNumber = parseInt(prompt());
// console.log(firstNumber);

// const secondNumber = prompt();
// // dopo la const non si può convertire in intero
// // const secondNumber = parseInt(secondNumber);
// console.log(secondNumber);

// let sommaNumber = firstNumber + secondNumber;
// console.log(sommaNumber);











