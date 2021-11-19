document.getElementById('play').addEventListener('click', function(){
    play();
});

function play() {
    const container = document.querySelector('.container-square'); 
    container.innerHTML = '';
    container.classList.remove('disabled');

    const levelSelected = parseInt(document.getElementById('level').value);
    // console.log(levelSelected);

    let cellsNumber, cellForSide;
    const bombsNumber = 16;  

    switch(levelSelected){
        case 1:
            cellsNumber = 100;
            // cellForSide = 10;
            // oppure
            // cellForSide = 10;
            // cellsNumber = cellForSide * cellForSide;
            // // cellForSide = 10;          
            break;
        case 2: 
            cellsNumber = 81;
            break;
        case 3: 
            cellsNumber = 49;
    }

    cellForSide = Math.sqrt(cellsNumber);
    // console.log(cellForSide);

    const bombs = generateBoms();
    console.log(bombs);

    const arrayAttemps = [];
    const attemps = cellsNumber - bombsNumber;

    function generateBoms() {
        const arrayBombs = [];

        while(arrayBombs.length < bombsNumber){
            const numeroRandom = getRndInteger(1,cellsNumber);
            if(!arrayBombs.includes(numeroRandom)) {
                arrayBombs.push(numeroRandom);
            }
        }

        // ordiniamolo
        arrayBombs.sort(function(a, b){return a-b});
        
        return arrayBombs;

    }

    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }

    generatePlayground();

    function generatePlayground() {

        const box = document.querySelector('.container-square');

        for(let i = 1; i<= cellsNumber; i++){
            const grid = createItem(i);

            grid.addEventListener('click', function() {
                if(bombs.includes(i)){
                    this.classList.add('red');
                    endGame();
                } else {
                    this.classList.add('selected');
                    arrayAttemps.push(i);
                }

                if(attemps === arrayAttemps.length){
                    console.log('hai vinto');
                }
                
            });

            // console.log(grid);
            box.appendChild(grid);
        }
        // console.log(size);        
    }

    function endGame(){
        alert('gioco finito! Numero di tentativi ' + arrayAttemps.length);
        container.classList.add('disabled');
    }

    function createItem(num) {
        const cell = document.createElement('div');
        cell.classList.add('square');
        const size = `calc(100% / ${cellForSide})`;
        cell.style.width = size;
        cell.style.height = size;

        cell.innerHTML = num;

        return cell;

    }



    //soluzione che porta dopo ad un ragionamento più complesso
    // function generatePlayground() {
    //     const size = `calc(100% / ${cellForSide})`;
    //     // console.log(size);
    
    //     let items = "";
    //     for(let i = 1; i <= cellsNumber; i++){ 
    //         const item = `
    //         <div class="square" style="width:${size};height:${size}">${i}</div>`;
    //         console.log(item);
    //         items += item;
    //     }
        
    //     console.log(items);
    
    //     const box = document.querySelector('.container-square');
    //     box.innerHTML = items;
    // }
    

    
 
}