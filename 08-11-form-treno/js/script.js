const buttonGenera = document.getElementById('genera');

buttonGenera.addEventListener("click", function(){
    //prendiamo di input
    const nomeCognome = document.getElementById('name').value;
    console.log(nomeCognome);

    const km = document.getElementById('km').value;
    console.log(km);

    const eta = document.getElementById('eta').value;
    console.log(eta);


    //facciamo le operazioni
    
if(isNaN(km)) {
    alert('Attento!!!!');
} else {

// operazioni - 1)
const prezzoKm = 0.21;
let prezzo = prezzoKm * km;
console.log('prezzo non scontato', prezzo);

// operazioni - 2)
if(eta == 'minorenne'){
    // prezzo = prezzo - prezzo * 20 / 100;
    // è equivalente a scrivere
    // prezzo -= prezzo * 20 / 100;

    // oppure
    // prezzo = prezzo * 0.8;
    // è equivalente a scrivere
    prezzo *= 0.8;

} else if (eta == 'over65'){
    // prezzo = prezzo * 0.6;
    prezzo *= 0.6;

}

console.log(prezzo);

// output
document.getElementById('biglietto').className = 'show';
document.getElementById('nome-cognome').innerHTML = nomeCognome;
document.getElementById('km-da-percorrere').innerHTML = km;
document.getElementById('facia-eta').innerHTML = eta;

document.getElementById('prezzo-finale').innerHTML = 'il prezzo finale da pagare è: € ' + prezzo.toFixed(2);
}

});

const annulla = document.getElementById('annulla');

annulla.addEventListener("click", function(){

    document.getElementById('biglietto').className = 'hidden';
    document.getElementById('name').value = '';
    document.getElementById('km').value = '';
    document.getElementById('eta').value = '';
});