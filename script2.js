var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

window.addEventListener("keydown", keyDown)

canvas.width = 700;
canvas.height = 700;

let circles = [[0, 0]]
// const speed = 5;
let score = 0;
let gameOver = false;

//making sinks
function makeBase() {
  ctx.strokeRect(0, 600, 100, 100)
  ctx.strokeRect(100, 600, 100, 100)
  ctx.strokeRect(200, 600, 100, 100)
  ctx.strokeRect(400, 600, 100, 100)
  ctx.strokeRect(500, 600, 100, 100)
  ctx.strokeRect(600, 600, 100, 100)
  ctx.font = "60px Arial"
  ctx.fillText("S", 30, 670)
  ctx.fillText("D", 130, 670)
  ctx.fillText("F", 230, 670)
  ctx.fillText("J", 430, 670)
  ctx.fillText("K", 530, 670)
  ctx.fillText("L", 630, 670)
}

// setTimeout(makeCircle, 0);
function makeCircle() {
  const possibleX = [150, 250, 350, 550, 650, 750]
  let randomInd = Math.floor(Math.random() * possibleX.length);
  circles.push([possibleX[randomInd], -canvas.width / 4])
  console.log(circles);
  setTimeout(makeCircle, 3 * 1000 / speed);
}
const circle = {
  x: 50,
  y: 50,
  radius: 50,
  dy: 2,
  color: "black",
  hit: false
}

function drawCircle() {
  if (circle.y < canvas.height) {
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI)
    ctx.strokeStyle = circle.color;
    ctx.stroke();
  }
  else {
    gameOver = true;
  }
}

function updatePos() {
  circle.y += circle.dy;
  //when circle touches sink
  if (circle.y + circle.radius >= 600) {
    circle.radius = 0
  }
}

function update() {
  if (gameOver) {
    alert("GAME OVER");
    document.location.reload();
    clearInterval(interval);
  }
  ctx.clearRect(0, 0, canvas.width, canvas.height - 100);
  drawCircle();
  updatePos();
  document.getElementById("score").innerHTML = "Score: " + Math.round(score);
  requestAnimationFrame(update);
}

function keyDown(e) {
  if (e.key == "s") {
    if (circle.y + circle.radius >= 580 && circle.y + circle.radius < 700) {
      score += 1;
    }
  }

}
makeBase();
update();


