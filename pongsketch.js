let x = 250;
let y = 250;
let xspeed = 2;
let yspeed = 7;
let points = 0;
var start = false;
function setup() {
  text('hello', 400, 800);
  x = 250;
  y = 250;
  xspeed = 2;
  yspeed = 7;
  points = 0;
  createCanvas(1000 ,1000);
  background(255,255,255);
  strokeWeight(3);
  stroke(51);
  fill('white');
  rect(0, 0, 750, 750);
  xspeed = random(2, 7);
  textSize(32);
  fill(0, 102, 153);
  text('Press ENTER to begin', 200,375);
}

function keyPressed(){
  if(keyCode === ENTER){
    start = true;
    x = random(100, 650);
    y = random(250,100);
    xspeed = 2;
    yspeed = 7;
    points = 0;
  }
}


function draw() {
  if(start){
    background(255,255,255);
    strokeWeight(3);
    stroke(51);
    fill('white');
    rect(0, 0, 750, 750);
    fill('black');
    strokeWeight(0);
    stroke(0);
    ellipse(x,y,10,10);
    fill('black');
    if(mouseX>=675){
      rect(675,730,75,5);
    }else if(mouseX <= 0){
      rect(0,730,75,5);
    }else{
      rect(mouseX,730,75,5);
    }

    if(x >= 695){
      rect(675,30,75,5);
    }else if(x <= 0){
      rect(0,730,75,5);
    }else{
      rect(x-30,30,75,5);
    }

    x = x + xspeed;
    y = y + yspeed;
    if(mouseX >= 725){
      mouseX = 724;
    }
    if(y >= 725){
      if(mouseX>=725){
        mouseX = 720;
      }
      if(x <= mouseX-5 || (x >= (mouseX + 82))){
        strokeWeight(3);
        stroke(51);
        fill(255, 80, 80);
        rect(0, 0, 750, 750);
        strokeWeight(0);
        stroke(0);
        fill('black');
        ellipse(x,y,10,10);
        fill('black');
        strokeWeight(0);
        stroke(0);
        fill('black');
        if(mouseX>=712.5){
          rect(675,730,75,5);
        }else if(mouseX <= 0){
          rect(0,730,75,5);
        }else{
          rect(mouseX,730,75,5);
        }
        textSize(32);
        fill(0, 102, 153);
        strokeWeight(3);
        stroke(51);
        text('YOU LOSE Press Enter to Restart', 175,375);
        start = false;
      }
      yspeed = -1 * yspeed;
      let temp = x - mouseX - 37.5;

      temp *= 0.17;
      xspeed = temp;



      yspeed -= 0.5;
      points+=50;
    }
    if(yspeed < 0 && y <= 45){
      yspeed = -1 * yspeed;
    }

    if(x >= 750){
      xspeed = -1 * xspeed;
    }

    if(xspeed < 0 && x <= 0){
      xspeed = -1 * xspeed;
    }
    text('Points: ' + points, 500, 800);
  }

}
