// Wall Functions
function newWall(initX, initY, initW, initH, speed) {
  return {
    x: initX,
    y: initY,
    w: initW,
    h: initH,
    speed: speed
  }
}

function initWalls(walls) {
  
  
  walls.push(newWall(randomDec(200, 400), randomDec(-600, -525), randomDec(120, 180), 15, 1));
  walls.push(newWall(randomDec(275, 325), randomDec(-450, -375), randomDec(120, 180), 15, 1));
  walls.push(newWall(randomDec(200, 400), randomDec(-300, -225), randomDec(120, 180), 15, 1));
  walls.push(newWall(randomDec(200, 400), randomDec(-150, -75), randomDec(120, 180), 15, 1));
  
  }

function moveWalls(walls) {
  
  // move and draw all walls
    for (let i = 0; i < walls.length; i++) {
      moveWall(walls[i]);
  }
}

// making the wall move and reset at the top with random x positions wqhen they hit the bottom of the canvas
function moveWall(aWall) {
  aWall.y += aWall.speed;
  if (aWall.y > cnv.height) {
      aWall.y = -5;
      aWall.x = randomDec(100, 500);
      
  } 


}

function changeSpeed(score) {
// change speed based on score

let newSpeed = 1;
if (score > 50 && score <= 100) {
  newSpeed = 1.3;
} else if (score > 100 && score <= 150) {
  newSpeed = 1.6;
} else if (score > 150 && score <= 200) {
  newSpeed = 2;
} else if (score > 200) {
  newSpeed = 3;
}

for (let i = 0; i < walls.length; i++) {
  walls[i].speed = newSpeed;
  console.log(newSpeed);
}

}

function drawWall(aWall) {
  fill("grey");
  rect(aWall.x, aWall.y, aWall.w, aWall.h, "fill");
}

function drawWalls(walls) {
  for (let i = 0; i < walls.length; i++) {
    drawWall(walls[i]);
  }
}


