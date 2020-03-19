function Bird(){
  this.x = 80;
  this.y = height / 4;
  this.vel = 1;
  this.acc = 0.5;

  this.update = function(){
    this.vel += this.acc;
    this.y = this.y + this.vel;
    if(this.y <= 0){
      this.vel = 0;
      this.y = 0;
    }
    if(this.y >= height){
      this.vel = 0;
      this.y = height;
    }
  }

  this.up = function up(){
    this.vel += -12;
  }

  this.show = function(){
    noStroke();
    fill('yellow');
    stroke(1);
    strokeWeight(1);
    ellipse(this.x, this.y, 30,30);
  }
}
