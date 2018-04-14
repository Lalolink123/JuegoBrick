function Ball(pos) {
  
  if (pos) {
    this.pos = pos.copy();
  } else {
    this.pos = createVector(width / 2, height - 500);
  }


  this.r = 60;
  this.vel = createVector(5, random(1, 2)).mult(4);
  this.direction = createVector(1, 1);
  this.shadows = [];
  this.colors = ['#6CD9CC', '#FB6578', '#FE5A8F', '#FC9574', '#9A8DF2'];

  this.update = function() {
    let shadow = this.pos.copy();
    this.shadows.push(shadow);

    if (this.shadows.length > 5) {
      this.shadows.splice(0, 1);
    }

    this.pos.x += this.vel.x * this.direction.x;
    this.pos.y += this.vel.y * this.direction.y;
  }

  this.display = function() {
    for (let i = this.shadows.length - 1; i >= 0; i--) {
      ellipse(this.shadows[i].x, this.shadows[i].y, (this.r + i) * 2, (this.r + i) * 2);
    }

    stroke('#cc2626');
    strokeWeight(4);
    fill(255);
    ellipse(this.pos.x, this.pos.y, this.r * 2, this.r * 2);
    ellipse(this.pos.x, this.pos.y, this.r / 2, this.r / 2);
    noFill();
    stroke(0);
    strokeWeight(1);
  }

  this.checkEdges = function() {
    if (this.pos.x > width - this.r && this.direction.x > 0) {
      this.direction.x *= -1;
    }
    if (this.pos.x < this.r && this.direction.x < 0) {
      this.direction.x *= -1;
    }
    if (this.pos.y < this.r && ball.direction.y < 0) this.direction.y *= -1;
  }

  this.meets = function(board) {
    if (board.pos.y - this.pos.y > 0 && board.pos.y - this.pos.y < this.r && ball.pos.x > board.pos.x - ball.r && ball.pos.x < board.pos.x + board.r + ball.r) {
      return true;
    } else {
      return false;
    }
  }

  this.hits = function(brick) {
    let d = dist(this.pos.x, this.pos.y, brick.pos.x, brick.pos.y);
    if (d < brick.r + this.r) {
      return true;
    } else {
      return false;
    }
  }
}
