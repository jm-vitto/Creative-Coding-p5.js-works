var img, x, y;
function preload() {
img = loadImage("landscape2.png");
}

function setup() {
createCanvas (660, 650);
background (0);
noStroke();
}

function draw() {
x = random(width);
y = random(height);
var c = img.get(x, y);
fill(c[0], c[1], c[2], 300);
rect(x,y,25,25)
}

