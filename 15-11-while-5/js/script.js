// stampare una lista della spesa

const list = [
    'pane',
    'latte',
    'birra',
    'merendina',
    'uova',
    'marmellata'
];



//***** soluzione con il for */
for(let i = 0; i < list.length; i++){

    const listItem = document.createElement('li');
    listItem.innerText = list[i];

    console.log(listItem);

    document.getElementById('shop-list').append(listItem);
 
    // items += `
    // <li>${list[i]}</li>
    // `;
}





