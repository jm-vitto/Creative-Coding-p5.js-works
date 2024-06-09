var img, x, y;
function preload() {
img = loadImage("landscape.png");
}

function setup() {
createCanvas (700, 700);
background (0);
noStroke();
rectMode(CENTER);
}

function draw() {
background (0);
x = mouseX;
y = mouseY;
image (img, 0, 0);
var c = get(x, y);
fill(c);
rect(x, y, 100, 100);
}