let cloudX = 0;
let font;

function preload() {
  // Load a pixelated font
  font = loadFont('pixelfont.ttf');
}

function setup() {
  createCanvas(600, 400);
  noSmooth(); // Disable anti-aliasing for pixelated effect
  textSize(48);
  textAlign(CENTER, CENTER);
  textFont(font);
}

function draw() {
  drawBackground();
  drawText();
}

function drawBackground() {
  background(135, 206, 250); // Sky blue background

  // Ground
  fill(155,228,85); // green
  rect(0, height - 60, width, 15); // Ground rectangle
  fill(216,166,80); // peach
  rect(0, height - 50, width, 5)
  fill(221,216,150); // ground
  rect(0, height - 45, width, 45)

  // Draw clouds
  let cloudY = 60;
  drawCloud(cloudX, cloudY);
  drawCloud(cloudX - 200, cloudY + 30);

  // Move clouds
  cloudX = (cloudX + 1) % (width + 100);
}

function drawCloud(x, y) {
  noStroke();
  // Cloud color gradient
  let cloudColor1 = color(255, 255, 255, 200);
  let cloudColor2 = color(255, 255, 255, 0);
  for (let i = 0; i < 60; i += 20) {
    fill(lerpColor(cloudColor1, cloudColor2, i / 60));
    rect(floor((x + i) / 20) * 20, floor(y / 20) * 20, 20, 20); // Quantize positions
    rect(floor((x - i + 40) / 20) * 20, floor((y + 20) / 20) * 20, 20, 20); // Quantize positions
  }
}

function drawText() {
  // writing 'bathspa' in the middle of the screen
  fill(255); // White color for text
  text("BATHSPA", width / 2, height / 2);

  // writing 'university' text
  textSize(24);
  text("UNIVERSITY", width / 2, height / 2 + 50);
}
