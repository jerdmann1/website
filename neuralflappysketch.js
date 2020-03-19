
const TOTAL = 500;
let birds = [];
let savedBirds = [];
let pipes = [];
let counter = 0;
let slider;
let gen = 0;
let current = 0;
let high = 0;
let pointP;
let genP;
let scoreP;
let spacing = 200;
let speed = 5;
let frame = 75;
let flag = true;
let final;
let button;

function setup() {
  createCanvas(400, 600);
  for (let i = 0; i < TOTAL; i++) {
    birds[i] = new Bird();
  }
  pointP = createP();
  scoreP = createP();
  genP = createP();
  pointP.html('Current Points: ' + current);
  scoreP.html('High Score: ' + high);
  genP.html('Generation: ' + gen);
  slider = createSlider(1, 10, 1);
  button = createButton('Run Best Model');
  button.position(width / 2 + 50, height + 50);
  button.mousePressed(runsaved);
}

function runsaved(){
  counter = 0;
  for (var i = 0; i < birds.length; i++){
    savedBirds.push(birds[i]);
  }
  birds = [];
  spacing = 200;
  speed = 5;
  frame = 75;
  pipes = [];
  let high = 0;
  let index;
  for(var i = 0; i < savedBirds.length; i++){
    if(savedBirds[i].score > high){
      index = savedBirds[i].brain;
      high = savedBirds[i].score;
    }
  }
  birds.push(new Bird(index));
  console.log(birds);
}

function landscape(){
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
}

function draw() {
  for (let n = 0; n < slider.value(); n++) {
    if (counter % 60 == 0) {
      pipes.push(new Pipe(spacing, speed));
    }
    counter++;

    for (let i = pipes.length - 1; i >= 0; i--) {
      pipes[i].update();

      for (let j = birds.length - 1; j >= 0; j--) {
        if (pipes[i].hits(birds[j])) {
          savedBirds.push(birds.splice(j, 1)[0]);
        }
      }

      if (pipes[i].offscreen()) {
        pipes.splice(i, 1);
      }
    }

    for (let i = birds.length - 1; i >= 0; i--) {
      if (birds[i].offScreen()) {
        savedBirds.push(birds.splice(i, 1)[0]);
      }
    }

    for (let bird of birds) {
      bird.think(pipes);
      bird.update();
    }

    if (birds.length === 0) {
      counter = 0;
      if(parseInt(savedBirds[savedBirds.length - 1].score / 10) > high){
        high = parseInt(savedBirds[savedBirds.length - 1].score / 10) ;
      }
      nextGeneration();
      spacing = 200;
      speed = 5;
      frame = 75;
      pipes = [];
    }

    let temp = (birds[0].score);

    if(temp % 500 == 0 && temp != 0){
      if(spacing > 100){
        spacing -= 10;
      }
    }
  }

  // All the drawing stuff
  landscape();

  for (let bird of birds) {
    bird.show();
    current = parseInt(bird.score / 10);
  }


  for (let pipe of pipes) {
    pipe.show();
  }


  pointP.html('Current Points: ' + current);
  scoreP.html('High Score: ' + high);
  genP.html('Generation: ' + gen);
}
