import { getInputDirection } from "./input.js";

//SNAKE_SPEED controls the speed of the snake. The lowest, the slower.
export const SNAKE_SPEED = 5;

// Let's create a variable 'snakeBody' and this is going to
// be an array of XY positions because our snake essentially is just a bunch of
// different segments and these segments all are in its particular XY position on
// the grid. The very center of our grid is going to be at X = 11 and at Y = 11.

const snakeBody = [{ x: 11, y: 11}]
let newSegments = 0;

// How we get our snake moving? We're essentially just going to take the 
// position of a given segment and the segment after that is now going 
// to move into that new position.

export function update() {
    addSegments()
    const inputDirection = getInputDirection()
    for(let i = snakeBody.length - 2; i >= 0; i--){
        // We're going to take essentially our previous element (in our
        // case our last element) and we're going to set it equal to our current element in that
        // 'i' position and we need to make sure that we set this as a brand new object
        // so we're just going to spread out this object into a new object (in that way 
        // we don't have any reference problems).
        snakeBody[i + 1] = { ...snakeBody[i] }
    }

    // The last thing we have to do is update the head based on where we're moving.
    snakeBody[0].x += inputDirection.x;
    snakeBody[0].y += inputDirection.y;
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
        snakeElement.style.gridRowStart = segment.y;
        snakeElement.style.gridColumnStart = segment.x;
        // We add the blue color to our snake
        snakeElement.classList.add('snake');
        gameBoard.appendChild(snakeElement);

    })
// Let's export this two functions so we can use them on the Game.js file
// This two functions happens together every SNAKE_SPEED seconds.
}


// Let's create the expansion fuction.

export function expandSnake(amount) {
    newSegments += amount;
}

    // If our two positions are exactly the same this is going to return 
    // true and if that's the case for any of our snake positions that's what 
    // .some means. So if any part of our body equals position we pass
    // in, then onSnake is going to return true
export function onSnake(position, { ingnoreHead = false} = {}) {
    return snakeBody.some((segment, index) => {
        // if ignoreHead is true and our index is equal to zero (which means we are on the
        // head) we just want to return 'false'. We're just saying ignore the head completely.
        if (ingnoreHead && index === 0) return false;
        return equalPositions(segment, position)
    })
}

    // This is where the head of the snake is.
export function getSnakeHead() {
    return snakeBody[0];
}

    // Let's check if the snake runs into itself. 
    // Essentially the way to determine if the snake has intersected itself is by
    // determining if the head of the snake is touching any of the other body parts on
    // the snake. So we can just return onSnake, we can pass in the head of the snake "snakeBody[0" 
    // but one problem is that this is going to loop over the head of the snake so of
    // course, it's going to compare if the head of the snake is the same as the head of
    // the snake and that's going to always return true. So we want to ignore the head of the snake.
export function snakeIntersection() {
        return onSnake(snakeBody[0], { ingnoreHead: true })

}

function equalPositions(pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y
}

// Let's make sure our expandSnake is actually working so essentially 
// in our 'update' we need to take our newSegments and add them on to our snake.

function addSegments() {
    for (let i = 0; i < newSegments; i++){
        // We're just taking the very last element of our snake and
        // duplicating that onto the end of our snake.
        snakeBody.push({ ...snakeBody[snakeBody.length - 1] })
    }
    // The snake needs to stop growing.
    newSegments = 0;
}


// NOTES
// One thing that's kind of interesting: You'll notice is as Y increases, we actually move down.
// That's an important thing to realize because when we're going to input our 
// input-system we need to make sure that negative 1 for Y is moving up and
// positive 1 for Y is moving down.
// That's something that I always mess up myself.