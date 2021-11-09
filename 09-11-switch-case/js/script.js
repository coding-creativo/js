
const calcolo = document.getElementById('calcola-data');

calcolo.addEventListener("click", function() {
    let num = document.getElementById('data').value;

    //con value il valore anche se numerico viene visto come stringa, dunque il parseInt - come con il prompt
    // num = parseInt(num);
    console.log(num);


    let text;

    switch(num) {
        case '1':
        case 1:
            text = "lunedì";
            break;
        case '2': 
            text = "martedì";
            break;
        case '3': 
            text = "mercoledì";
            break;
        case '4': 
            text = "giovedì";
            break;
        case '5': 
            text = "venerdì";
            break;
        case '6': 
            text = "sabato";
            break;
        case '7': 
            text = "domenica";
            break;
        default:
            text = "numero non valido";
    }

    document.querySelector('.data').innerHTML = text;

    console.log(text);
});



