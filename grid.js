const Grid_Size = 21; // grid size of board

// get random postion for food
export function randomGridPostion() {
  return {
    x: Math.floor(Math.random() * Grid_Size) + 1,
    y: Math.floor(Math.random() * Grid_Size) + 1,
  };
}

// checking head of a snake is out side the board
export function outsidegrid(position) {
  return (
    position.x < 1 ||
    position.x > Grid_Size ||
    position.y < 1 ||
    position.y > Grid_Size
  );
}
