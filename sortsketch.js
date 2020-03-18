var n = 380;
var rectangles = [];
var bubble = false;
var srt = false;
var start = 0;
var finish = 0;
var insertion = false;
function setup() {
  timestarted = millis();
  createCanvas(windowWidth,windowHeight - 100);
  background(1);
  for(var i = 0; i < n; i++){
    rectangles.push(new Rect());
  }
  button = createButton('Bubblesort');
  button.position(400, windowHeight - 50);
  button.mousePressed(setBubble);

  button3 = createButton('Insertion');
  button3.position(600, windowHeight - 50);
  button3.mousePressed(insert);

  button2 = createButton('Scramble');
  button2.position(700, windowHeight - 50);
  button2.mousePressed(scramble);

}

function scramble(){

  for(var i = 0; i < rectangles.length; i++){
    rectangles[i].y = random(1,height-50);
  }
  for(var i = 0; i < rectangles.length; i++){
    fill('white');
    rect(i*5, height - rectangles[i].y, rectangles[i].x, rectangles[i].y);
  }
}

function insert(){
  insertionSort(rectangles);
}

function setBubble(){
  bubble = true;
}

function sorted(){
  for(var i = 0; i < rectangles.length - 1; i++){
    if(rectangles[i].y > rectangles[i+1].y){
      return false;
    }
  }
  return true;
}

function insertionSort(array){
    const length = array.length;

    for (let i = 1; i < length; i++) {

        let key = array[i].y;
        let j = i - 1;
        while (j >= 0 && array[j].y > key) {
            array[j + 1].y = array[j].y;
            j = j - 1;
        }
        array[j+1].y = key;
    }
}

function bubblesort(x){
  for(var i = 0; i < x.length-1; i++){
    if(x[i].y>x[i+1].y){
      var temp = x[i];
      x[i] = x[i+1];
      x[i+1] = temp;
    }
  }
}

function draw() {
  if(bubble){
    bubblesort(rectangles);
  }

  if(insertion){
    insertionSort(rectangles);
  }
  if(sorted()){
    for(var i = 0; i < rectangles.length; i++){
      fill('#7CFC00');
      rect(i*5, height - rectangles[i].y, rectangles[i].x, rectangles[i].y);
    }
    bubble = false;
    insertion = false;
  }

  background(1);
  for(var i = 0; i < rectangles.length; i++){
    rect(i*5, height - rectangles[i].y, rectangles[i].x, rectangles[i].y);
  }
}
