/*-------------------------------DASHBOARD-------------------------------*/


/*---------------------TIMER---------------------*/


/*---------------------RESET BUTTON---------------------*/


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
const hard = new difficultyParams(16, 30, 99)

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
    })
    
}


/*-----------DIFFICULTY = CHOSEN-----------*/
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


/*---------------------MINES LEFT---------------------*/
//mines - flags








/*-------------------------------GAME BOARD-------------------------------*/

const board = document.querySelector('#board')

/*---------------------GENERATE BOARD---------------------*/


/*---------------------POPULATE MINES---------------------*/


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





