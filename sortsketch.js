var n = 380;
var rectangles = [];
var bubble = false;
var srt = false;
var start = 0;
var finish = 0;
var insertion = false;
var selection = false;
function setup() {
  timestarted = millis();
  createCanvas(windowWidth,windowHeight - 100);
  background(1);
  for(var i = 0; i < n; i++){
    rectangles.push(new Rect());
  }
  button = createButton('Bubblesort');
  button.position(400, windowHeight - 75);
  button.mousePressed(setBubble);

  button3 = createButton('Selection Sort');
  button3.position(500, windowHeight - 75);
  button3.mousePressed(selectionsrt);


  button2 = createButton('Scramble');
  button2.position(450, windowHeight - 40);
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



function selectionsrt(){
  selection = true;
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

function selectionSort (arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        let min = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[min].y > arr[j].y) {
                min = j;
            }
        }
        if (min !== i) {
            let tmp = arr[i].y;
            arr[i].y = arr[min].y;
            arr[min].y = tmp;
            for(var k = 0; k < rectangles.length; k++){
              rect(k*5, height - rectangles[k].y, rectangles[k].x, rectangles[k].y);
            }
            return;
        }
    }
    return arr;
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

  if(selection){
    selectionSort(rectangles);
  }

  if(sorted()){
    for(var i = 0; i < rectangles.length; i++){
      fill('#7CFC00');
      rect(i*5, height - rectangles[i].y, rectangles[i].x, rectangles[i].y);
    }
    bubble = false;
    selection = false;
    qsrt = false;
  }

  background(1);
  for(var i = 0; i < rectangles.length; i++){
    rect(i*5, height - rectangles[i].y, rectangles[i].x, rectangles[i].y);
  }
}
