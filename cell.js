class Cell {
  constructor(state, xPos, yPos, age = 0 ) {
    this.state = state;
    this.xPos = xPos;
    this.yPos = yPos;
    this.age = age;
  }
  
  draw(res) {
    if (this.state == 0) {
      fill(255); 
    } else {
      fill(random(256), random(256), random(256));    
    }
    const scale = this.age * res;
    rect(this.xPos, this.yPos, scale, scale);
    // circle(this.xPos*res, this.yPos*res, res);
  }
}