
//mouse line follow thing
let x = [],
  y = [],
  segNum = 30;
  segLength = 20;

for (let i = 0; i < segNum; i++) {
  x[i] = 0;
  y[i] = 0;
}

function setup() {
  createCanvas(2000, 2000);
  strokeWeight(10);
  stroke(255, 100);
}

function draw() {
  background(242, 243, 235);
  dragSegment(0, mouseX, mouseY);
  for (let i = 0; i < x.length - 1; i++) {
    dragSegment(i + 1, x[i], y[i]);
  }
}

function dragSegment(i, xin, yin) {
  const dx = xin - x[i];
  const dy = yin - y[i];
  const angle = atan2(dy, dx);
  x[i] = xin - cos(angle) * segLength;
  y[i] = yin - sin(angle) * segLength;
  segment(x[i], y[i], angle);
}

function segment(x, y, a) {
  push();
  translate(x, y);
  rotate(a);
  stroke(245, 91, 63);
  line(0, 0, segLength, 0);
  pop();
}

//if you are on a new page, the line of the color will change
// function newColor(){
//   if()
// }


//menu function
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("list");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.menu')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('list')) {
        openDropdown.classList.remove('list');
      }
    }
  }
}
