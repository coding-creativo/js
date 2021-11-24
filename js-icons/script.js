const icons = [
    {
        name: 'cat',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'crow',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'dog',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'dove',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'dragon',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'horse',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'hippo',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'fish',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'carrot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
        color: 'green'
    },
    {
        name: 'apple-alt',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
        color: 'green'
    },
    {
        name: 'lemon',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
        color: 'green'
    },
    {
        name: 'pepper-hot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
        color: 'green'
    },
    {
        name: 'user-astronaut',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
        color: 'blue'
    },
    {
        name: 'user-graduate',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
        color: 'blue'
    },
    {
        name: 'user-ninja',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
        color: 'blue'
    },
    {
        name: 'user-secret',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
        color: 'blue'
    }
];

// creaimo un array di appoggio per i type
const iconsType = [];

icons.forEach(item => {
    console.log(item.type);
    if(!iconsType.includes(item.type)){
        iconsType.push(item.type);
    }
});

console.log(iconsType);


// agganciamo option alla select
const selectElement = document.getElementById('type-filter');

iconsType.forEach(item => {
    // console.log(item);
    // <option value="animal">animal</option>
    const optionElement = document.createElement('option');
    optionElement.setAttribute('value',item);
    optionElement.innerText = item;
    console.log(optionElement);
    selectElement.append(optionElement);
});

// andiamo a filtrare i dati
selectElement.addEventListener('change', function () {
    const typeSelected = this.value;
    console.log(this.value);

    if(typeSelected != ''){
        const filteredIcons = icons.filter(icon => {
            return icon.type === typeSelected;
        });
    
        console.log(filteredIcons);
        printIcons(filteredIcons,container);
    } else {
        // se è stato selezionato all
        printIcons(icons,container);
    }    

});


const container = document.getElementById('icons-container');
// funzione per stampare le icone nell'html
printIcons(icons,container);

function printIcons(array,iconsContainer){
    let iconsContent = '';
    array.forEach(icon => {
        // console.log(icon);
        // const {family,prefix,name,color} = icon;
        iconsContent += 
        `
        <div class="box">
            <i class="${icon.family} ${icon.prefix}${icon.name}" style="color:${icon.color}"></i>
            <div class="title">${icon.name}</div>
        </div>
        `;
    
    });

    // console.log(iconsContent);
    iconsContainer.innerHTML = iconsContent;
    
}




// for(let i = 0; i < icons.length; i++){
//     console.log(icons[i]);
// }