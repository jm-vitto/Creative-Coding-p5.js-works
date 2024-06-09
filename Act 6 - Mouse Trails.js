var x = 80;
var y = 225;

function setup() {
  createCanvas(1000, 1000);
  background(255);
}

function draw() {
  if (mouseIsPressed) {
    // Check if the mouse is pressed
    var a = random(100, 200);
    var b = random(0, 255);
    var c = random(25, 155);
    fill(a, b, c, 50);
    y = y - 0.2; // gradually increasing the size by 0.2
    drawStar(mouseX, mouseY, y / 2, y, 5); // Draw a star at the mouse position
  } else {
    // If the mouse is not pressed
    x = x + 0.3; // Increment x by 0.5, gradually increasing the size of the ellipse over time.
    var a1 = random(65, 150);
    var b1 = random(50, 150);
    var c1 = random(0, 255);
    fill(a1, b1, c1, 60);
    var offset = 50; // Offset to control the slant of the parallelogram
    quad(mouseX - x / 2, mouseY - x / 2, // Top-left vertex
         mouseX + x / 2, mouseY - x / 2, // Top-right vertex
         mouseX + x / 2 - offset, mouseY + x / 2, // Bottom-right vertex
         mouseX - x / 2 - offset, mouseY + x / 2); // Bottom-left vertex
  }
}

function drawStar(x, y, radius1, radius2, npoints) {
  var angle = TWO_PI / npoints; // Angle between star points
  var halfAngle = angle / 2.0; // Half angle for inner points
  beginShape(); // Begin custom shape
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2; // Outer point
    var sy = y + sin(a) * radius2; // Outer point
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1; // Inner point
    sy = y + sin(a + halfAngle) * radius1; // Inner point
    vertex(sx, sy);
  }
  endShape(CLOSE); // Close the shape
}