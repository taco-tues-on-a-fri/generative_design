/*jshint esversion: 6 */

let angle1;
let scalar;

let canvasSize;

let radius;

let pos1X;
let pos1Y;

let circleOneA;
let circleBoi;
let a;

function setup(){
	canvasSize = 800;
  
  angle1 = 0;
  scalar = canvasSize * 0.14;
  
  createCanvas(canvasSize, canvasSize);
  colorMode(HSB, 360);
  
  radius = canvasSize * 0.14;
  
  pos1X = height * 0.25;
  pos1Y = width * 0.25;
  
 
}

function draw(){
	background(mouseX / 2, 360, 360);
  
  let ang1 = radians(angle1);
  let x1 = height / 2 + mouseY * cos(ang1);
  let y1 = width / 2 + mouseY * sin(ang1);
  
  fill(0, 102, 153);
  ellipse(x1, y1, scalar, scalar);
  //angle += mouseY * 0.7;
  
  circleBoi();
}

circleBoi = function() {
  fill(mouseX * 1, 360, 360);
  circle(pos1X, pos1Y, radius);
  };