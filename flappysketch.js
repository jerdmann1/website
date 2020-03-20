var bird;
var pipes = [];
var frame = 0;
var points = 0;
var begin = false;
var pointsP;
var speed;
var spacing;
let high;
let highs = 0;
function setup() {
  createCanvas(400,600);
  background('#00BFFF');
  bird = new Bird();
  fill('white');
  noStroke();
  background('#00BFFF');
  bird.update();
  fill('white');
  noStroke();
  ellipse(0,0, 115, 115);
  ellipse(50,0, 100, 100);
  ellipse(100,0, 95, 95);
  ellipse(150,0, 105, 105);
  ellipse(200,0, 100, 100);
  ellipse(250,0, 115, 115);
  ellipse(300,0, 103, 103);
  ellipse(350,0, 100, 100);
  ellipse(400,0, 120, 120);
  fill('#A0522D');
  rect(0, 550, width, 50);
  bird.show();
  pointsP = createP();
  high = createP();
  pointsP.html('Points: ' + points);
  high.html('High Score: ' + highs);
  textSize(25);
  textFont('inconsolata');
  stroke(51);
  strokeWeight(4);
  fill('white');
  text('Press ENTER to Begin', 75, height / 2 -50);
  spacing = 200;
  speed = 2;
}

function mousePressed(){
  bird.up();
}

function keyPressed(){
  if(keyCode == 32){
    bird.up();
  }
  if(keyCode == ENTER){
    for (var i = pipes.length - 1; i >= 0; i--) {
      if(pipes[i].collide()){
        bird = new Bird();
        pipes = [];
        spacing = 200;
        speed = 2;
        break;
      }
    }
    begin = true;
  }
}

function lose(){
  if(highs < points){
    highs = points;
    pointsP.html('Points: ' + points);
    high.html('High Score: ' + highs);
  }
  points = 0;
  begin = false;
  textSize(25);
  textFont('inconsolata');
  stroke(51);
  strokeWeight(4);
  fill('white');
  text('        YOU LOSE\n Press ENTER to Restart', 75, height / 2 -50);
}

function draw() {
  if(begin){
    background('#00BFFF');
    fill('white');
    noStroke();
    ellipse(0,0, 115, 115);
    ellipse(50,0, 100, 100);
    ellipse(100,0, 95, 95);
    ellipse(150,0, 105, 105);
    ellipse(200,0, 100, 100);
    ellipse(250,0, 115, 115);
    ellipse(300,0, 103, 103);
    ellipse(350,0, 100, 100);
    ellipse(400,0, 120, 120);
    fill('#A0522D');
    rect(0, 550, width, 50);
    for (var i = pipes.length - 1; i >= 0; i--) {
      pipes[i].show();
      pipes[i].update();
      pipes[i].collide();
      if (pipes[i].offscreen()) {
        pipes.splice(i, 1);
      }
    }
    bird.update();
    bird.show();
    if (frameCount % 100 == 0) {
      pipes.push(new Pipe(spacing, speed));
    }
    if (frameCount % 25 == 0) {
      points += 1;
      high.html('High Score: ' + highs);
      pointsP.html('Points: ' + points);
    }
    if(frameCount % 500 == 0 && points != 0){
      if(spacing > 75){
        spacing -= 5;
      }
    }
    if(frameCount % 10 == 500 && points != 0){
      if(speed <= 10){
        speed += 5;
      }

    }
  }
}
