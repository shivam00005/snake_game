// improting functions

import {
  update as updateSnake,
  draw as drawSnake,
  snakeSpeed,
} from "./snake.js";

import { outsidegrid } from "./grid.js";
import { getSnakeHead, snakentersection } from "./snake.js";

import { update as updateFood, draw as drawFood } from "./food.js";

let lastRenderTIme = 0; // previous position of snake
let gameOver = false; // gameOver variable
const gameBoard = document.getElementById("game-board"); // main div of html

// main function
function main(currentTime) {
  // game over popup
  if (gameOver) {
    if (confirm("You lost. press ok to restart")) {
location.reload();
    }
    return;
  }

  // request to repeat this function
  window.requestAnimationFrame(main);

  const secondSenceLastRenderv = (currentTime - lastRenderTIme) / 1000;

  // setting snake moving speed per second
  if (secondSenceLastRenderv < 1 / snakeSpeed) return;
  lastRenderTIme = currentTime;

  // calling update and draw function
  update();
  draw();
}

window.requestAnimationFrame(main);

// update function
function update() {
  updateSnake();
  updateFood();
  checkDeath();
}

// snake draw funtion
function draw() {
  gameBoard.innerHTML = " ";
  drawSnake(gameBoard); // passing main div
  drawFood(gameBoard); // passing main div
}

// game over check function
function checkDeath() {
  gameOver = outsidegrid(getSnakeHead()) || snakentersection();
}
