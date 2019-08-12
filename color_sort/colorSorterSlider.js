
//press keys 1-4 to change pictures
//press keys 5-9 to change sort mode

let img;
let colors = [];
let sortMode = null;
let slider;

//change file path/name here
let pic1 = 'data/pic2.jpg';
let pic2 = 'data/pic1.jpg';
let pic3 = 'data/datboi.jpg';
let pic4 = 'data/sandwich.jpg';

function preload() {
	loadImage(pic1, setImage);
}

function setup() {
  let canvasWidth = img.width;
  let canvasHeight = img.height;
	createCanvas(canvasWidth, canvasHeight);
	noStroke();
  //slider syntax (min, max, defaultValue, step)
  slider = createSlider(0, 350, 250, 5)
}  
  
function draw() {  
  let sortResolution = slider.value();
  let tileCount = sortResolution;
  let rectSize = width / tileCount;
  
  img.loadPixels();
  colors = [];
  
  for (let gridY = 0; gridY < tileCount; gridY++) {
  	for (let gridX = 0; gridX < tileCount; gridX++) {
    	let px = int(gridX * rectSize);
      let py = int(gridY * rectSize);
      let i = (py * img.width + px) * 4;
      let c = color(img.pixels[i], img.pixels[i + 1], img.pixels[i + 2], img.pixels[i+3]);
      colors.push(c);
    }
  }
  
  gd.sortColors(colors, sortMode);
  
  i = 0;
  for (gridY = 0; gridY < tileCount; gridY++) {
  	for (gridX = 0; gridX < tileCount; gridX++) {
    fill (colors[i]);
          rect(gridX * rectSize, gridY * rectSize, rectSize, rectSize);
      i++;
    }
  }
}

function keyReleased() {
  if (key == 'c' || key == 'C') writeFile([gd.ase.encode(colors)], gd.timestamp(), 'ase');
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');

  if (key == '1') loadImage(pic1, setImage);
  if (key == '2') loadImage(pic2, setImage);
  if (key == '3') loadImage(pic3, setImage);
  if (key == '4') loadImage(pic4, setImage);

  if (key == '5') sortMode = null;
  if (key == '6') sortMode = gd.HUE;
  if (key == '7') sortMode = gd.SATURATION;
  if (key == '8') sortMode = gd.BRIGHTNESS;
  if (key == '9') sortMode = gd.GRAYSCALE;
}

function setImage(loadedImageFile) {
  img = loadedImageFile;
}
