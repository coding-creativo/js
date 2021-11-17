
const container = document.querySelector('.container');

let items = '';


// soluzione con innerHTML
// for(let i = 0; i < 64; i++){
//     items += `
//     <div class="square"></div>
//     `;
// }

// console.log(items);
// container.innerHTML = items;

// soluzione con createElement

// function addSquare() {
//     const node = document.createElement('div');
//     node.className = 'square';

//     return node;
// }

const addSquare = () => {
    const node = document.createElement('div');
    node.className = 'square';

    return node;
}

for(let i = 0; i < 64; i++){

    const divEl = addSquare();
    container.appendChild(divEl);

    // divEl.addEventListener('click', function() {
    //     console.log(this);
    //     this.classList.add('clicked-true');
    // });

    divEl.addEventListener('click', () => {
        console.log(this);
        this.classList.add('clicked-true');
   });


}

// const stringa = () => 'pippo';
// console.log(stringa());
// // function stringa(){
// //     return 'pippo';
// // }

// const isEven = (num) => num % 2 == 0;
// console.log(isEven);

// // function isEven(num){
// //     return num % 2 == 0;
// // }

