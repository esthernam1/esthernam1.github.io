let num = 1000;
let range = 20;

let ax = [];
let ay = [];

function windowResized(){
    
}

function setup() {
canvas =  createCanvas(windowWidth, windowHeight);
 canvas.position(0,0);
 canvas.style('z-index', '-2');
  for ( let i = 0; i < num; i++ ) {
    ax[i] = width / 2;
    ay[i] = height / 2;
  }
  frameRate(30);
}

function draw() {
  background(0);

  // Shift all elements 1 place to the left
  for ( let i = 1; i < num; i++ ) {
    ax[i - 1] = ax[i];
    ay[i - 1] = ay[i];
  }

  // Put a new value at the end of the array
  ax[num - 1] += random(-range, range);
  ay[num - 1] += random(-range, range);

  // Constrain all points to the screen
  ax[num - 1] = constrain(ax[num - 1], 0, width);
  ay[num - 1] = constrain(ay[num - 1], 0, height);
  // Draw a line connecting the points
  for ( let j = 1; j < num; j++ ) {
    let val = j / num * 204.0 + 51;
    stroke(val);
    strokeWeight(4);
    stroke(255, 204, 100);
    line(ax[j - 1], ay[j - 1], ax[j], ay[j]);
  }
 
}
