let game; 
const canvasH = 500;
const canvasW = 500;
const cellResolution = 10;

function setup() {
  createCanvas(canvasH, canvasW);
  game = new Game(canvasH, canvasW, cellResolution);
}

function draw() {
  background(220);
  game.draw();
}