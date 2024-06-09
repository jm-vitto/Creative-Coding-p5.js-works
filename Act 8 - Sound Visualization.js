// Declare variables for particles
let particles = [];
let mic;
let colours = [ // array of colors
  "#cdb4db",
  "#ffc8dd",
  "#ffafcc",
  "#bde0fe",
  "#a2d2ff"
];

function setup() {
  // Create canvas sized to the window dimensions
  createCanvas(windowWidth, windowHeight);
  mic = new p5.AudioIn(); // code to let the get the audio from the mic
  mic.start();

  // Create the particle array
  for (let i = 0; i < 100; i++) {
    particles.push(new Particle(random(width), random(height)));
  }
}

function draw() {
  // Set background color to turquoise
  background(64, 224, 208);
  let micLevel = mic.getLevel() * height * 3; // when there is an audio, it increases
  
  // Draw the fish shape
  fill(random(colours));
  drawFish(mouseX, mouseY, micLevel, micLevel / 2); // Draw fish with body width as micLevel and height as micLevel/2

  // Draw the particles
  for (let i = 0; i < particles.length; i++) {
    particles[i].display();
    particles[i].move();
  }
}

// Define a function to draw a fish
function drawFish(x, y, bodyWidth, bodyHeight) {
  // Draw the body
  ellipse(x, y, bodyWidth, bodyHeight);

  // Draw the tail
  let tailSize = bodyWidth / 2;
  let tailX = x - bodyWidth / 2;
  let tailY1 = y - bodyHeight / 2;
  let tailY2 = y + bodyHeight / 2;
  triangle(tailX, y, tailX - tailSize, tailY1, tailX - tailSize, tailY2);
}

// Define a particle class with a constructor, display method, and move method
class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.vx = random(-1, 1);
    this.vy = random(-1, 1);
    this.size = random(10, 30);
    this.color = color(random(100, 255), random(100, 255), random(100, 255), random(50, 150));
  }

  display() {
    noStroke();
    fill(this.color);
    ellipse(this.x, this.y, this.size, this.size);
  }

  move() {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x < 0 || this.x > width) {
      this.vx *= -1;
    }
    if (this.y < 0 || this.y > height) {
      this.vy *= -1;
    }
  }
}
