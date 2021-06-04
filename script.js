var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

window.addEventListener("keydown", keyDown);
canvas.width = 700;
canvas.height = 700

ctx.font = "30px Arial";

var colors = ["red", "yellow", "green", "cornflowerblue"]

function rect(x, y, wid, hi) {
  ctx.beginPath();
  ctx.rect(x, y, wid, hi)
}
function text(message, x, y) {
  ctx.fillStyle = "black";
  ctx.fillText(message, x, y);
}
function fill(r, g, b) {
  ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
  ctx.fill();
  ctx.stroke();
}

function line(x1, y1, x2, y2) {

  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();

}

function drawArrows(arrowsX, arrowsY) {

  for (var i = 0; i < 7; i++) {
    ctx.beginPath();
    // ctx.rect(i * canvas.width / 4, 800, canvas.width / 4, 100);
    ctx.strokeRect(i * canvas.width, 600, 100, 100)
    // ctx.rect(i * canvas.width, 600, 100, 100);

  }

  ctx.font = "100px Arial";
  text("v", arrowsX, arrowsY + canvas.width / 16);
  // ctx.rect(arrowX, arrowsY, canvas.width / 4, 100);

  text("b", arrowsX + canvas.width / 4, arrowsY + canvas.width / 13);
  text("n", arrowsX + 1.99 * canvas.width / 4, arrowsY + canvas.width / 16);

  text("m", arrowsX + 2.88 * canvas.width / 4, arrowsY + canvas.width / 16);

  // line(0, 800, 450, 800);

  // for (var i = 1; i < 4; i++) {
  //   line(i * canvas.width / 4, 800, i * canvas.width / 4, 900)
  // }

}


var score = 0;
var misses = 0
// [x, y] x = col number and y = distance fallen
var blocks = [[0, 0]];
var speed = 5

function drawBlocks() {

  for (var i = 0; i < blocks.length; i++) {

    ctx.beginPath();

    ctx.rect(blocks[i][0] * canvas.width / 4, blocks[i][1], canvas.width / 4, 100);
    ctx.fillStyle = colors[blocks[i][0]];
    ctx.fill();

  }

}

setTimeout(makeBlock, 0);
function makeBlock() {

  blocks.push([Math.round(Math.random() * 3), -canvas.width / 4])
  console.log(Math.round(Math.random() * 3), -canvas.width / 4);
  setTimeout(makeBlock, 3 * 1000 / speed);
}

// var falling = setInterval(fallingBlocks, 50 / 3);

drawArrows(30, 600)
drawBlocks()
makeBlock()



function fallingBlocks() {

  // speed += 0.001
  document.getElementById("speed").innerHTML = "Speed: " + Math.round(speed);

  document.getElementById("score").innerHTML = "Score: " + Math.round(score);

  document.getElementById("misses").innerHTML = "Misses: " + misses;

  for (var i = 0; i < blocks.length; i++) {
    blocks[i][1] += speed;

    if (blocks[i][1] > 800) {
      blocks.splice(i, 1);
      misses += 1;
      score -= 1;
    }
  }

  if (misses >= 10) {
    clearInterval(falling);
    document.getElementById("misses").innerHTML = "Misses: " + misses;

    ctx.clearRect(0, 0, 450, 900);

    ctx.font = "30px Arial";
    ctx.fillStyle = "black";
    text('Bruh', 120, 300);

  }
  else {

    ctx.clearRect(0, 0, 450, 900);

    drawBlocks();

    drawArrows(30, 850, 130);
  }



}



function keyDown(event) {
  var key = event.key;

  // console.log(misses >= 20  );

  if (key == "v") {


    if (blocks[0][0] == 0) {
      if (blocks[0][1] >= 800 - canvas.width / 4) {
        score += 2;
        blocks.splice(0, 1);
      }
      else {
        score--;
        misses++;
      }
    }

    else {
      score--;
      misses++;
    }

  }

  if (key == "b") {
    if (blocks[0][0] == 1) {
      if (blocks[0][1] >= 800 - canvas.width / 4) {
        score += 2;
        blocks.splice(0, 1);
      }
      else {
        score--;
        misses++;
      }
    }

    else {
      score--;
      misses++;
    }
  }

  if (key == "n") {
    if (blocks[0][0] == 2) {
      if (blocks[0][1] >= 800 - canvas.width / 4) {
        score += 2;
        blocks.splice(0, 1);
      }
      else {
        score--;
        misses++;
      }
    }

    else {
      score--;
      misses++;
    }
  }

  if (key == "m") {
    if (blocks[0][0] == 3) {
      if (blocks[0][1] >= 800 - canvas.width / 4) {
        score += 2;
        blocks.splice(0, 1);
      }
      else {
        score--;
        misses++;
      }
    }

    else {
      score--;
      misses++;
    }
  }


  if (misses >= 10 && key == "r") {
    score = 0;
    speed = 10;
    misses = 0;
    blocks = [];
    falling = setInterval(fallingBlocks, 50 / 3);
  }


}


