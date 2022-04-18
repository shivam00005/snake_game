import { onSnake, expandSnake } from "./snake.js";
import { randomGridPostion } from "./grid.js";

let food = getRandomFoodPosition();

const Expenstion_Rate = 1;

// funtion to update amunt of snake size increase and placing food at different initially
export function update() {
  if (onSnake(food)) {
    expandSnake(Expenstion_Rate);
    food = getRandomFoodPosition();
  }
}

// drawing food on board
export function draw(gameBoard) {
  const foodElement = document.createElement("div");
  foodElement.style.gridRowStart = food.y; //setting food position co-ordinate
  foodElement.style.gridColumnStart = food.x; // setting food postion co-ordianate
  foodElement.classList.add("food");

  gameBoard.appendChild(foodElement);
}

// food random postion function
function getRandomFoodPosition() {
  let newfoodPosition;
  while (newfoodPosition == null || onSnake(newfoodPosition)) {
    // checking for new food position expect postion occupied by snake
    newfoodPosition = randomGridPostion();
  }
  return newfoodPosition;
}
