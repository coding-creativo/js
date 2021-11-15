// stampare una lista della spesa

const list = [
    'pane',
    'latte',
    'birra',
    'merendina',
    'uova',
    'marmellata'
];

let items = '';

//***** soluzione con il for */
// for(let i = 0; i < list.length; i++){
 
//     items += `
//     <li>${list[i]}</li>
//     `;
// }

//***** soluzione con il while */

let i = 0;

while(i < list.length) {
    items += `
        <li>${list[i]}</li>
        `;
    i++; 
}


console.log(items);

document.getElementById('shop-list').innerHTML = items;



