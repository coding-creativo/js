// con classList
// const elemento = document.getElementById('testo');
// elemento.classList.add('mia-classe');


// const pulsante = document.getElementById('cambiaColore');

// pulsante.addEventListener("click", function(){
//     elemento.classList.remove('mia-classe');
//     elemento.classList.add('green', 'size');
// });


// con className
// const elemento = document.getElementById('testo');
// elemento.className = 'mia-classe';


// const pulsante = document.getElementById('cambiaColore');

// pulsante.addEventListener("click", function(){
//     elemento.className = 'green size';
// });

//esempio con querySelector
const elementoRosso = document.querySelector('.red');

elementoRosso.addEventListener("click", function(){
    alert('Click sul 1');
});


//esempio con append e prepend

const par = document.getElementById('paragrafo');
par.append('ciao');
par.prepend(' -- ');