

const numbers = [9,8,7];

for(let i = 0; i< numbers.length; i++){
    console.log(numbers[i]);
}

numbers.forEach((number) => {
    console.log(number);
});

//se dovesse servire l'indice
numbers.forEach((number, i) => {
    console.log(i + ' ' + number);
});


//in genere per stampare semplicemente gli elementi non si usa
numbers.forEach((number, i, array) => {
    console.log(i + ' ' + number);
    console.log(array[i]);
});


const cats = [
    {name: 'Jerry', color: 'Gray'}, 
    {name: 'Felix', color: 'Black and White'},
    {name: 'Garfield',color: 'Orange'}  
];

for(let i = 0; i < cats.length; i++){
    const gatto = cats[i];
    console.log(
        `${gatto.name} - ${gatto.color} `
    );
}

// più snello
cats.forEach((cat) => {
    console.log(
        `${cat.name} - ${cat.color}`
    );
});

// oppure si può scrivere

const stampaGatto = (cat) => {
    console.log(
        `${cat.name} - ${cat.color}`
    );
};

// const stampaGatto = function(cat) {
//     console.log(
//         `${cat.name} - ${cat.color}`
//     );
// };

cats.forEach(stampaGatto);


