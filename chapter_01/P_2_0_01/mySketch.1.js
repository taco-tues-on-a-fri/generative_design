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



function keyPressed() {
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
}