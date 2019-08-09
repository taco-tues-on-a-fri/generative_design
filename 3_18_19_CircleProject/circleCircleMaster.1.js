let angle1;
let angle2;
let angle3;
  
let scalar;

let canvasSize;

function setup(){
	canvasSize = 900;
  
  angle1 = 130;
  angle2 = 50
  angle3 = 2
  
  scalar = canvasSize * 0.25;
  
  createCanvas(canvasSize, canvasSize);
  colorMode(HSB, 360);   
}

function draw() {
	background(0, 0, 0);
  
  let ang1 = radians(angle1);
  let ang2 = radians(angle2);
  let ang3 = radians(angle3);
  
  
  let x1 = height / 2 + scalar * cos(ang1);
  let y1 = width / 2 + scalar * sin(ang1);
  
  
  let x2 = height / 2 + scalar * cos(ang2);
  let y2 = height /2 + scalar * sin(ang2);
  
  let x3 = height / 2 + scalar * cos(ang3);
  let y3 = height /2 + scalar * sin(ang3);
  
  fill(0, 102, 153);
  ellipse(x1, y1, scalar, scalar);
  
  fill(200, 200, 360);
  ellipse(x2, y2, scalar, scalar);
  
  fill(360, 360, 360);
  ellipse(x3, y3, scalar, scalar);
  
  angle1 += 1;
  angle2 += 1;
  angle3 += 1;
}