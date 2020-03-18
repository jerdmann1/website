var snake;
var food;
var containsFood = false;
var x;
var y;
var begin = false;
var d;
var scoreP;
var restart = false;
function setup() {
  x = 900;
  y = 900;
  x -= x % 15;
  y -= y % 15;
  createCanvas(y, x);
  background('grey');
  snake = new Snake(-1,-1);
  food = new Food();
  frameRate(30);
  food.generate();
  snake.show();
  scoreP = createP();
  scoreP.html('Score: ' + snake.score);
  fill('blue');
  textSize(30);
  stroke(3);
  text('Press ENTER To Begin',width / 2 - 150, height / 2);
}

function lose(){
  begin = false;
  background('#CD5C5C');
  fill('blue');
  textSize(30);
  stroke(3);
  text('YOU LOSE', width / 2 - 75, height / 2-25);
  snake.show();
  food.generate();
  restart = true;
  fill('blue');
  textSize(30);
  stroke(3);
  text('Press ENTER To Restart',width / 2 - 150, height / 2+25);
}

function keyPressed(){
  switch(keyCode){
    case ENTER:
      begin = true;
      break;
    case 87:
      snake.move(87);
      break;
    case UP_ARROW:
      snake.move(87);
      break;
    case 65:
      snake.move(65);
      break;
    case LEFT_ARROW:
      snake.move(65);
      break;
    case 83:
      snake.move(83);
      break;
    case DOWN_ARROW:
      snake.move(83);
      break;
    case 68:
      snake.move(68);
      break;
    case RIGHT_ARROW:
      snake.move(68);
      break;
    default:
      break;
  }
}


function draw() {
  if(restart){
    snake.tail = [];
    snake.pos.x = floor(random(0,y));
    snake.pos.y = x / 15;
    snake.pos.y = round(random(0,snake.pos.y));
    snake.pos.y *= 15;
    snake.pos.x -= snake.pos.x % 15;
    snake.pos.y -= snake.pos.y % 15;
    food.x = floor(random(0,y));
    food.y = x / 15;
    food.y = round(random(0,food.y));
    food.y *= 15;
    food.x -= food.x % 15;
    food.y -= food.y % 15;
    snake.total = 0;
    restart = false;
  }
  if(begin){
    background('grey');
    d = dist(snake.pos.x, snake.pos.y, food.x, food.y);
    if(d <= 1){
      snake.eat(food);
      console.log(snake.tail);
      containsFood = false;
    }
    snake.update();
    snake.checkDeath();
    snake.show();
    food.generate();
  }
}
