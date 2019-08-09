/*jshint esversion: 6 */
let canvasSize;

let radius;

let pos1X;
let pos1Y;

let pos2X;
let pos2Y;

let pos3X;
let pos3Y;

let randomNum;
let randArr;

let circleOneA;
let circleOneB;
let circleOneC;
let circleTwoA;
let circleTwoB;
let circleTwoC;
let circleThreeA;
let circleThreeB;
let circleThreeC;

let grandCircle;

function setup() {
  canvasSize = 800;
  createCanvas(canvasSize, canvasSize);
  colorMode(HSB, 360);

  radius = canvasSize * 0.2;

  pos1X = height * 0.25;
  pos1Y = width * 0.25;

  pos2X = height * 0.5;
  pos2Y = width * 0.75;

  pos3X = height * 0.75;
  pos3Y =  width * 0.25;

  randArr = [0, 1, 2];
  randomNum = randArr[0];

  
  circleOneA = function() {
    fill(mouseX * 1, 360, 360);
    circle(pos1X, pos1Y, radius);
  };
  circleOneB = function() {
    fill(mouseX * 1, 360, 360);
    circle(pos2X, pos2Y, radius);
  };
  circleOneC = function() {
    fill(mouseX * 1, 360, 360);
    circle(pos3X, pos3Y, radius);
  };

	circleTwoA = function() {
    fill(mouseX * 1, mouseX / 2, 360);
    circle(pos2X, pos2Y, radius);
  };
	circleTwoB = function() {
    fill(mouseX * 1, mouseX / 2, 360);
    circle(pos3X, pos3Y, radius);
  };
	circleTwoC = function() {
    fill(mouseX * 1, mouseX / 2, 360);
    circle(pos1X, pos1Y, radius);
  };

	circleThreeA = function() {
    fill(mouseX * 1, 360, mouseX / 2);
    circle(pos3X, pos3Y, radius);
  };

	circleThreeB = function() {
    fill(mouseX * 1, 360, mouseX / 2);
    circle(pos1X, pos1Y, radius);
  };

	circleThreeC = function() {
    fill(mouseX * 1, 360, mouseX / 2);
    circle(pos2X, pos2Y, radius);
  };

  
}

function draw() {
  background(mouseX / 2, 360, 360);
  grandCircle();
  
}

function randomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
function swapColors() {
  randomNum = randArr[randomIndex(randArr)];
}

function mouseReleased() {
  swapColors();
  return false;
}

grandCircle = function() {
  //randomNum = randArr[0];
  
  switch (randomNum) {
    case 0:
      circleOneA();
      circleTwoA();
      circleThreeA();
      break;
    case 1:
      circleOneB();
      circleTwoB();
      circleThreeB();
      break;
    case 2:
      circleOneC();
      circleTwoC();
      circleThreeC();
      break;
  }
};