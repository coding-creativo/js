//****push

const nomi = ['pippo', 'paperino', 'pluto'];

nomi.push('paperina', 'topolino');
// nomi.push(['paperina', 'topolino'], 1);
console.log(nomi);


//****destrutturare
const studenti = ['pippo', 'paperino', 'pluto', 'paperina'];
console.log(studenti[0]); //pippo

const [studenteUno, , ,studenteQuattro] = studenti;
console.log(studenteQuattro);

//****operatore spread - esempio merge
let numeriPari = [4,6,8];
let numeriDispari = [1,3,5];

// vogliamo unire il contenuto dei 2 array - 4,6,8,1,3,5

// let numeriUniti = [numeriPari, numeriDispari];
// console.log(numeriUniti);

// si usa spread
let numeriUniti = [...numeriPari, ...numeriDispari];
console.log(numeriUniti); 


// oppure concat
let numbers = numeriPari.concat(numeriDispari);
console.log(numbers);

//****operatore spread - esempio clone
const alunni = ['pippo', 'paperino'];
console.log(alunni);

//clone
const clone = alunni;
console.log(clone);

//clone con operatore spread
var cloneBis = [...alunni];
console.log(cloneBis);