/*jshint esversion: 6 */

let angle1 = 0;
let angle2 = 0;
let scalar = 70; // deals with the scale of ellipses

function setup() {
	createCanvas(710, 400);
  noStroke();
  rectMode(CENTER);
}

function draw() {
	background(0);
  
  let ang1 = radians(angle1);
  let ang2 = radians(angle2);
  
  let x1 = width / 2 + scalar * cos(ang1);
  let x2 = width / 2 + scalar * cos(ang2);
  
  let y1 = height / 2 + scalar * sin(ang1);
  let y2 = height / 2 + scalar * sin(ang2);
  
  fill(255);
  // (x axis, y axis, width, height)
  rect(width * 0.5, height * 0.5, 140, 140);
  
  fill(0, 102, 153); //blue
  		// (x axis, y axis, width, height)
  ellipse(x1, height * 0.5 - 120, scalar, scalar); // top blue
  ellipse(x2, height * 0.5 + 120, scalar, scalar); // bottom blue
  
  fill(255, 204, 0); // yellow
  ellipse(width * 0.5 - 120, y1, scalar, scalar);  // left yellow
  ellipse(width * 0.5 + 120, y2, scalar, scalar);  // right yellow
  
  angle1 += 2;  // yellowLeft/BlueTop
  angle2 += 2; // yellowRight/BlueBot - increases rate of movement
}