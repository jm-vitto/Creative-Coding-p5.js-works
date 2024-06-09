var img;
function preload() {
img = loadImage("landscape2.png");
}

function setup() {
createCanvas (600, 600);
background (0);
}

function draw() {
background (0);
image (img, 0, 0);
var v = map(mouseX, 0, width, 0, 5);
filter(BLUR, v);
}