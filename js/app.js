/*-------------------------------DASHBOARD-------------------------------*/


/*---------------------TIMER---------------------*/


/*---------------------RESET BUTTON---------------------*/

const resetButton = document.querySelector('#reset')
resetButton.style.background = 'blue'

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
        console.log(board.children.length)        
    }

    //try with flood fill?

    for (let i = 0; i < (difficulty.x * difficulty.y); i++) {
        const square = document.createElement('div');
        square.classList.add('square', 'closed')
        board.appendChild(square)
    }
}



/*---------------------POPULATE MINES---------------------*/

const squares = document.querySelectorAll('.square')

//not working - gotta do as flood fill anyways

// function populateMines() {
//     let minesLeft = difficulty.mines
//     for (let i = 0; i < squares.length; i++) {
//         const square = squares[i];
//         if(Math.random() < (minesLeft / (squares.length - i))) {
//             square.textContent = 'M'
//             minesLeft -= 1
//         }        
//     }
// }


/*---------------------POPULATE NUMBERS---------------------*/


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