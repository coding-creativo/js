// const nomi = ['pippo', 'pluto', 'paperino'];

// //con il for
// for(let i = 0; i < nomi.length; i++){
//     console.log(nomi[i]);
// }

//con il while
// let i = 0;

// while(i < nomi.length){
//     console.log(nomi[i]);

//     //non dimentichiamo di incrementare
//     i++;
// }

// trovato una mail nell'array e appena trova la mail stampare email trovata oppure non trovata
// const mail = ['pippo@gmail.com','pluto@gmail.com','paperino@gmail.com'];
// const mailUtente = prompt('Inserisci una mail');

// prima soluzione nella quale scorre tutto l'array
// let sentinella = false;

// for(let i = 0; i < mail.length; i++){
//     if(mailUtente == mail[i]){
//         sentinella = true;
//     }
//     console.log(i);
// }

// if(sentinella){
//     console.log('trovata');
// } else {
//     console.log('non trovata');
// }


// seconda  soluzione nella quale appena trova l'elemento esce fuori

// let sentinella = false;

// for(let i = 0; i < mail.length && sentinella == false; i++){
//     if(mailUtente == mail[i]){
//         sentinella = true;
//     }
//     console.log(i);
// }

// if(sentinella){
//     console.log('trovata');
// } else {
//     console.log('non trovata');
// }

// Soluzione con il while

const mail = ['pippo@gmail.com','pluto@gmail.com','paperino@gmail.com'];
const mailUtente = prompt('Inserisci una mail');

let sentinella = false;

let i = 0;

while(i < mail.length && sentinella == false){

    if(mailUtente == mail[i]){
        sentinella = true;
    }
    i++;
}

if(sentinella){
    console.log('trovata');
} else {
    console.log('non trovata');
}
