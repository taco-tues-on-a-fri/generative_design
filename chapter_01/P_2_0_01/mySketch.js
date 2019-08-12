/**
 * drawing a filled circle with lines.
 * 
 * MOUSE
 * position x     : length
 * position y     : thickness and number of lines
 * 
 * KEYS 
 * s              : save png
 */

 function setup() {
   createCanvas(550, 550);
   strokeCap(SQUARE)
}

function draw() {
  background(255);
  translate(width / 2, height / 2);

  let circleResolution = int(map(mouseY, 0, height, 2, 80));
  let radius = mouseX - width / 2;
  let angle = TAU / circleResolution;

  strokeWeight(mouseY / 20);

  for (let i = 0; i <= circleResolution; i++){
    let x = cos(angle * i) * radius;
    let y = sin(angle * i) * radius;
    line(0, 0, x, y);
  }
}

function keyPressed() {
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
}