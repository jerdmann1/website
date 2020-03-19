function Food(){
  this.x = 0;
  this.y = 0;


  this.generate = function(){
    if(!containsFood){
      this.x = floor(random(0,y));
      this.y = x / 15;
      this.y = floor(random(0,this.y));
      this.y *= 15;
      this.x -= this.x % 15;
      this.y -= this.y % 15;
      containsFood = true;
    }
    fill('#49fb35');
    rect(this.x, this.y, 15, 15);
  }
}
