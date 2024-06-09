function setup() {
    createCanvas(400, 400);
    
  }
  
  function draw() {
    background(220);
    
    //sky
    fill('rgb(138,214,255)')
    stroke('black')
    rect(0,0,400)
    
    //road
    fill('rgb(73,70,85)')
    stroke('black')
    rect(0,220,400)
    
    // exhaust
    fill('gray')
    stroke('black')
    rect(40, 248, 28, 7);
    
    // Body of the car
    noStroke()
    fill('rgb(252,239,2)');
    rect(65, 150, 225, 50);
    noStroke();
    fill('rgb(252,239,2)'); // Lighter purple for the fill
    rect(50, 200, 300, 50);
    fill('rgb(252,239,2)')
    triangle(290, 187, 290, 205, 350, 205);
    triangle(290, 150, 290, 200, 310, 200);
    triangle(65, 150, 65, 210, 50, 210);
    
    // Roof
    fill('rgb(252,239,2)');
    noStroke()
    arc(177, 155, 225, 100, PI, TWO_PI);
    
    
    // Wheels
    fill('rgb(55,53,53)');
    stroke ('black')
    ellipse(115, 250, 50, 50);
    ellipse(285, 250, 50, 50);
    fill('rgb(119,109,109)')
    ellipse(115, 250, 20, 20);
    ellipse(285, 250, 20, 20);
    
    // Headlights
    fill('rgb(212,14,14)');
    stroke('black')
    rect(45, 200, 20, 12);
    fill('rgb(254,255,255)')
    rect(336, 200, 16, 12);
    strokeWeight(1.7)
    arc(350, 206, 20, 12, -HALF_PI, HALF_PI); // Semi-ellipse
  
    // Taillights
    fill(255, 0, 0);
    stroke('black')
    fill('rgb(219,80,2)')
    rect(343, 224, 8, 6);
    arc(348, 227, 12, 6, -HALF_PI, HALF_PI); // Semi-ellipse
    
    //windshield
    noStroke();
    fill('rgba(69,62,62,0.63)')
    quad(275, 155, 289, 155, 303.5, 192, 275, 192);
    
    //circle quadrant
    translate(275, 155); // Translate to the desired location
    fill('rgba(69,62,62,0.63)'); // Fill color for the arc
    let radius = 14; // Adjust the radius to make the quadrant smaller
    arc(0, 0, radius * 2, radius * 2, -PI / 2, 0, PIE); 
    
    //windows
    noStroke();
    fill('rgba(69,62,62,0.63)')
    quad(-5, -15, -5, 38, -80, 36, -80, -30); //
    quad(-85, -28, -85, 38, -190, 36, -180, -19);
    
    //handle
    stroke('black')
    fill('rgb(198,217,216)')
    ellipse(-70,48,20,9)
    
  }
  