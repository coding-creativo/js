// ***** esercizio

const ul = document.querySelector('.list');
console.log(ul);

// for (let i = 0; i < 10; i++){
//     ul.innerHTML += `<li class="box box--${i}">${i}</li>`;

// }

// oppure
for (let i = 0; i < 10; i++){
    const element = `<li class="box box--${i}">${i}</li>`;
    ul.innerHTML += element;

}

// ***** variante

// let x;

// for (let i = 0; i < 10; i++){
//     if (i % 2 == 0) {
//         x = 'pari';
//     } else {
//         x = 'dispari';
//     }
//     ul.innerHTML += `<li class="box box--${x}">${i}</li>`;

// }

// ***** ripasso backtick

const personaggio = 'quo';

console.log(
    `
    qui ${personaggio} qua
    <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia reprehenderit quis autem cupiditate dolor, vel voluptas? Omnis placeat quis autem iure maiores doloribus dicta aliquid amet! Nihil velit nostrum itaque? </p>
    `
);

document.querySelector('.testo').innerHTML = `
qui ${personaggio} qua
<p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia reprehenderit quis autem cupiditate dolor, vel voluptas? Omnis placeat quis autem iure maiores doloribus dicta aliquid amet! Nihil velit nostrum itaque? </p>
`;

