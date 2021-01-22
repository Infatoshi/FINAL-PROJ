// Global Variables
let player = newPlayer(380, -270, 40, 40, "blue", 4, 37, 39, 38);
let walls = [];

let score = 0;
let lives = 3;
let frameCount = 0;
// let timer = 0;
let invincibility = false;
let playerTouchingFloor = false;


document.getElementById('printLives').innerHTML = lives;

initWalls(walls);




// Set Canvas Size
canvasSize(800, 600);

// Main Draw Loop
requestAnimationFrame(draw);

function draw() {
  // LOGIC
  movePlayer(player);
  moveWalls(walls);
  checkWallCollision(player, walls);
  checkSideCollision1(player);
  
  changeSpeed(score);
  frameCount++;

  if (frameCount > 50) {

    frameCount = 0;
    countScore();

  }

  // DRAWING
  background("black");
  drawPlayer(player);
  drawWalls(walls);


  requestAnimationFrame(draw);
}



function countScore() {
  score += 1;
  document.getElementById('printScore').innerHTML = score;
}





// Event Stuff
document.addEventListener("keydown", keydownHandler);

function keydownHandler(event) {
  jumpPlayer(player, event.keyCode);
}


function randomInt(low, high) {
  return Math.floor(Math.random() * (high - low) + low);
}

function randomDec(low, high) {
  return Math.random() * (high - low) + low;
}