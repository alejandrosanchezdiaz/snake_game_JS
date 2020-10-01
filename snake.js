//SNAKE_SPEED controls the speed of the snake. The lowest, the slower.
export const SNAKE_SPEED = 2;

// Let's create a variable 'snakeBody' and this is going to
// be an array of XY positions because our snake essentially is just a bunch of
// different segments and these segments all are in its particular XY position on
// the grid. The very center of our grid is going to be at X = 11 and at Y = 11.

const snakeBody = [{ x: 11, y: 11}]

//Let's export this to functions so we can use them on the Game.js file
//This two functions happens together every SNAKE_SPEED seconds.
export function update() {
    console.log('update snake');
}


// Before we can start drawing our snake we need to figure out how we're going to
// represent our snake and the brilliant thing about using a grid-based system is
// that we can represent our snake as essentially an x and a y position.

// What we can do is take our snakeBody and we want to loop through each one of
// our different segments (is what we'll call essentially each piece of the
// snake we want to loop through) and I want to draw this to the screen but of
// course I need to draw it to our game board so we're gonna need our game board
// passed into this draw function so we can actually add our snake to it.

export function draw(gameBoard) {
    snakeBody.forEach(segment => {
        // This is going to be a single div and this is going to go inside of our game
        // board at a particular XY coordinates and since we're using grid we can directly
        // set that XY coordinate very easily.
        const snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = segment.x;
        snakeElement.style.gridColumnStart = segment.y;
        // We add the blue color to our snake
        snakeElement.classList.add('snake');
        gameBoard.appendChild(snakeElement);

    })
}