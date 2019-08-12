/*jshint esversion: 6 */

let angle1;
let angle2;

let canvasSize;

let pos1X;
let pos1y;

let circle1;

function setup(){
	canvasSize = 800;
  
  angle1 = 0;
  scalar = canvasSize * 0.25;
  
  createCanvas(canvasSize, canvasSize);
  colorMode(HSB, 360);
  
  pos1X = height * 0.25;
  pos1Y = width *0.25;    
}

function draw() {
	background(0, 0, 0);
  
  let ang1 = radians(angle1);
  let x1 = height / 2 + scalar * cos(ang1);
  let y1 = width / 2 + scalar * sin(ang1);
  
  fill(0, 102, 153);
  ellipse(x1, y1, scalar, scalar);
  angle1 += 2;
}