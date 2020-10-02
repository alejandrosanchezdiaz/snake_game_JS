// Almost a copy from snake.js

import { onSnake, expandSnake } from './snake.js'
import { randomGridPosition } from './grid.js'

let food = getRandomFoodPosition()
// The snake expands one by one. 
const EXPANSION_RATE = 1

export function update() {
    // We want to check if the snake is currently over the top of our food because
    // that means that they can eat it. 
  if (onSnake(food)) {
      expandSnake(EXPANSION_RATE)
      food = getRandomFoodPosition()
  }
}

export function draw(gameBoard) {
    const foodElement = document.createElement('div')
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food');
    gameBoard.appendChild(foodElement);
}

// Random position for our food. What this is going to do is return to us a new
// position for our food every single time it gets eaten and it's going to return a
// position that is not already on the snake. That's the most important
// characteristic of this.

function getRandomFoodPosition() {
    let newFoodPosition
    while (newFoodPosition == null || onSnake(newFoodPosition)) {
        newFoodPosition = randomGridPosition()
    }
    return newFoodPosition
}