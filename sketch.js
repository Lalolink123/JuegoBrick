let board;
let ball;
let bricks = [];
let gameOver = true;
let youWin = false;
let winText;
let instructionText;
let drops = [];
let entities = [];
let bgImage;
let jugador;
let sonido;
let nivelDos;

function preload () {
	bgImage = loadImage('images/fondo.jpg');
	sonido = loadSound('sounds/circuit.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  sonido.setVolume(2);
  sonido.play();
  ellipseMode(CENTER);
  textAlign(CENTER);
  noFill();
  stroke(0);
  background("#208c15")
 

  board = new Board();
  ball = new Ball();

 
  for (let i = 0; i < 100; i++) {
    drops[i] = new Drop(Math.floor(random(5)));
  }

  //Total de bricks
  createBricks(70);
  createText();
}

function draw() {
  background(255);

  image(bgImage, 0, 0, width, height);

  // bricks
  for (let i = bricks.length - 1; i >= 0; i--) {
    if (ball.hits(bricks[i])) {
      if (bricks[i].r >= 40) {
        let newBricks = bricks[i].shrink();
        bricks = bricks.concat(newBricks);
      }
      bricks.splice(i, 1);
      ball.direction.y *= -1;
      break;
    }
    bricks[i].display();
  }

  // board
  board.display();
  if (!gameOver) board.checkEdges();
  if (!gameOver) board.update();

  // ball
  if (ball.meets(board)) {
    if (ball.direction.y > 0) ball.direction.y *= -1;
  }
  ball.display();
  if (!gameOver) ball.checkEdges();
  if (!gameOver) ball.update();

  if (ball.pos.y > height) {
    ball.pos = createVector(board.pos.x + board.r, height - 500);
    gameOver = true;
    ball.shadows = [];
  }

  if (bricks.length === 0) {
    youWin = true;
    gameOver = true;
  }

  if (gameOver) {
    instructionText.style('display', 'block');
  } else {
    instructionText.style('display', 'none');
  }
}

function keyReleased() {
  board.isMovingRight = false;
  board.isMovingLeft = false;
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    board.isMovingLeft = true;
  } else if (keyCode === RIGHT_ARROW) {
    board.isMovingRight = true;
  } else if (keyCode === 32) {
    if (bricks.length === 0) createBricks(20);
    gameOver = false;
    youWin = false;
  }
}

function createBricks(n) {
  for (let i = 0; i < n; i++) {
    bricks.push(new Brick());
  }
}

function createText() {
  instructionText = createP("<br> <h1>Presione 'Espacio' para empezar</h1>");
  instructionText.style('display', 'none');
  instructionText.position(width / 2 - 240, 100);
}