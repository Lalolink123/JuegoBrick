function Brick(pos, r) {
  if (pos) {
    this.pos = pos.copy();
  } else {
    this.pos = createVector(random(100, width - 200), random(200, height - 400));
  }
  if (r) {
    this.r = r * 0.5;
  } else {
    this.r = random(20, 80);
  }

  this.total = 2;
  this.offset = [];
  this.index = Math.floor(random(5));
  this.colors = ['#1e0c0b', '#2fa6c4', '#b125c4', '#ef0707', '#9cd847'];
  this.miniDrops = [];

  this.display = function() {
    push();
    stroke(this.colors[this.index]);
    strokeWeight(30);
    translate(this.pos.x, this.pos.y);
    beginShape();
    for (let i = 0; i < this.total; i++) {
      let angle = map(i, 0, this.total, 0, TWO_PI);
      let r = this.r;
      let x = r * cos(angle);
      let y = r * sin(angle);
      vertex(x, y);
    }
    endShape(CLOSE);
    stroke(0);
    strokeWeight(1);
    pop();

  }

  this.shrink = function() {
    let newB = [];
    newB[0] = new Brick(this.pos, this.r);
    // newB[1] = new Brick(this.pos, this.r);
    return newB;
  }

}
