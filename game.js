class Game {
  constructor(height, width, cellResolution) {
    this.grid = new Grid(height/cellResolution, width/cellResolution, cellResolution);
    this.grid.randomise();
    this.evolutions = 0;
  }
  
  draw() {
    this.grid.draw();
    this.grid.evolveCells();
    this.evolutions++;
  }
}