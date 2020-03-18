
function Snake(ex,ey){
  this.pos = createVector(0, 0);
  if(ex == -1){
    this.pos.x = floor(random(0,y));
    this.pos.y = x / 15;
    this.pos.y = round(random(0,this.pos.y));
    this.pos.y *= 15;
    this.pos.x -= this.pos.x % 15;
    this.pos.y -= this.pos.y % 15;
  }else{
    this.pos.x = ex;
    this.pos.y = ey;
  }
  this.total = 0;
  this.score = 0;
  this.vel = createVector(0,1);
  this.scl = 2;
  this.tail= [];

  this.move = function(x){
    switch(x){
      case 87:
        this.vel.x = 0;
        this.vel.y = -1;
        break;
      case 65:
        this.vel.x = -1;
        this.vel.y = 0;
        break;
      case 83:
        this.vel.x = 0;
        this.vel.y = 1;
        break;
      case 68:
        this.vel.x = 1;
        this.vel.y = 0;
        break;
    }
  }

  this.eat = function(pos) {
    let d = dist(this.pos.x, this.pos.y, pos.x, pos.y);
    if (d < 1) {
      this.total++;
      this.score += 50;
    }
  }

  this.checkDeath = function(){
    if(this.pos.x >= width || this.pos.y >= height || this.pos.y <= 0 || this.pos.x <= 0){
      lose();
      this.score = 0;
    }
    for(var i = 0; i < this.tail.length; i++){
      if(dist(this.pos.x, this.pos.y, this.tail[i].x, this.tail[i].y) < 1){
        lose();
        this.score = 0;
      }
    }
  }


  this.update = function() {
    for (let i = 0; i < this.tail.length - 1; i++) {
      this.tail[i] = this.tail[i + 1];
    }
    if (this.total >= 1) {
      this.tail[this.total - 1] = createVector(this.pos.x, this.pos.y);
    }


    this.pos.x = this.pos.x + this.vel.x * 15;
    this.pos.y = this.pos.y + this.vel.y * 15;
    scoreP.html('Score: ' + this.score);

  }

  this.show = function() {
    fill('red');
    for (let i = 0; i < this.tail.length; i++) {
      rect(this.tail[i].x, this.tail[i].y, 15, 15);
    }
    rect(this.pos.x, this.pos.y, 15, 15);
  }
}
