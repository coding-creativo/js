


const numbers = [1,2,3,4];


// const nums = [];

// for(let i = 0; i < numbers.length; i++) {
//     const quadrato = numbers[i] * numbers[i];
//     nums.push(quadrato);
// }

// console.log(nums);

// lo stesso usando map
// const numbersPow = numbers.map((number) => {
//     return number * number;
// });

const numbersPow = numbers.map(number =>  number * number);

console.log(numbersPow);


const numeri = [1,6,7,4];

// const arrayPari = numeri.filter((number) => {
//     if(number % 2 == 0){
//         return true;
//     }
//     return false;
// });

const pari = number => number % 2 == 0;
const arrayPari = numeri.filter(pari);


// const filterArray = (number) => {
//     if(number % 2 == 0){
//         return true;
//     }
//     return false;
// };
// const arrayPari = numeri.filter(filterArray);



console.log(arrayPari);

