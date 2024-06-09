let bird;
let pipes = [];
let gameOver = false;
let gameStarted = false;
let gameOverFont;

let score = 0;
let hiScore = 0;

function preload() {
  gameOverFont = loadFont('pixelfont.ttf');
}

function setup() {
  createCanvas(400, 600);
  bird = new Bird();
}

function draw() {
  background(64, 224, 208);

  if (!gameStarted) {
    // Display menu screen
    textSize(32);
    textAlign(CENTER, CENTER);
    fill(155, 55, 200);
    textFont(gameOverFont);
    text("Floppy Fish", width / 2, height / 2 - 50);
    fill(255);
    textSize(12);
    text("Press <space> to start", width / 2, height / 2 + 50);

    // Check if spacebar is pressed to start the game
    if (keyIsPressed && key === ' ') {
      gameStarted = true;
      pipes.push(new Pipe());
    }
  } else if (!gameOver) {
    // Update and show bird
    bird.update();
    bird.show();

    // Move and show pipes
    for (let i = pipes.length - 1; i >= 0; i--) {
      pipes[i].update();
      pipes[i].show();

      // Check for collisions with bird
      if (pipes[i].hits(bird)) {
        gameOver = true;
        if (score > hiScore) {
          hiScore = score; // Update hi-score if current score is higher
        }
      }

      // Remove pipes that have moved offscreen and increment score
      if (pipes[i].offscreen()) {
        pipes.splice(i, 1);
        score++; // Increment score when a pipe is passed
      }
    }

    // Add new pipes at regular intervals
    if (frameCount % 100 === 0) {
      pipes.push(new Pipe());
    }
  } else {
    // Display game over screen
    textSize(32);
    textAlign(CENTER, CENTER);
    fill(255, 0, 0);
    textFont(gameOverFont);
    text("Game Over\n", width / 2, height / 2);
    fill(255);
    textSize(12);
    text("\n\n\nPress <space> to start", width / 2, height / 2);
  }
  
  // Display the score at top right corner of the screen
  textSize(20);
  fill(255, 255, 0); // Yellow color for score
  textFont(gameOverFont);
  textAlign(RIGHT, TOP); // Align text to top right corner
  text("Score: " + score, width - 10, 70); // Position score text
  fill(0, 100, 255); // Sky blue color for hi-score
  text("Hi-Score: " + hiScore, width - 10, 50); // Position hi-score text
}

function keyPressed() {
  if (key === ' ') {
    if (!gameStarted) {
      // Start the game if spacebar is pressed
      gameStarted = true;
      pipes.push(new Pipe());
    } else if (gameOver) {
      // Reset game if spacebar pressed after game over
      gameOver = false;
      bird = new Bird();
      pipes = [];
      score = 0; // Reset score
    } else {
      // Bird jumps if spacebar pressed during the game
      bird.up();
    }
  }
}
