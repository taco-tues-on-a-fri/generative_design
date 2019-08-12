/*jshint esversion: 6 */

/**
 * drawing with a changing shape by dragging the mouse
 * 
 * MOUSE
 * position x     : length
 * position y     : thickness and number of lines
 * drag           : draw
 * 
 * KEYS
 * 1-3            : stroke color
 * del, backspace : erase
 * s              : save
 */

 let strokeColor;

 function setup() {
   createCanvas(720, 720);
   colorMode(HSB, 360, 100, 100, 100);
   background(0, 0, 100);
   noFill();
   strokeWeight(2);
   strokeColor = color(0, 10);
 }

function draw() {
  if (mouseIsPressed && mouseButton == LEFT) {
    push();
    translate(width / 2, height / 2);

    let circleResolution = int(map(mouseY + 100, 0, height, 2, 10));
    let radius = mouseX - width / 2;
    let angle = TAU /circleResolution;

    stroke(strokeColor);

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
  if (keyCode == DELETE || keyCode == BACKSPACE) background(0, 0, 100);
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');

  if (key == '1') strokeColor = color(0,10);
  if (key == '2') strokeColor = color(192, 100, 64, 10);
  if (key == '3') strokeColor = color(52, 100, 71, 10);
}