// This is where we're going to get all of our input information from.

let inputDirection = { x: 0, y: 0 }
let lastInputDirection = { x: 0, y: 0 }


// Here we can actually set up the code for modifying this input direction
// whenever we click a key

window.addEventListener('keydown', e => {
    switch(e.key){
        case 'ArrowUp':
            // Make sure we can't actually move from up to down or from
            // left to right 1/2
            if(lastInputDirection.y !== 0) break
            inputDirection = { x: 0, y: -1 }
            break;
        case 'ArrowDown':
            if(lastInputDirection.y !== 0) break
            inputDirection = { x: 0, y: 1 }
            break;
        case 'ArrowLeft':
            if(lastInputDirection.x !== 0) break
            inputDirection = { x: -1, y: 0 }
            break;
        case 'ArrowRight':
            if(lastInputDirection.x !== 0) break
            inputDirection = { x: 1, y: 0 }
            break;
    }
})

export function getInputDirection(){
    // Make sure we can't actually move from up to down or from
    // left to right 2/2
    lastInputDirection = inputDirection
    return inputDirection
}