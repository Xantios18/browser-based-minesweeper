#MINESWEEPER

I first played minesweeper on my aunt's work computer as I was waiting for her to finish up some task before she took me to the airport to go home. it was immediately super engaging, and by the time I was in college, I was casually grinding out exper level games in under 2 minutes.

minesweeper is played by revealing tiles that show how many mines are adjacent. you must then use that information to determine which tiles are mines, and clear all other spaces, leaving only mines unrevealed.

click on a tile to reveal it
right-click to mark a tile as a mine
double click on an open tile to reveal all closed tiles without a flag arround that tile. this only works if the number of flags around the tile is the same as the number of mines around it!





this itteration is a little fugly, and is missing a timer. implementing the first click breakout seen in modern minesweeper seems pretty challenging with the method I chose to generate my board, but with a bit of a rewrite, I think it should be doable.

I can also probably cut down on the verbosity a little with better defined boundary conditions

populating the numbers would have been easier with a for loop, but I had to do a flood fill for reasons. would have made more sense if I had generated the board differently.

