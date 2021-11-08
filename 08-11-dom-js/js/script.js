const element = document.getElementById('saluto');
console.log(typeof(element));

const reg = document.getElementById('registra');
console.log(typeof(reg));

//*************** */
//aggiungere del testo - 1 metodo
// const testo = document.getElementById('testo').innerHTML;
// console.log(testo);

// document.getElementById('testo').innerHTML = testo + ' testo nuovo';

//aggiungere del testo - 2 metodo
// document.getElementById('testo').innerHTML = document.getElementById('testo').innerHTML + ' testo nuovo';

document.getElementById('testo').innerHTML += ' testo nuovo';


//*************** */
//prende anche i tag
const paragrafo = document.getElementById('paragrafo').innerHTML;
console.log(paragrafo);