function Board() {
  let score = 0;
  this.r = 160;
  this.h = 20;
  this.pos = createVector(width / 2 - this.r / 2, height - 40);
  this.isMovingLeft = false;
  this.isMovingRight = false;

  this.display = function() {
    strokeWeight(50);
    stroke('#d0d6c9');
    rect(this.pos.x, this.pos.y, this.r, this.h);
    for (let i = 0; i < this.r; i += this.h) {
      line(this.pos.x + i, this.pos.y, this.pos.x + this.h + i, this.pos.y + this.h);
    }
    stroke(10);
    strokeWeight(0);
  }

  this.update = function() {
    if (this.isMovingLeft) {
      this.move(-30);
    } else if (this.isMovingRight) {
      this.move(30);
    }
  }

  this.move = function(step) {
    this.pos.x += step;
  }

  this.checkEdges = function() {
    if (this.pos.x <= 0) this.pos.x = 0;
    else if (this.pos.x + this.r >= width) this.pos.x = width - this.r;
  }

}
