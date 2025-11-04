function surroundingFlags(squareList, i) {
    adjacentFlags = 0
    if(i === 0) {
        //top left
            //check right, down, right+down
        checkForFlag(squareList, i + 1)
        checkForFlag(squareList, i + difficulty.x)
        checkForFlag(squareList, i + 1 + difficulty.x)
    } else if(i === difficulty.x * (difficulty.y - 1)) {
        //botom left
            //check right, up, right+up
        checkForFlag(squareList, i + 1)
        checkForFlag(squareList, i - difficulty.x)
        checkForFlag(squareList, i + 1 - difficulty.x)
    } else if(i === difficulty.x - 1) {
        //top right
            //check left, down, left+down
        checkForFlag(squareList, i - 1)
        checkForFlag(squareList, i + difficulty.x)
        checkForFlag(squareList, i - 1 + difficulty.x)
    } else if(i === (difficulty.x * difficulty.y) - 1) {
        //botom right
            //check left, up, left+up
        checkForFlag(squareList, i - 1)
        checkForFlag(squareList, i - difficulty.x)
        checkForFlag(squareList, i - 1 - difficulty.x)
    } else if(i % difficulty.x === 0) {
        //left edge
            //check up, right, down, up+right, down+right
        checkForFlag(squareList, i + 1)
        checkForFlag(squareList, i - difficulty.x)
        checkForFlag(squareList, i + difficulty.x)
        checkForFlag(squareList, i + 1 - difficulty.x)
        checkForFlag(squareList, i + 1 + difficulty.x)
    } else if((i + 1) % difficulty.x === 0) {
        //right edge
            // check up, left, down, up+left, down+left
        checkForFlag(squareList, i - 1)
        checkForFlag(squareList, i - difficulty.x)
        checkForFlag(squareList, i + difficulty.x)
        checkForFlag(squareList, i - 1 - difficulty.x)
        checkForFlag(squareList, i - 1 + difficulty.x)
    } else if(i < difficulty.x) {
        //top edge
            //check left, right, down, left+down, right+down
        checkForFlag(squareList, i + 1)
        checkForFlag(squareList, i - 1)
        checkForFlag(squareList, i + difficulty.x)
        checkForFlag(squareList, i + 1 + difficulty.x)
        checkForFlag(squareList, i - 1 + difficulty.x)
    } else if(i >= difficulty.x * (difficulty.y - 1)) {
        //bottom edge
            //check left, right, up, left+up, right+up
        checkForFlag(squareList, i + 1)
        checkForFlag(squareList, i - 1)
        checkForFlag(squareList, i - difficulty.x)
        checkForFlag(squareList, i + 1 - difficulty.x)
        checkForFlag(squareList, i - 1 - difficulty.x)
    } else {
        //central square
            //check up, down, left, right, up+left, up+right, down+left, down+right
        checkForFlag(squareList, i + 1)
        checkForFlag(squareList, i - 1)
        checkForFlag(squareList, i + difficulty.x)
        checkForFlag(squareList, i - difficulty.x)
        checkForFlag(squareList, i + 1 + difficulty.x)
        checkForFlag(squareList, i - 1 + difficulty.x)
        checkForFlag(squareList, i + 1 - difficulty.x)
        checkForFlag(squareList, i - 1 - difficulty.x)
    }
}