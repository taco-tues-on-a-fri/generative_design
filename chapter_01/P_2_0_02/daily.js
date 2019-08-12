/**
 * drawing with a changing shape by dragging the mouse
 * 
 * MOUSE
 * position x     : length
 * position y     : thickness and number of lines
 * drag           : draw
 * 
 * KEYS
 * del, backspace : erase
 * s              : save
 */


let canvasH, canvasW;

let who;
let shiftX, shiftY;
let shapeSide;
let minH;
let input, inputMin, inputMax;
let convertMin, convertMax;

function setup() {
  canvasW = 720;
  canvasH = 720;

  createCanvas(canvasW, canvasH);
  noFill();
  background(255);
  strokeWeight(2);
  stroke(0, 25);
}

function draw() {
  if (mouseIsPressed && mouseButton == LEFT) {
    push();
    //translate(width * 0.5, height * 0.5);
    //shiftX smaller number goes left, higher to right
    //shiftY smaller number goes bottom, higher to top
    shiftX = 0.5;
    shiftY = 0.5;
    translate(width * shiftX, height * shiftY);
    
    shapeSide = 120;
    input = mouseY + shapeSide;
    inputMin = 0;
    inputMax = height;
    convertMin = 2;
    convertMax = 5;
    
    // map() converts the y-value of the mouse position(num between 0-height)
    // to a value between 2-80
    // var circleResolution = map(mouseY, 0, height, 2, 80)
    
    // map(input, inputMin, inputMax, convertMin, convertMax)
    //let circleResolution = int(map(mouseY + 100, 0, height, 2, 10));
    
    
    let circleResolution = int(map(input, inputMin, inputMax, convertMin, convertMax));
    let radius = mouseX - width * 0.5;
    let angle = TAU / circleResolution;

    beginShape();
    for (let i = 0; i <= circleResolution; i++) {
      let x = cos(angle * i) * radius;
      let y = sin(angle * i) * radius;
      vertex(x, y);
    }
    endShape();

    pop();
  }
}

function keyReleased() {
  if (keyCode == DELETE || keyCode == BACKSPACE) background(255);
  if (key == 's' || key == 'S')  saveCanvas(gd.timestamp(), 'png');
}