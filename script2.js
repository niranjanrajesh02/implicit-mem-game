var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

window.addEventListener("keydown", keyDown)

canvas.width = 700;
canvas.height = 700;

// let circles = [[0, 0]]
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


const circles = [{
  x: 50,
  y: 50,
  radius: 50,
  dy: 2,
  hit: false
}]

function drawCircle(circle) {
  // circle is only drawn till it touches the sink
  if (circle.y + circle.radius < 600) {
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI)
    ctx.strokeStyle = circle.color;
    ctx.stroke();
  }
}

function updatePos(circle) {
  circle.y += circle.dy;
}
let ind = 0;
function update() {
  if (circles.length === 0) {
    alert("GAME OVER");
    document.location.reload();
    clearInterval(interval);
  }
  document.getElementById("score").innerHTML = "Score: " + (score);
  ctx.clearRect(0, 0, canvas.width, canvas.height - 100);
  drawCircle(circles[ind]);
  updatePos(circles[ind]);


  requestAnimationFrame(update);
}

function keyDown(e) {
  let circle = circles[ind]
  if (e.key == "s") {
    if (circle.y + circle.radius >= 600 && circle.y + circle.radius < 700) {
      score += 1;
      console.log(score);
      circles.splice(0, 1);
    }
    else {
      misses++;
    }
  }


}
makeBase();
update();


