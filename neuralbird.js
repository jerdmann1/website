let birdcolor;
class Bird {
  constructor(brain) {
    this.y = height / 2;
    this.x = 64;
    birdcolor = color('yellow');
    birdcolor.setAlpha(150);
    this.gravity = 0.8;
    this.lift = -12;
    this.velocity = 0;

    this.score = 0;
    this.fitness = 0;
    if (brain) {
      this.brain = brain.copy();
    } else {
      this.brain = new NeuralNetwork(7, 8, 2);
    }
  }

  show() {
    stroke(1);
    strokeWeight(1);
    fill(birdcolor);
    alpha(255);
    ellipse(this.x, this.y, 30,30);
  }

  up() {
    this.velocity += this.lift;
  }

  mutate() {
    this.brain.mutate(0.1);
  }

  think(pipes) {
    // Find the closest pipe
    let closest = null;
    let closestD = Infinity;
    for (let i = 0; i < pipes.length; i++) {
      let d = pipes[i].x + pipes[i].w - this.x;
      if (d < closestD && d > 0) {
        closest = pipes[i];
        closestD = d;
      }
    }

    let inputs = [];
    if(closest != null){
      inputs[0] = this.y / height;
      inputs[1] = closest.top / height;
      inputs[2] = closest.bottom / height;
      inputs[3] = closest.x / width;
      inputs[4] = this.velocity / 10;
      inputs[5] = (this.y - closest.top) / closest.spacing;
      inputs[6] = (closest.bottom - this.y) / closest.spacing;

    }else{
      inputs[0] = this.y / height;
      inputs[1] = 1;
      inputs[2] = 1;
      inputs[3] = 1;
      inputs[4] = this.velocity / 10;
      inputs[5] = 1;
      inputs[6] = 1;
    }
    let output = this.brain.predict(inputs);
    //if (output[0] > output[1] && this.velocity >= 0) {
    if (output[0] > output[1]) {
      this.up();
    }
  }

  offScreen() {
    return this.y > height || this.y < 0;
  }

  update() {
    this.score++;

    this.velocity += this.gravity;
    //this.velocity *= 0.9;
    this.y += this.velocity;
  }
}
