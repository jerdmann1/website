
function Pipe(x, y){
  this.width = 10;
  this.top = 0;
  this.bottom = height;
  this.x = width;
  this.thickness = 75;
  this.y = random(height / 4, (height / 4) * 2 );
  this.space = x;
  this.vel = y;

  this.update = function(){
    this.x -= this.vel;
  }

  this.collide = function(){
    if(bird.y-15 <= this.y && bird.x >= this.x && bird.x <= this.x + this.thickness){
      lose();
      return true;
    }
    if(bird.y + 15 >= this.y + this.space && bird.x >= this.x && bird.x <= this.x + this.thickness){
      lose();
      return true;
    }
    if(bird.y <= 0 || bird.y >= height){
      lose();
      return true;
    }
    return false;
  }

  this.offscreen = function() {
   if (this.x < -this.width - width) {
     return true;
   } else {
     return false;
   }
 }

  this.show = function(){
    stroke(51);
    strokeWeight(1);
    fill('green');
    rect(this.x, this.top, this.thickness, this.y);
    rect(this.x, this.y + this.space, this.thickness, height);
  }
}
