// Player Functions

function newPlayer(initX, initY, initW, initH, initColor, initSpeed, initlKey, initrKey, inituKey) {
  return {
    x: initX,
    y: initY,
    w: initW,
    h: initH,
    color: initColor,
    dx: initSpeed,
    dy: 5,
    a: 0.5,
    launchSpeed: -14,
    lKey: initlKey,
    rKey: initrKey,
    uKey: inituKey,
    jumpCount: 0
  }
}

function drawPlayer(aPlayer) {
  fill(aPlayer.color);
  rect(aPlayer.x, aPlayer.y, aPlayer.w, aPlayer.h, "fill");
}

function movePlayer(aPlayer) {
  // Horizontal Movement
  if (keyIsDown[aPlayer.lKey]) {
    aPlayer.x += -aPlayer.dx;
  } else if (keyIsDown[aPlayer.rKey]) {
    aPlayer.x += aPlayer.dx;
  }

  // Vertical Movement
  aPlayer.y += aPlayer.dy; // Move Vertically
  aPlayer.dy += aPlayer.a; // Apply acceleration (gravity)

  // Check Collision with Ground
  if (aPlayer.y + aPlayer.h > cnv.height) {
    // console.log('ground');
    // playerTouchingFloor === true;
    lives -= 1;
    document.getElementById('printLives').innerHTML = lives;
    gameOverCheck(lives);
    aPlayer.y = cnv.height - aPlayer.h;
    aPlayer.dy = 0;
    aPlayer.jumpCount = 0;
  }


}


function gameOverCheck(livesRemaining) {
  if (livesRemaining === 0) {
    lives = 0;
    alert('**GAME OVER!! Your Total Score was ' + score + '. Click OK to play again.');
    lives = 4;
    console.log(lives);
    score = 0;
    speed = 1;
  } else {
    player = newPlayer(380, -270, 40, 40, "blue", 4, 37, 39, 38);

  }
} 


function jumpPlayer(aPlayer, keyCode) {
  // Jump if keyCode is the player's up key
  if (aPlayer.uKey === keyCode && aPlayer.jumpCount === 0) {
    aPlayer.dy = aPlayer.launchSpeed;
    aPlayer.jumpCount++;

    
  }
}

function platformTop(aPlayer, walls) {
  aPlayer.y = walls.y - aPlayer.h; // Teleport to top of platform
  aPlayer.dy = 0; // Set speed to 0 to prevent falling through platform
}

function checkWallCollision(aPlayer, walls) {
  for (let i = 0; i < walls.length; i++) {
    if (rectCollide(aPlayer, walls[i])) {
      aPlayer.jumpCount = 0;
      
      platformTop(aPlayer, walls[i]);
      break;
    } 
  }
}

function checkSideCollision1(aPlayer) {
  if (aPlayer.x < 0) {
    aPlayer.x = cnv.width;
  } else if (aPlayer.x > cnv.width) {
    aPlayer.x = 0;
  }
}





