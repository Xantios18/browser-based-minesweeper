        if(i === 0) {
            //top left
                //check right, down, right+down
            closedSquares[i + 1].click()
            closedSquares[i + difficulty.x].click()
            closedSquares[i + 1 + difficulty.x].click()            
        } else if(i === difficulty.x * (difficulty.y - 1)) {
            //botom left
                //check right, up, right+up
            closedSquares[i + 1].click()
            closedSquares[i - difficulty.x].click()
            closedSquares[i + 1 - difficulty.x].click()            
        } else if(i === difficulty.x - 1) {
            //top right
                //check left, down, left+down
            closedSquares[i - 1].click()
            closedSquares[i + difficulty.x].click()
            closedSquares[i - 1 + difficulty.x].click()            
        } else if(i === (difficulty.x * difficulty.y) - 1) {
            //botom right
                //check left, up, left+up
            closedSquares[i - 1].click()
            closedSquares[i - difficulty.x].click()
            closedSquares[i - 1 - difficulty.x].click()            
        } else if(i % difficulty.x === 0) {
            //left edge
                //check up, right, down, up+right, down+right
            closedSquares[i + 1].click()
            closedSquares[i - difficulty.x].click()
            closedSquares[i + difficulty.x].click()
            closedSquares[i + 1 - difficulty.x].click()
            closedSquares[i + 1 + difficulty.x].click()            
        } else if((i + 1) % difficulty.x === 0) {
            //right edge
                // check up, left, down, up+left, down+left
            closedSquares[i - 1].click()
            closedSquares[i - difficulty.x].click()
            closedSquares[i + difficulty.x].click()
            closedSquares[i - 1 - difficulty.x].click()
            closedSquares[i - 1 + difficulty.x].click()            
        } else if(i < difficulty.x) {
            //top edge
                //check left, right, down, left+down, right+down
            closedSquares[i + 1].click()
            closedSquares[i - 1].click()
            closedSquares[i + difficulty.x].click()
            closedSquares[i + 1 + difficulty.x].click()
            closedSquares[i - 1 + difficulty.x].click()            
        } else if(i >= difficulty.x * (difficulty.y - 1)) {
            //bottom edge
                //check left, right, up, left+up, right+up
            closedSquares[i + 1].click()
            closedSquares[i - 1].click()
            closedSquares[i - difficulty.x].click()
            closedSquares[i + 1 - difficulty.x].click()
            closedSquares[i - 1 - difficulty.x].click()            
        } else {
            //central square
                //check up, down, left, right, up+left, up+right, down+left, down+right
            closedSquares[i + 1].click()
            closedSquares[i - 1].click()
            closedSquares[i + difficulty.x].click()
            closedSquares[i - difficulty.x].click()
            closedSquares[i + 1 + difficulty.x].click()
            closedSquares[i - 1 + difficulty.x].click()
            closedSquares[i + 1 - difficulty.x].click()
            closedSquares[i - 1 - difficulty.x].click()            
        }