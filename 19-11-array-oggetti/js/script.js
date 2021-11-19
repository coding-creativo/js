const classi = [
    {
        'nome': 'Classe 47',
        'numeroStudenti': 35
    },
    {
        'nome': 'Classe 87',
        'numeroStudenti': 36
    },
    {
        'nome': 'Classe 107',
        'numeroStudenti': 36
    }
];

// console.log(classi[0]);

for(let i = 0; i < classi.length; i++){
    // console.log(classi[i]);
    // console.log(classi[i].nome);
    // console.log(classi[i].numeroStudenti);

    for(let k in classi[i]){
        console.log(classi[i][k]);
    }
}