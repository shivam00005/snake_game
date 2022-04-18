import { getInputDirection } from "./input.js";

export let snakeSpeed = 5; // snake speed

const snakeBody = [{ x: 11, y: 11 }]; // snake instial postion

let newSegments = 0; // new segment for incersin =g snake lenth when eat food

// update fuction
export function update() {
  addSegment(); // callindg add segment function
  const inputDirection = getInputDirection(); //getting direction in which snakw will move
  for (let i = snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i + 1] = { ...snakeBody[i] };
  }
  // snake body directions
  snakeBody[0].x += inputDirection.x;
  snakeBody[0].y += inputDirection.y;
}

// drwing snake on board
export function draw(gameBoard) {
  snakeBody.forEach((segment) => {
    const snakeElement = document.createElement("div"); // snake element
    snakeElement.style.gridRowStart = segment.y; // fixing intial grid box of snake
    snakeElement.style.gridColumnStart = segment.x; // fixing intial grid box of snake
    snakeElement.classList.add("snake");

    gameBoard.appendChild(snakeElement); // added snake to board
  });
}

// snake expand when eat food by one
export function expandSnake(amount) {
  newSegments += amount;
}

// grabing snake head
export function getSnakeHead() {
  return snakeBody[0];
}

// fuction for checking sanke and food position {if yes = true, else false}
export function onSnake(position, { ignoredHead = false } = {}) {
  return snakeBody.some((segment, index) => {
    // geting segmeen ( x,y ) value and index of head of snake
    if (ignoredHead && index === 0) return false;
    return equalPositon(segment, position);
  });
}

// checking snake intersection
export function snakentersection() {
  return onSnake(snakeBody[0], { ignoredHead: true });
}

// food and snake are at equal postion
function equalPositon(pos1, pos2) {
  return pos1.x === pos2.x && pos1.y === pos2.y;
}

// snake size inceamenting function
function addSegment() {
  for (let i = 0; i < newSegments; i++) {
    snakeBody.push({ ...snakeBody[snakeBody.length - 1] });
  }
  newSegments = 0;
}
