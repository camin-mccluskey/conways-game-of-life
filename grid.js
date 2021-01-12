class Grid {
  constructor(width, height, resolution) {
    this._width = width;
    this._height = height;
    this._res = resolution;
    this._grid = this._createGrid(width, height);
  }
  
  _createGrid(width, height) {
    let grid = new Array(width);
    for (let i = 0; i < width; i++) {
      grid[i] = new Array(height);
    }
    return grid;
  }
  
  randomise() {
    for (let i = 0; i < this._width; i++) {
     for (let j = 0; j < this._height; j++) {
       let cellState = random([0, 1]);
       this._grid[i][j] = new Cell(cellState, i, j); 
      } 
    }
  }
  
  evolveCells() {
    // create a new grid and place evolved cells in it
    let newGrid = this._createGrid(this._width, this._height);
    
    for (let i = 0; i < this._width; i++) {
     for (let j = 0; j < this._height; j++) {
       let oldCell = this._grid[i][j];
       let oldState = oldCell.state;
       let oldAge = oldCell.age;
       let newState = this._getEvolvedCellState(i, j);
       let cellAge = oldState === newState ? oldAge + 1 : 0
       newGrid[i][j] = new Cell(newState, i, j, cellAge); 
      } 
    }
    
    this._grid = newGrid;
  }
  
  _getEvolvedCellState(i, j) {
    const currentState = this._grid[i][j].state;
    const isAlive = currentState == 1;
    const neighbourCount = this._getCellNeighbourCount(i, j);
    if (isAlive) {
      if (neighbourCount != 2 && neighbourCount != 3) {
        return 0;
      }
    } else {
      if (neighbourCount === 3) {
        return 1;
      } 
    }
    return currentState;
  }
  
  _getCellNeighbourCount(cellX, cellY) {
    let count = 0;
    for (let i = -1; i < 2; i++) {
      for (let j = -1; j < 2; j++) {
          // wrap around
          let x = (cellX + i + this._width) % this._width;
          let y = (cellY + j + this._height) % this._height;
          count += this._grid[x][y].state;
      }
    }
    count -= this._grid[cellX][cellY].state;
    return count;
  }
  
  draw() {
    for (let i = 0; i < this._width; i++) {
      for (let j = 0; j < this._height; j++) {
       this._grid[i][j].draw(this._res);
      } 
    }
    
  }
}