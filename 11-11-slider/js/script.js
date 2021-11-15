// 1 passo: creiamo l'array
const imagesArray = [
    'img/01.jpg', //indice 0
    'img/02.jpg', //indice 1
    'img/03.jpg', //indice 2
    'img/04.jpg', //indice 3
    'img/05.jpg'  //indice 4
];


// 2 passo: generiamo gli elementi da inserire nell'html
let items = '';

for (let i = 0; i < imagesArray.length; i++){
    items += `
    <div class="item">
        <img src="${imagesArray[i]}" alt="${imagesArray[i]}">
    </div>
    `;
}

console.log(items);

// 3 passo: inseriamo questi elementi nella posizione desiderata
const itemsContainer = document.querySelector('.items-container');
itemsContainer.innerHTML = items;

//4 passo: selezioniamo tutti gli item per rendere il primo attivo
const item = document.getElementsByClassName('item');
console.log(item[0]);
let activeItem = 0;
item[activeItem].classList.add('active');

//per i pallini facciamo lo stesso
const circle = document.getElementsByClassName('circle');
console.log(circle);

//5 passo: attiviamo i pulsanti per scorrere le immagini

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

next.addEventListener("click", function(){

    //la lunghezza di imagesArray è 5

        //rimuovere la classe active all'elemento
        item[activeItem].classList.remove('active');
        circle[activeItem].classList.remove('active');

        // incrementare il contatore per l'active
        if(activeItem === imagesArray.length - 1) {
            activeItem = 0;
        } else {
            activeItem++;
        }
        
        //diamo l'active all'elemento successivo
        item[activeItem].classList.add('active');
        circle[activeItem].classList.add('active');
  

    // ... continuare per generare il loop

    // console.log(activeItem);

});



prev.addEventListener("click", function(){

        // togliere active all'elemento corrente
        item[activeItem].classList.remove('active');
        circle[activeItem].classList.remove('active');

        // decrementare l'indice per determinare l'active
        if (activeItem === 0) {
            activeItem = imagesArray.length -1;
        } else {
            activeItem--;
        }        

        // aggiungere l'active all'elemento decrementato
        item[activeItem].classList.add('active');
        circle[activeItem].classList.add('active');

    // ... continuare per generare il loop
    

});








