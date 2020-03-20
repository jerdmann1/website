
class Pipe {
  constructor(x, y) {
    this.spacing = x;
    this.top = random(height / 4, (height / 4) * 2 );
    this.bottom = height - (this.top + this.spacing);
    this.x = width;
    this.w = 80;
    this.speed = y;
  }

  hits(bird) {
    if (bird.y-15 < this.top || bird.y+15 > height - this.bottom) {
      if (bird.x > this.x && bird.x < this.x + this.w) {
        return true;
      }
    }
    return false;
  }

  show() {
    fill('green');
    stroke(1);
    strokeWeight(1);
    rectMode(CORNER);

    rect(this.x, 0, this.w, this.top);
    rect(this.x, height - this.bottom, this.w, this.bottom);
  }

  update() {
    this.x -= this.speed;
  }

  offscreen() {
    if (width < -this.w) {
      return true;
    } else {
      return false;
    }
  }
}
