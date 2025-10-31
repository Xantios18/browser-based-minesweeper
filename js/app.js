/*-------------------------------DASHBOARD-------------------------------*/


/*---------------------TIMER---------------------*/


/*---------------------RESET BUTTON---------------------*/

const resetButton = document.querySelector('#reset')


/*---------------------DIFFICULTY---------------------*/

class difficultyParams {
    constructor(x, y, mines) {
        this.x = x
        this.y = y
        this.mines = mines
    }
}

const easy = new difficultyParams(9, 9, 10)
const medium = new difficultyParams(16, 16, 40)
const hard = new difficultyParams(30, 16, 99)

let difficulty = easy

/*-----------ONLY 1 DIFFICULTY AT A TIME-----------*/
const chosenDifficulties = document.querySelectorAll('input[type="checkbox"][name="chosen-difficulty"]')

for (let i = 0; i < chosenDifficulties.length; i++) {
    const chosenDifficulty = chosenDifficulties[i];
    chosenDifficulty.addEventListener('click', (event) => {
        if(event.target.checked === true) {
            for (let j = 0; j < chosenDifficulties.length; j++) {
                const chosenDifficulty = chosenDifficulties[j];
                if(chosenDifficulty.id === event.target.id) {
                    chosenDifficulty.checked = true
                } else {
                    chosenDifficulty.checked = false
                }            
            }
        choseDifficulty()
        generateBoard()
        populateMines()

        } else {
            event.target.checked = true
        }
    })
    
}


/*-----------DIFFICULTY = CHOSEN-----------*/
function choseDifficulty() {
    for (let i = 0; i < chosenDifficulties.length; i++) {
        const chosenDifficulty = chosenDifficulties[i];
        if(chosenDifficulty.checked) {
            if(chosenDifficulty.id === 'easy') {
                difficulty = easy
            } else if(chosenDifficulty.id === 'medium') {
                difficulty = medium
            } else if(chosenDifficulty.id === 'hard') {
                difficulty = hard
            } 
        }    
    }
}

/*---------------------MINES LEFT---------------------*/
//mines - flags








/*-------------------------------GAME BOARD-------------------------------*/

const board = document.querySelector('#board')

/*---------------------GENERATE BOARD---------------------*/
function generateBoard() {

    board.style.gridTemplateColumns = `repeat(${difficulty.x}, 30px)`
    board.style.gridTemplateRows = `repeat(${difficulty.y}, 30px)`

    while(board.children.length > 0) {
        board.children[0].remove()               
    }


    for (let i = 0; i < (difficulty.x * difficulty.y); i++) {
        const square = document.createElement('div');
        square.classList.add('square', 'closed')
        // square.textContent = i
        board.appendChild(square)
    }
}



/*---------------------POPULATE MINES---------------------*/


function populateMines() {
    const squares = document.querySelectorAll('.square')
    let minesLeft = difficulty.mines

    for (let i = 0; i < squares.length; i++) {
        const square = squares[i];
        if(Math.random() < (minesLeft / (squares.length - i))) {
            square.textContent = 'M'
            minesLeft -= 1            
        }        
    }
}


/*---------------------POPULATE NUMBERS---------------------*/

//NAVIGATING GRID BASED ON SQUARES[i]
    //right = + 1
        //can't go any further right if (i + 1) % x === 0
    //left = - 1
        //can't go any further left if i % x === 0
    //down = + x
        //can't go any further down if i >= (x * (y - 1))
    //up = - x
        //can't go any further up if i < x

function populateNumbers() {
    const squares = document.querySelectorAll('.square')
    let adjacentMines;
    for (let j = 0; j < squares.length; j++) {
        const square = squares[j];
        if(squares[j].textContent !== 'M') {
            adjacentMines = 0
            checkForMine(j)
            assignNumber(j)
        }
        
    }
    function checkForMine(i) {        

        if(squares[i].textContent === 'M') {
            adjacentMines ++
        }


        /*----------BOUNDARY CONDITIONS----------*/
        if(i === 0) {
            //top left
                //check right, down, right+down
            checkForMine(i + 1)
            checkForMine(i + difficulty.x)
            checkForMine(i + 1 + difficulty.x)
        } else if(i === document.x * (document.y - 1)) {
            //botom left
                //check right, up, right+up
            checkForMine(i + 1)
            checkForMine(i - difficulty.x)
            checkForMine(i + 1 - difficulty.x)
        } else if(i === document.x - 1) {
            //top right
                //check left, down, left+down
            checkForMine(i - 1)
            checkForMine(i + difficulty.x)
            checkForMine(i - 1 + difficulty.x)
        } else if(i === (document.x * document.y) - 1) {
            //botom right
                //check left, up, left+up
            checkForMine(i - 1)
            checkForMine(i - difficulty.x)
            checkForMine(i - 1 - difficulty.x)
        } else if(i % document.x === 0) {
            //left edge
                //check up, right, down, up+right, down+right
            checkForMine(i + 1)
            checkForMine(i - difficulty.x)
            checkForMine(i + difficulty.x)
            checkForMine(i + 1 - difficulty.x)
            checkForMine(i + 1 + difficulty.x)
        } else if((i + 1) % document.x === 0) {
            //right edge
                // check up, left, down, up+left, down+left
            checkForMine(i - 1)
            checkForMine(i - difficulty.x)
            checkForMine(i + difficulty.x)
            checkForMine(i - 1 - difficulty.x)
            checkForMine(i - 1 + difficulty.x)
        } else if(i < document.x) {
            //top edge
                //check left, right, down, left+down, right+down
            checkForMine(i + 1)
            checkForMine(i - 1)
            checkForMine(i + difficulty.x)
            checkForMine(i + 1 + difficulty.x)
            checkForMine(i - 1 + difficulty.x)
        } else if(i >= document.x * (document.y - 1)) {
            //bottom edge
                //check left, right, up, left+up, right+up
            checkForMine(i + 1)
            checkForMine(i - 1)
            checkForMine(i - difficulty.x)
            checkForMine(i + 1 - difficulty.x)
            checkForMine(i - 1 - difficulty.x)
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
        }
    }
    /*----------ACTUAL FUNCTION----------*/
    
    // function checkForMine(j) {
    //     if(squares[j].textContent === 'M') {
    //         adjacentMines ++
    //     }
    // }
    
    function assignNumber(i) {
        squares[i].classList.add(`${adjacentMines}`)
        squares[i].textContent = adjacentMines
        console.log(squares[i].textContent)
    }


    /*----------RECURSION----------*/
    // populateNumbers(i + 1)
    // populateNumbers(i - 1)
    // populateNumbers(i + difficulty.x)
    // populateNumbers(i - difficulty.x)
}

/*---------------------CHECK FOR VICTORY---------------------*/






/*-------------------------------GAMEPLAY-------------------------------*/


/*---------------------LEFT CLICK---------------------*/


/*-----------OPEN 0-----------*/


/*-----------OPEN MINE-----------*/


/*-----------OPEN NUMBER-----------*/




/*---------------------RIGHT CLICK---------------------*/


/*-----------(IN/DE)CRIMENT MINES LEFT-----------*/

 
/*-----------PLACE/REMOVE FLAG-----------*/




/*---------------------LEFT+RIGHT CLICK---------------------*/


/*-----------CHECK FOR FLAGS-----------*/


/*-----------OPEN ALL UNFLAGGED ADJACENT SPACES-----------*/





generateBoard()
populateMines()
populateNumbers()