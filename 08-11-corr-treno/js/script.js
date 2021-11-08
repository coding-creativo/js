// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km) va applicato uno sconto del 20% per i minorenni va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.


//input: 
// 1) km da percorrere
// 2) età del passeggero

// operazioni:
// 1) calcolo del prezzo base: 0.21 x km da percorrere
// 2) calcolo scontistica: 
//    a) minorenne - sconto del 20%
//    b) over 65 - sconto del 40%

// output
// Prezzo finale espresso in decimale con la precisione di 2 cifre

// // input - 1)
// const km = parseFloat(prompt('Inserisci i km da percorrere'));
// // input - 2)
// const eta = parseInt(prompt('Inserisci l\'età'));
// // console.log(km + ' ' + eta);

// // operazioni - 1)
// const prezzoKm = 0.21;
// let prezzo = prezzoKm * km;
// console.log('prezzo non scontato', prezzo);

// // operazioni - 2)
// if(eta < 18){
//     // prezzo = prezzo - prezzo * 20 / 100;
//     // è equivalente a scrivere
//     // prezzo -= prezzo * 20 / 100;

//     // oppure
//     // prezzo = prezzo * 0.8;
//     // è equivalente a scrivere
//     prezzo *= 0.8;

// } else if (eta >= 65){
//     // prezzo = prezzo * 0.6;
//     prezzo *= 0.6;

// }

// console.log(prezzo);

// // output
// document.getElementById('prezzo-finale').innerHTML = 'il prezzo finale da pagare è: € ' + prezzo.toFixed(2);


// bonus
// controlliamo che i dati siano coerenti

// input - 1)
const km = parseFloat(prompt('Inserisci i km da percorrere'));
// input - 2)
const eta = parseInt(prompt('Inserisci l\'età'));
// console.log(km + ' ' + eta);

if(isNaN(km) || isNaN(eta) || eta < 3 || eta > 120) {
    alert('Attento!!!!');
} else {

// operazioni - 1)
const prezzoKm = 0.21;
let prezzo = prezzoKm * km;
console.log('prezzo non scontato', prezzo);

// operazioni - 2)
if(eta < 18){
    // prezzo = prezzo - prezzo * 20 / 100;
    // è equivalente a scrivere
    // prezzo -= prezzo * 20 / 100;

    // oppure
    // prezzo = prezzo * 0.8;
    // è equivalente a scrivere
    prezzo *= 0.8;

} else if (eta >= 65){
    // prezzo = prezzo * 0.6;
    prezzo *= 0.6;

}

console.log(prezzo);

// output
document.getElementById('prezzo-finale').innerHTML = 'il prezzo finale da pagare è: € ' + prezzo.toFixed(2);
}




