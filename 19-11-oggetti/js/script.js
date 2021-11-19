const numero = 1;

const array = [];

const palla = {
    'colore': 'bianca e nera',
    "peso": 100,
    tipo: 'pallina da golf'
};

console.log(palla);
console.log(palla.peso);
console.log(palla.colore);
console.log(palla['colore']);

palla.peso = 200;
console.log(palla.peso);

palla.marca = 'puma';

console.log(palla);

let palleGolf = '';

for(let key in palla){
    console.log('chiave: ' + key + ' valore: ' + palla[key]);
    palleGolf += `
    <li><strong>  ${key} </strong> ${palla[key]}</li>`;
}

document.getElementById('golf').innerHTML = palleGolf;