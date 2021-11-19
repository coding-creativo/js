const classi = [
    {
        'nome': 'Classe 47',
        'numeroStudenti': 35
    },
    {
        'nome': 'Classe 147',
        'numeroStudenti': 55
    },
    {
        'nome': 'Classe 247',
        'numeroStudenti': 65
    },
];

classi.push(5);
console.log(classi);

classi.push(['pippo', 'paperino']);
console.log(classi);

const newClasse = {
    'nome': 'Classe 360',
    'numeroStudenti': 90
};

classi.push(newClasse);

console.log(classi);

const nome = prompt('inserisci il nome della classe');
const numeroStd = parseInt(prompt('inserisci il numero studenti'));

const nuovaClasse = {
    'nome': nome,
    'numeroStudenti': numeroStd
};

classi.push(nuovaClasse);
console.log(classi);