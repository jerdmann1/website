function Star(){
  this.x = random(0, width);
  this.y = random(0, height);
  this.size = random(0,2);
  this.fill = random(0,255);

  this.show = function(){
    noStroke();
    fill(250, this.fill);
    ellipse(this.x, this.y, this.size, this.size);
  }
}
