function myFunction(a,b,...myArguments) {
    // a = 4;
    console.log(a);
    console.log(b);
    console.log(myArguments);
}
       
myFunction(7,6,'uno', 3, {name: 'pippo'});

myFunction(7,6,'pippo');

const palla = {
    name: 'palla da tennis',
    color: 'verde'
};

// palla.peso = 300;

const pallaCopia = {...palla, peso: 300};
console.log(pallaCopia);
