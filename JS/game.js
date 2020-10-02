    // Set up the game loop. The main function is gonna loop over and over again.
    // With lastRenderTime and SNAKE_SPEED we can control how fast our game is render.
import {update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection} from './snake.js'
import {update as updateFood, draw as drawFood } from './food.js'
import {outsideGrid} from './grid.js'

let lastRenderTime = 0;
let gameOver = false;
    // We create our gameBoard variable.
const gameBoard = document.getElementById('game-board');

function main(currentTime){
    if (gameOver) {
        if (confirm("You lost. Press OK to restart.")) {
            window.location = '/'
        }
        return;
    }
    window.requestAnimationFrame(main);
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;

    lastRenderTime = currentTime;

    update();
    draw();

    // This game is gonna be broken into two different steps
    // We're gonna have an 'update loop' and this loop is gonna 
    // update all of the logic for our game.
    // And we're gonna have another loop called 'draw' or 'render'
    // and this is what's actually going to draw everything on the screen
    // based on the update loop.
    // So the update loop is going to move the snake to the correct
    // position but not actually draw it. It's going to update if we ate 
    // the food or not so it's gonna make the snake longer or shorter.
    // It's also going to determine if we lost the game because we ran into
    // our own tail or ran into the edge of the screen and then in the 
    // draw, what we're gonna do is take all of the logic from update and 
    // say okay where is our snake now let's actually draw him in the 
    // correct position, let's draw the food where it needs to go..
    
}

window.requestAnimationFrame(main);

function update() {
    updateSnake();
    updateFood();
    // Let's add the game over situations.
    checkDeath();
}

    // In order to print everything, we pass in our gameBoard
function draw() {
    // When we draw our snake we aren't removing all of the previous pieces of
    // the snake. What we need to do is take our gameBoard and set the innerHTML to
    // nothing (''). This is going to clear everything in our view.
    gameBoard.innerHTML = '';
    drawSnake(gameBoard);
    // We draw our food.
    drawFood(gameBoard);
}


    // Check for failure states

function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection ()
}
