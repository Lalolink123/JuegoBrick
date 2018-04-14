function Drop(index) {
  this.x = random(width);
  this.y = random(-500, -50);
  this.z = random(0, 20);
  this.len = 20;
  this.yspeed = random(5, 15);

  this.colors = ['#1e0c0b', '#2fa6c4', '#b125c4', '#ef0707', '#9cd847'];
  this.index = index;

  this.fall = function() {
    this.y = this.y + this.yspeed;

    if (this.y > height) {
      this.y = random(-200, -100);
      this.yspeed = random(5, 15);
    }
  }

  this.show = function() {
    strokeWeight(20);
    stroke(this.colors[this.index]);
    line(this.x, this.y, this.x - this.len / 3, this.y + this.len);
    stroke(0);
    strokeWeight(1);
  }

}