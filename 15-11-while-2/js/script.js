//inserire 5 elementi in un array vuoto

// array vuoto
const numbers = [];


// con il ciclo for
// for (let i = 0; i < 5; i++){
//     const number = Math.floor(Math.random() * 10) + 1;
//     numbers.push(number);
// }

// console.log(numbers);

// con il while

// let i = 0;

// while(i < 5){
//     const number = Math.floor(Math.random() * 10) + 1;
//     numbers.push(number);
//     i++;  
// }

// console.log(numbers);

// usare il while senza contatore

while (numbers.length < 5){
    const number = Math.floor(Math.random() * 10) + 1;
    numbers.push(number);
}

console.log(numbers);