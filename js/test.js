function populateNumbers(i) {
    const squares = document.querySelectorAll('.square')
    let adjacentMines = 0

    if(i < 0 || i >= difficulty.x * difficulty.y){
        return
    } 

    // for (let j = 0; j < squares.length; j++) {
    //     const square = squares[j];
    //     if(squares[j].classList.contains('mine') === false) {
    //         adjacentMines = 0
    //         checkForMine(j)
    //         assignNumber(j)
    //     }
        
    // }
    // function checkForMine(i) {        
    //     // console.dir(squares[i])

    //     if(squares[i].classList.contains('mine')) {
    //         adjacentMines ++
    //     }


        /*----------BOUNDARY CONDITIONS----------*/
        if(i === 0) {
            //top left
                //check right, down, right+down
            checkForMine(i + 1)
            checkForMine(i + difficulty.x)
            checkForMine(i + 1 + difficulty.x)
            assignNumber(i)
        } else if(i === difficulty.x * (difficulty.y - 1)) {
            //botom left
                //check right, up, right+up
            checkForMine(i + 1)
            checkForMine(i - difficulty.x)
            checkForMine(i + 1 - difficulty.x)
            assignNumber(i)
        } else if(i === difficulty.x - 1) {
            //top right
                //check left, down, left+down
            checkForMine(i - 1)
            checkForMine(i + difficulty.x)
            checkForMine(i - 1 + difficulty.x)
            assignNumber(i)
        } else if(i === (difficulty.x * difficulty.y) - 1) {
            //botom right
                //check left, up, left+up
            checkForMine(i - 1)
            checkForMine(i - difficulty.x)
            checkForMine(i - 1 - difficulty.x)
            assignNumber(i)
        } else if(i % difficulty.x === 0) {
            //left edge
                //check up, right, down, up+right, down+right
            checkForMine(i + 1)
            checkForMine(i - difficulty.x)
            checkForMine(i + difficulty.x)
            checkForMine(i + 1 - difficulty.x)
            checkForMine(i + 1 + difficulty.x)
            assignNumber(i)
        } else if((i + 1) % difficulty.x === 0) {
            //right edge
                // check up, left, down, up+left, down+left
            checkForMine(i - 1)
            checkForMine(i - difficulty.x)
            checkForMine(i + difficulty.x)
            checkForMine(i - 1 - difficulty.x)
            checkForMine(i - 1 + difficulty.x)
            assignNumber(i)
        } else if(i < difficulty.x) {
            //top edge
                //check left, right, down, left+down, right+down
            checkForMine(i + 1)
            checkForMine(i - 1)
            checkForMine(i + difficulty.x)
            checkForMine(i + 1 + difficulty.x)
            checkForMine(i - 1 + difficulty.x)
            assignNumber(i)
        } else if(i >= difficulty.x * (difficulty.y - 1)) {
            //bottom edge
                //check left, right, up, left+up, right+up
            checkForMine(i + 1)
            checkForMine(i - 1)
            checkForMine(i - difficulty.x)
            checkForMine(i + 1 - difficulty.x)
            checkForMine(i - 1 - difficulty.x)
            assignNumber(i)
        } else {
            //central square
                //check up, down, left, right, up+left, up+right, down+left, down+right
            checkForMine(i + 1)
            checkForMine(i - 1)
            checkForMine(i + difficulty.x)
            checkForMine(i - difficulty.x)
            checkForMine(i + 1 + difficulty.x)
            checkForMine(i - 1 + difficulty.x)
            checkForMine(i + 1 - difficulty.x)
            checkForMine(i - 1 - difficulty.x)
            assignNumber(i)
        }
    // }
    /*----------ACTUAL FUNCTION----------*/
    
    function checkForMine(j) {
        if(squares[j].classList.constains('mine')) {
            adjacentMines ++
        }
    }
    
    function assignNumber(k) {
        squares[k].classList.add(`${adjacentMines}`)
        squares[k].textContent = adjacentMines
        // console.log(squares[i].textContent)
    }


    /*----------RECURSION----------*/
    if()
    populateNumbers(i + 1)
    populateNumbers(i - 1)
    populateNumbers(i + difficulty.x)
    populateNumbers(i - difficulty.x)
}
