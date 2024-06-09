var genres = [
    {name: "OPM", value: 28},
    {name: "POP", value: 20.2},
    {name: "J-pop", value: 12.25},
    {name: "R&B", value: 12.25},
    {name: "P-Pop", value: 8.75},
    {name: "K-pop", value: 7},
    {name: "Rap", value: 6.3},
    {name: "Metal", value: 5.25}
  ];
  
  function setup() {
    createCanvas(400, 400);
    colorMode(HSB, 360, 100, 100, 100);
    background(0, 0, 100);
    noStroke();
    var diameter = 300;
    var lastAngle = 0;
    
    // Calculate the total value
    var totalValue = genres.reduce((acc, genre) => acc + genre.value, 0);
    
    for(var i = 0; i < genres.length; i++) {
      var genre = genres[i];
      var angle = map(genre.value, 0, totalValue, 0, TWO_PI);
      var c = map(genre.value, 0, max(genres.map(g => g.value)), 0, 100);
      fill(255, 55, c);
      
      // Draw the arc for this segment
      arc(width / 2, height / 2, diameter, diameter, lastAngle, lastAngle + angle);
      
      // Calculate the angle for the text placement
      var midAngle = lastAngle + angle / 2;
      
      // Calculate the position for the text
      var x = width / 2 + cos(midAngle) * diameter / 3;
      var y = height / 2 + sin(midAngle) * diameter / 3;
      
      // Set text properties and draw the text
      fill(255);  // Text color: white
      textAlign(CENTER, CENTER);
      text(genre.name + "\n" + genre.value, x, y);
      
      // Update the lastAngle for the next segment
      lastAngle += angle;
    }
    fill(0,0,0); // Text color: white
    textSize(20);
    textAlign(CENTER, CENTER);
    text("Top Genres of 2023", width / 2, 30);
  }
  