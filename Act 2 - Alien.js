function setup() {
    createCanvas(600, 600);
  }
  
  function draw() {
    background('rgba(37,35,35,0.91)');
    
    // Draw body
    fill('rgb(148,20,241)');
    ellipse(200, 300, 150, 170);
    
    // Draw head
    fill(150, 100, 200);
    ellipse(200, 200, 100, 120);
    
    // Draw eyes
    fill(255);
    ellipse(170, 190, 20, 20);
    ellipse(230, 190, 20, 20);
    
    // Draw pupils
    fill(0);
    ellipse(170, 190, 10, 10);
    ellipse(230, 190, 10, 10);
    
    // Draw mouth
    stroke(0);
    strokeWeight(2);
    noFill();
    arc(200, 220, 60, 40, 0, PI);
    
    // Draw antennas
    stroke(150, 100, 200);
    strokeWeight(4);
    line(195, 150, 180, 120);
    line(200, 150, 220, 130);
    
    // Draw antenna balls
    fill(150, 100, 200);
    noStroke();
    ellipse(180, 120, 10, 10);
    ellipse(220, 130, 10, 10);
  }
  
  