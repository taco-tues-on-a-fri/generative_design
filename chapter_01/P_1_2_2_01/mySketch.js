import { getDefaultSettings } from "http2";

/*jshint esversion: 6 */

let img;
let colors = [];
let sortMode = null;

function preload() {
  loadImage('data/pic1.jpg', setImage);
}

function setup () {
  createCanvas(600, 600);
  noCursor();
  noStroke();
}

function draw() {
  let tileCount = floor(width / max(mouseX, 5));
  let rectSize = width / tileCount;

  img.loadPixels();
  colors = [];

  for (let gridY = 0; gridY < tileCount; gridY++) {
    for (let gridX = 0; gridX < tileCount; gridX++) {
      let px = int(gridX * rectSize);
      let py = int(gridY * rectSize);
      let i = (py * img.width + px) * 4;
      let c = color(img.pixels[i], img.pixels[i + 1], img.pixels[i + 2], img.pixels[i + 3]);
      colors.push(c);
    }
  }

  gd.sortColors(colors, sortMode);

  let i = 0;
  for (let gridY = 0; gridY < tileCount; gridY++) {
    for (let gridX = 0; gridX < tileCount; gridX++) {
      fill(colors[i]);
      rect(gridX * rectSize, gridY * rectSize, rectSize, rectSize);
      i++
    }
  }
}

function keyReleased() {
  if (key == 'c' || key == 'C') writeFile([gd.ase.encode(colors)], gd.timestamp(), 'ase');
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');

  if (key == '1') loadImage('data/pic1.jpg', setImage);
  if (key == '2') loadImage('data/pic2.jpg', setImage);
  if (key == '3') loadImage('data/pic3.jpg', setImage);
  if (key == '4') loadImage('data/pic4.jpg', setImage);

  if (key == '5') sortMode = null;
  if (key == '6') sortMode = gd.HUE;
  if (key == '7') sortMode = gd.SATURATION;
  if (key == '8') sortMode = gd.BRIGHTNESS;
  if (key == '9') sortMode = gd.GRAYSCALE;
}

function setImage(loadedImageFile) {
  img = loadedImageFile;
}