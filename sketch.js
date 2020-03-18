var rocket;
var population;
var lifespan = 400;
var lifep;
var genp;
var gen = 0;
var count = 0;
var target;
var stars = [];
var img;
var rx = 300;
var ry = (800 / 2);
var rw = 400;
var rh = 10;
var obj = false;
var button;

function preload(){
}
function setup() {
  createCanvas(1000,800);
  rocket = new Rocket();
  population = new Population();
  lifeP = createP();
  genP = createP();
  genP.html('Generation: ' + gen);
  target = createVector(width/2, 50);
  for(var i = 0; i < 100; i++){
    stars[i] = new Star();
  }
  button = createButton('Toggle Object');
  button.position(460, 840);
  button.mousePressed(addobj);

}

function addobj(){
  obj = !obj;
}

function draw() {
  background(0);
  population.run();
  lifeP.html('Frames: ' + count);
  count++;
  if(count == lifespan){
    population.evaluate();
    population.selection();
    count = 0;
    gen++;
    genP.html('Generation: ' + gen);
  }
  if(obj){
    fill('red');
    rect(rx , ry , rw , rh);
  }
  for(var i = 0; i < 100; i++){
    this.stars[i].show();
  }
  fill(255,255);
  ellipse(target.x, target.y, 16, 16);
}
